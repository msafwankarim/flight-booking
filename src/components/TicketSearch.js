import { SearchOutlined } from "@mui/icons-material";
import { IconButton, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TicketInfo from "./TicketInfo";
import { DUMMY_RESULTS } from "../utils/dummy-data";

const TicketSearch = () => {
  const [search, setSearch] = useState("");
  const [resultsVisible, setResultsVisible] = useState(false);
  const flight = DUMMY_RESULTS[0];
  const person = {
    firstName: "Mohsin",
    lastName: "Ali",
    cnic: "12231-46545-46",
    phone: "923412345678",
  };
  const onSearch = (event) => {
    event.preventDefault();
    setResultsVisible(true);
  };

  return (
    <Box>
      <Paper component="form" onSubmit={onSearch}>
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Ticket #"
          required
          placeholder="000000000"
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
      </Paper>
      {resultsVisible && (
        <TicketInfo
          mt={2}
          flightInfo={flight}
          personalInfo={person}
          ticketNumber={search}
        />
      )}
    </Box>
  );
};

export default TicketSearch;
