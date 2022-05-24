import { Typography, Paper, Box, Container } from "@mui/material";
import FlightList from "./FlightList";

const SearchResults = () => {
  const DUMMY_RESULTS = [
    {
      airline_name: "Qatar Airways",
      departureDate: new Date(),
      arrivalDate: new Date(),
      departureLocation: "Islamabad",
      arrivalLocation: "Sharjah",
      isRefundable: true,
      price: 253167,
      numberOfPassengers: 1,
    },
    {
      airline_name: "PIA",
      departureDate: new Date(),
      arrivalDate: new Date(),
      departureLocation: "Karachi",
      arrivalLocation: "Islamabad",
      isRefundable: true,
      price: 253167,
      numberOfPassengers: 1,
    },
    {
      airline_name: "PIA",
      departureDate: new Date(),
      arrivalDate: new Date(),
      departureLocation: "Karachi",
      arrivalLocation: "Lahore",
      isRefundable: true,
      price: 253167,
      numberOfPassengers: 1,
    },
  ];

  return (
    <Container
      maxWidth="lg"
      className="searchResults"
      style={{ padding: "1em" }}
    >
      <Paper variant="outlined" sx={{ padding: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h6">Search Results</Typography>
          <Typography>
            <b>{DUMMY_RESULTS.length}</b> results found
          </Typography>
        </Box>

        <FlightList list={DUMMY_RESULTS} />
      </Paper>
    </Container>
  );
};

export default SearchResults;
