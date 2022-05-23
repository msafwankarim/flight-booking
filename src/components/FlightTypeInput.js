import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FlightTypeInput = ({ flight, setFlight }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Flight Type</InputLabel>
      <Select
        label="Flight Type"
        required
        value={flight}
        onChange={(event) => setFlight(event.target.value)}
      >
        <MenuItem value="economy">Economy</MenuItem>
        <MenuItem value="p-economy">Premium Economy</MenuItem>
        <MenuItem value="business">Business</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FlightTypeInput;
