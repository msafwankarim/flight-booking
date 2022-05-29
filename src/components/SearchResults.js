import {
  Typography,
  Paper,
  Box,
  Container,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import FlightList from "./FlightList";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import RoundTripList from "./RoundTripList";
import FlightContext from "../store/flight-context";

const SearchResults = () => {
  const [queryParams] = useSearchParams();
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false),
    [roundTrips, setRoundTrips] = useState(false);
  const { setSeats } = useContext(FlightContext);
  const [emptyForm, setEmptyForm] = useState(
    Object.keys(Object.fromEntries(queryParams)).length === 0
  );

  useEffect(() => {
    if (emptyForm)
      return setEmptyForm(
        Object.keys(Object.fromEntries(queryParams)).length === 0
      );
    setSeats(queryParams.get("seats") * 1);
    axios
      .get(
        `http://localhost:8000/api/flights?${createSearchParams(queryParams)}`
      )
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
        setRoundTrips(res.data.roundTrips);
      })
      .catch((err) => {
        setError(err);
      });
  }, [queryParams, emptyForm]);

  let output = <></>;

  if (emptyForm) {
    output = <Typography>Fill the form to search flights</Typography>;
  } else if (!results && !error) {
    output = <CircularProgress />;
  } else if (error) {
    output = (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        An internal error occurred
      </Alert>
    );
  } else if (results && results.length === 0) {
    output = (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        No Results found
      </Alert>
    );
  } else {
    output = (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h6">Search Results</Typography>
          <Typography>
            <b>{results.length}</b> results found
          </Typography>
        </Box>
        {roundTrips ? (
          <RoundTripList list={results} />
        ) : (
          <FlightList list={results} />
        )}
      </>
    );
  }

  return (
    <Container
      maxWidth="lg"
      className="searchResults"
      style={{ padding: "1em" }}
    >
      <Paper variant="outlined" sx={{ padding: 1 }}>
        {output}
      </Paper>
    </Container>
  );
};

export default SearchResults;
