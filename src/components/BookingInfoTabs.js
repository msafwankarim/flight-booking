import { Box, CircularProgress, Tab, Tabs } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import FlightContext from "../store/flight-context";
import TicketInfo from "./TicketInfo";

const BookingInfoTabs = ({ confirmCallback }) => {
  const { inboundFlight, outboundFlight, setOutboundFlight, setInboundFlight } =
    useContext(FlightContext);
  const [personalInfo, setPersonalInfo] = useState(null);

  const { userInfo, seats } = useContext(FlightContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${userInfo.userId}`)
      .then((res) => {
        console.log(res.data);
        setPersonalInfo(res.data.user);
      });
  }, [userInfo]);

  const onConfirmBooking = async () => {
    let ticket = {
      outboundFlight: outboundFlight._id,
      passenger: userInfo.userId,
      seats,
    };

    if (inboundFlight) ticket.inboundFlight = inboundFlight._id;
    try {
      const res = await axios.post("http://localhost:8000/api/tickets", ticket);
      ticket = res.data.ticket;
      confirmCallback(ticket);
    } catch (e) {
      alert("Booking Failed");
    }
  };

  return (
    <Box>
      {personalInfo ? (
        <Box className="tab-panels" sx={{ mt: 1 }}>
          <TicketInfo
            flights={{ inboundFlight, outboundFlight }}
            personalInfo={personalInfo}
            ticketActionText="Continue for payment"
            onTicketAction={onConfirmBooking}
          />
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default BookingInfoTabs;
