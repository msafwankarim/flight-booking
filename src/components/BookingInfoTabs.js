import { Box, Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FlightContext from "../store/flight-context";
import PaymentModal from "./PaymentModal";
import PersonalInfoForm from "./PersonalInfoForm";
import TabPanel from "./TabPanel";
import TicketInfo from "./TicketInfo";

const BookingInfoTabs = ({ flightInfo }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(null),
    [paymentModal, setPaymentModal] = useState(false);

  const [params] = useSearchParams();
  const navigate = useNavigate();
  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const { inboundFlight, outboundFlight } = useContext(FlightContext);

  const onNext = (info) => {
    setPersonalInfo(info);
    setActiveTab(1);
  };

  const onPayment = (creditCartInfo) => {
    const passengerData = { ...personalInfo, ...creditCartInfo };

    const ticket = {
      passenger: passengerData,
      inboundFlight: inboundFlight._id,
      seats: params.get("seats") * 1,
    };

    if (outboundFlight) ticket.outboundFlight = outboundFlight._id;

    fetch(`http://localhost:8000/api/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save data");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate({
          pathname: "/track-ticket",
          search: `?q=${data.ticket.ticket_id}`,
        });
      });
  };

  return (
    <Box>
      <Box borderBottom={1} borderColor="divider">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal Information" />
          <Tab disabled={!personalInfo} label="Flight Information" />
        </Tabs>
      </Box>
      <Box className="tab-panels" sx={{ mt: 1 }}>
        <TabPanel value={0} activeValue={activeTab}>
          <PersonalInfoForm onNext={onNext} initialInfo={personalInfo} />
        </TabPanel>
        <TabPanel value={1} activeValue={activeTab}>
          <TicketInfo
            flightInfo={flightInfo}
            personalInfo={personalInfo}
            ticketActionText="Continue for payment"
            onTicketAction={() => setPaymentModal(true)}
          />
        </TabPanel>
      </Box>
      {paymentModal && (
        <PaymentModal
          handleClose={() => setPaymentModal(false)}
          onPayment={onPayment}
          amount={flightInfo.price * (params.get("seats") * 1)}
        />
      )}
    </Box>
  );
};

export default BookingInfoTabs;
