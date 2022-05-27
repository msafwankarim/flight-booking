import {
  AccessTimeOutlined,
  AirplanemodeActiveOutlined,
  FlightLand,
  FlightTakeoff,
} from "@mui/icons-material";

import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { getTimeDifference } from "../utils/date-helpers";
import FlightListItem from "./FlightListItem";
import FlightTime from "./FlightTime";

const FlightInfoCard = ({ flight, onConfirmBooking, buttonText }) => {
  return (
    <Box>
      <FlightListItem data={flight} />
      <Card variant="outlined" sx={{ padding: 1 }}>
        <Box className="header" display="inline-flex" gap={2} padding={1}>
          <Typography>{flight.departure.location}</Typography>
          <AirplanemodeActiveOutlined sx={{ transform: "rotate(45deg)" }} />
          <Typography>{flight.arrival.location}</Typography>
        </Box>
        <Divider />
        <CardContent>
          <Grid container rowGap={2} textAlign="center">
            <Grid item xs={12} sm={5} display="flex" justifyContent="center">
              <Box width="fit-content">
                <Typography variant="h5">
                  <FlightTakeoff />
                  &nbsp; Departure
                </Typography>
                <FlightTime detailed flightTime={flight.departure} />
              </Box>
            </Grid>
            <Grid
              item
              sm={2}
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                border="1px solid lightgray"
                borderRadius="3px"
                width="fit-content"
                padding={1}
              >
                <Typography>
                  <AccessTimeOutlined />
                  &nbsp;
                  {getTimeDifference(
                    flight.arrival.date,
                    flight.departure.date
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} display="flex" justifyContent="center">
              <Box width="fit-content">
                <Typography variant="h5">
                  <FlightLand />
                  &nbsp; Arrival
                </Typography>
                <FlightTime detailed flightTime={flight.arrival} />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 1 }}
        onClick={onConfirmBooking}
      >
        {buttonText || "Confirm Booking"}
      </Button>
    </Box>
  );
};

export default FlightInfoCard;
