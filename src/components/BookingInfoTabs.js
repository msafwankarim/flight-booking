import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import FlightInfoCard from "./FlightInfoCard";
import PersonalInfoForm from "./PersonalInfoForm";
import PricingInfoCard from "./PricingInfoCard";
import TabPanel from "./TabPanel";
import TicketInfo from "./TicketInfo";

const BookingInfoTabs = ({ flightInfo }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(null);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const onNext = (info) => {
    setPersonalInfo(info);
    setActiveTab(1);
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
          <TicketInfo flightInfo={flightInfo} personalInfo={personalInfo} />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default BookingInfoTabs;
