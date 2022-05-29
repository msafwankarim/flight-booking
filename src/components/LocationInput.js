import { TextField } from "@mui/material";

const LocationInput = ({ label, location, setLocation }) => {
  return (
    <TextField
      variant="outlined"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      label={label}
      placeholder="City"
      name="Location"
      fullWidth
      required
    />
  );
};

export default LocationInput;
