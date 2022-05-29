import { SearchOutlined } from "@mui/icons-material";
import {
  Alert,
  CircularProgress,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import FlightContext from "../store/flight-context";
import TicketResult from "./TicketResult";

const TicketSearch = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null),
    [message, setMessage] = useState(null);

  const { userInfo } = useContext(FlightContext);

  const getSearchTicket = () => {
    axios
      .get(`http://localhost:8000/api/tickets/${search}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.ticket);
        setError("");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const getAllTickets = () => {
    axios
      .get(`http://localhost:8000/api/users/${userInfo.userId}/tickets`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.tickets);
        setError("");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  useEffect(() => {
    if (!params.get("q")) {
      getAllTickets();
    } else {
      getSearchTicket();
    }
  }, [params]);

  const onSearch = (event) => {
    event.preventDefault();
    setParams({ q: search });
  };

  let output = <CircularProgress />;

  if (Array.isArray(result)) {
    output = result.map((elem) => {
      return (
        <div>
          <TicketResult
            ticket={elem}
            key={elem._id}
            deleteCallback={getAllTickets}
            setMessage={setMessage}
          />
        </div>
      );
    });
  } else if (result) {
    output = (
      <TicketResult
        ticket={result}
        deleteCallback={getAllTickets}
        setMessage={setMessage}
      />
    );
  }

  return (
    <Box>
      <Paper component="form" onSubmit={onSearch}>
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Ticket #"
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
      {!error && output}
      {message && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={() => setMessage(null)}
        >
          <Alert
            severity={message.type}
            variant="filled"
            sx={{ width: "100%" }}
            action={message.action}
            onClose={() => setMessage(null)}
          >
            {message.text}
          </Alert>
        </Snackbar>
      )}
      {error && <Typography variant="h5">{error} </Typography>}
    </Box>
  );
};

export default TicketSearch;
