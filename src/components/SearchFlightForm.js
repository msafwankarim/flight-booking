import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import FlightTypeInput from "./FlightTypeInput";
import LoactionInput from "./LocationInput";
import SeatsInput from "./SeatsInput";
import TripTypeInput from "./TripTypeInput";

const SearchFlightForm = () => {
  const [tripType, setTripType] = useState("round-trip");
  const [seats, setSeats] = useState(1);
  const [flight, setFlight] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [dateFlexible, setDateFlexible] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      tripType,
      seats,
      flight,
      departureLocation,
      destination,
      departureDate,
      returnDate,
      dateFlexible,
    };
    if (data.tripType === "one-way") {
      data.returnDate = undefined;
    }
    console.log(data);
  };

  return (
    <form style={{ margin: "1em" }} onSubmit={formSubmitHandler}>
      <Typography variant="h5">Search a Flight</Typography>

      <TripTypeInput tripType={tripType} setTripType={setTripType} />

      <Grid container rowSpacing={3} spacing={1}>
        <Grid item xs={12} md={6}>
          <LoactionInput
            label="Departure Location"
            location={departureLocation}
            setLocation={setDepartureLocation}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LoactionInput
            label="Destination"
            location={destination}
            setLocation={setDestination}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            label="Departure Date"
            value={departureDate}
            required
            onChange={(e) => setDepartureDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="date"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            label="Return Date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="date"
            disabled={tripType === "one-way"}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <SeatsInput seats={seats} setSeats={setSeats} />
        </Grid>
        <Grid item xs={12} md={9}>
          <FlightTypeInput flight={flight} setFlight={setFlight} />
        </Grid>
      </Grid>
      <FormControlLabel
        control={
          <Checkbox
            checked={dateFlexible}
            onChange={(e) => setDateFlexible(e.target.checked)}
          />
        }
        label="My dates are flexible"
      />
      <Button
        sx={{ marginTop: "1em" }}
        variant="contained"
        type="submit"
        fullWidth
      >
        Search
      </Button>
    </form>
  );
};

export default SearchFlightForm;
