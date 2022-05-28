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
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [queryParams] = useSearchParams();
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);
  const [emptyForm, setEmptyForm] = useState(
    Object.keys(Object.fromEntries(queryParams)).length === 0
  );

  useEffect(() => {
    if (emptyForm)
      return setEmptyForm(
        Object.keys(Object.fromEntries(queryParams)).length === 0
      );

    fetch(
      `http://localhost:8000/api/flights?${createSearchParams(queryParams)}`
    )
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error(res.json());
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.flights);
        setResults(data.flights);
        setError(false);
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
        <FlightList list={results} />
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
