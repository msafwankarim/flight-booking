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

const getTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;

  return strTime;
};

const FlightListItem = ({ data }) => {
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
      {data.isRefundable ? "Refundable" : ""}
    </Typography>
  );

  let departureTime = getTime(data.departureDate),
    arrivalTime = getTime(data.arrivalDate);

  return (
    <ListItem sx={{ padding: 0, margin: 0 }}>
      <ListItemButton sx={{ paddingX: 0 }}>
        <Paper
          variant="elevation"
          elevation={4}
          sx={{ flexGrow: 1, display: "flex" }}
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
              <Avatar>{data.airline_name[0]}</Avatar>
              <Box
                sx={{
                  display: "flex",
                  marginLeft: 1,
                  flexGrow: 1,
                }}
              >
                <Box display="flex" flexGrow="1" alignItems="center">
                  <Typography variant="h6">{departureTime}</Typography>
                  <Box
                    flexGrow="1"
                    height="2px"
                    sx={{ backgroundColor: "lightgray", marginX: 2 }}
                  >
                    {" "}
                  </Box>
                  <Typography variant="h6">{arrivalTime}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box padding={2} borderLeft="1px solid lightgray">
            <Typography fontWeight="bold" marginY={1}>
              Rs. {data.price.toLocaleString()}
            </Typography>
            <Button fullWidth variant="contained" sx={{ marginY: 1 }}>
              Book me
            </Button>
            <Typography marginY={1}>
              {data.numberOfPassengers} Passenger(s)
            </Typography>
          </Box>
        </Paper>
      </ListItemButton>
    </ListItem>
  );
};

export default FlightListItem;
