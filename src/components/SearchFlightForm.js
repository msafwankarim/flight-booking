import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import FlightTypeInput from "./FlightTypeInput";
import LoactionInput from "./LocationInput";
import SeatsInput from "./SeatsInput";
import TripTypeInput from "./TripTypeInput";

const SearchFlightForm = ({ isSearchPage }) => {
  // React Router
  const navigate = useNavigate(),
    [searchParams, setSearchParams] = useSearchParams();

  const [tripType, setTripType] = useState(
    searchParams.get("tripType") || "one-way"
  );

  const [seats, setSeats] = useState(searchParams.get("seats") || 1);
  const [flight, setFlight] = useState(searchParams.get("flight") || "economy");
  const [departureLocation, setDepartureLocation] = useState(
    searchParams.get("departureLocation") || ""
  );
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [departureDate, setDepartureDate] = useState(
    searchParams.get("departureDate") || ""
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get("returnDate") || ""
  );
  const [dateFlexible, setDateFlexible] = useState(
    searchParams.get("dateFlexible") === "true" || false
  );

  let normalGridSpan = 6,
    seatsGridSpan = 3,
    ticketTypeGridSpan = 12 - seatsGridSpan;

  if (isSearchPage) {
    normalGridSpan = 2;
    seatsGridSpan = 2;
    ticketTypeGridSpan = 2;
  }

  const flexibleDatesComponent = (
    <FormControlLabel
      control={
        <Checkbox
          checked={dateFlexible}
          onChange={(e) => setDateFlexible(e.target.checked)}
        />
      }
      label="My dates are flexible"
    />
  );

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
      delete data.returnDate;
    }
    console.log(data);

    setSearchParams(data);

    if (!isSearchPage) {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(data)}`,
      });
    }
  };

  return (
    <form style={{ margin: "1em" }} onSubmit={formSubmitHandler}>
      <Typography variant="h5">Search a Flight</Typography>

      {isSearchPage ? (
        <Box sx={{ display: "flex" }}>
          <TripTypeInput tripType={tripType} setTripType={setTripType} />
          {flexibleDatesComponent}
        </Box>
      ) : (
        <TripTypeInput tripType={tripType} setTripType={setTripType} />
      )}
      <Grid container rowSpacing={3} spacing={1}>
        <Grid item xs={12} md={normalGridSpan}>
          <LoactionInput
            label="Departure Location"
            location={departureLocation}
            setLocation={setDepartureLocation}
          />
        </Grid>
        <Grid item xs={12} md={normalGridSpan}>
          <LoactionInput
            label="Destination"
            location={destination}
            setLocation={setDestination}
          />
        </Grid>
        <Grid item xs={12} md={normalGridSpan}>
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
        <Grid item xs={12} md={normalGridSpan}>
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
        <Grid item xs={12} md={seatsGridSpan} sx={{ display: "flex" }}>
          <SeatsInput seats={seats} setSeats={setSeats} />
        </Grid>
        <Grid item xs={12} md={ticketTypeGridSpan}>
          <FlightTypeInput flight={flight} setFlight={setFlight} />
        </Grid>
      </Grid>
      {!isSearchPage && flexibleDatesComponent}
      <Button
        sx={{
          marginTop: "1em",
          marginLeft: "auto",
          marginRight: "0",
          display: "block",
        }}
        variant="contained"
        type="submit"
        fullWidth={!isSearchPage}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchFlightForm;
