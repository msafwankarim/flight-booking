import {
  Avatar,
  ListItemButton,
  ListItem,
  Paper,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { useContext } from "react";
import FlightContext from "../store/flight-context";
import FlightTime from "./FlightTime";

const FlightListItem = ({ data, onBooking, elevated }) => {
  const { seats } = useContext(FlightContext);
  const refundableText = (
    <Typography
      variant="caption"
      fontWeight="bold"
      sx={{
        color: "green",
        bgcolor: "lightgreen",
        padding: "3px",
        borderRadius: "3px",
      }}
    >
      {data.isRefundable ? "Refundable" : "Non Refundable"}
    </Typography>
  );

  const handleBookme = (event) => {
    onBooking(data);
  };
  return (
    <ListItem sx={{ padding: 0, margin: 0 }}>
      <ListItemButton sx={{ paddingX: 0 }}>
        <Paper
          variant={elevated ? "elevation" : "outlined"}
          elevation={elevated ? 4 : 0}
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box flexGrow="1">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#f6f6f6",
                paddingY: "5px",
                paddingX: 2,
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                {data.airline_name}
              </Typography>
              {refundableText}
            </Box>
            <Divider />
            <Box
              display="flex"
              sx={{
                padding: 2,
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                {data.airline_name[0]}
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  marginX: 3,
                  flexGrow: 1,
                }}
              >
                <Box display="flex" flexGrow="1" alignItems="center">
                  <FlightTime flightTime={data.departure} />
                  <Box
                    flexGrow="1"
                    height="2px"
                    sx={{ backgroundColor: "lightgray", marginX: 2 }}
                  ></Box>
                  <FlightTime flightTime={data.arrival} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            padding={2}
            borderLeft="1px solid lightgray"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography fontWeight="bold" marginY={1}>
              Rs. {(data.price * seats).toLocaleString()}
            </Typography>
            {onBooking && (
              <Button
                fullWidth
                variant="contained"
                sx={{ marginY: 1 }}
                onClick={handleBookme}
              >
                Book me
              </Button>
            )}
            <Typography marginY={1}>{seats} Passenger(s)</Typography>
          </Box>
        </Paper>
      </ListItemButton>
    </ListItem>
  );
};

export default FlightListItem;
