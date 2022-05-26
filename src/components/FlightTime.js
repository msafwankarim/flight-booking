import { Box, Typography } from "@mui/material";
import { getMonthAndDay, getTime } from "../utils/date-helpers";

const FlightTime = ({ flightTime, detailed }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      mt={1}
    >
      <Typography variant="h6">{getTime(flightTime.date)}</Typography>
      <Typography color="GrayText">
        {getMonthAndDay(flightTime.date)}
      </Typography>
      <Typography color="InfoText">{flightTime.location}</Typography>
      {detailed && (
        <Typography variant="caption">{flightTime.airport_name}</Typography>
      )}
    </Box>
  );
};

export default FlightTime;
