import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FlightInfoCard from "./FlightInfoCard";
import PricingInfoCard from "./PricingInfoCard";
import RoundTripInfoCard from "./RoundTripInfoCard";

const TicketInfo = ({
  flights,
  personalInfo,
  ticketNumber,
  onTicketAction,
  ticketActionText,
  seats,
  ...others
}) => {
  console.log(flights.inboundFlight);
  return (
    <Box {...others}>
      <Typography variant="h6">
        Ticket# {ticketNumber ? ticketNumber : "___________"}
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={8}>
          {flights.inboundFlight ? (
            <RoundTripInfoCard
              trip={flights}
              buttonText={ticketActionText}
              onConfirmBooking={onTicketAction}
              seats={seats}
            />
          ) : (
            <FlightInfoCard
              flight={flights.outboundFlight}
              onConfirmBooking={onTicketAction}
              buttonText={ticketActionText}
              seats={seats}
            />
          )}
        </Grid>
        <Grid item md={4} mt={1}>
          <PricingInfoCard
            flights={flights}
            passenger={personalInfo}
            seats={seats}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketInfo;
