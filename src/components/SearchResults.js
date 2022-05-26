import { Typography, Paper, Box, Container } from "@mui/material";
import FlightList from "./FlightList";
import { DUMMY_RESULTS } from "../utils/dummy-data";

const SearchResults = () => {
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
