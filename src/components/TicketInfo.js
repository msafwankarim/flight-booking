import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FlightInfoCard from "./FlightInfoCard";
import PricingInfoCard from "./PricingInfoCard";

const TicketInfo = ({ flightInfo, personalInfo, ticketNumber, ...others }) => {
  return (
    <Box {...others}>
      <Typography variant="h6">
        Ticket# {ticketNumber ? ticketNumber : "___________"}
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={8}>
          <FlightInfoCard flight={flightInfo} />
        </Grid>
        <Grid item md={4} mt={1}>
          <PricingInfoCard flight={flightInfo} passenger={personalInfo} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketInfo;
