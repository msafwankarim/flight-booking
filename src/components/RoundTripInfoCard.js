import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import FlightInfoCard from "./FlightInfoCard";
import TabPanel from "./TabPanel";

const RoundTripInfoCard = ({ trip, onConfirmBooking, buttonText, seats }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <Box>
      <Box borderBottom={1} borderColor="divider">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Outbound Flight" />
          <Tab label="Inbound Flight" />
        </Tabs>
      </Box>
      <Box className="tab-panels" sx={{ mt: 1 }}>
        <TabPanel value={0} activeValue={activeTab}>
          <FlightInfoCard
            flight={trip.outboundFlight}
            buttonText={buttonText}
            onConfirmBooking={onConfirmBooking}
            seats={seats}
          />
        </TabPanel>
        <TabPanel value={1} activeValue={activeTab}>
          <FlightInfoCard
            flight={trip.inboundFlight}
            buttonText={buttonText}
            onConfirmBooking={onConfirmBooking}
            seats={seats}
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default RoundTripInfoCard;
