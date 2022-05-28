import { SearchOutlined } from "@mui/icons-material";
import { IconButton, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import TicketInfo from "./TicketInfo";
import { useNavigate, useSearchParams } from "react-router-dom";
import FlightContext from "../store/flight-context";

const TicketSearch = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const { setSeats } = useContext(FlightContext);

  useEffect(() => {
    if (!params.get("q")) return;

    fetch(`http://localhost:8000/api/tickets/${params.get("q")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("404");
        }
        return res.json();
      })
      .then((data) => {
        setResult(data);
        setSeats(data.seats);
        setError("");
        console.log(data);
      })
      .catch((err) => {
        setResult(null);
        setError("Ticket not found");
      });
  }, [params, setSeats]);

  const onDelete = () => {
    fetch(`http://localhost:8000/api/tickets/${params.get("q")}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return navigate("/");
        }
        throw new Error(res.json());
      })
      .catch((err) => {
        alert("Error");
      });
  };

  const onSearch = (event) => {
    event.preventDefault();
    setParams({ q: search });
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
      {result && (
        <TicketInfo
          mt={2}
          flightInfo={result.inboundFlight}
          personalInfo={result.passenger}
          ticketNumber={result.ticket_id}
          ticketActionText="Cancel Ticket"
          onTicketAction={onDelete}
        />
      )}
      {error && (
        <Typography variant="h5"> No ticket found with this id </Typography>
      )}
    </Box>
  );
};

export default TicketSearch;
