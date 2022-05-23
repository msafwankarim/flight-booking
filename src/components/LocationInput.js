import { TextField } from "@mui/material";

const LoactionInput = ({ label, location, setLocation }) => {
  return (
    <TextField
      variant="outlined"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      label={label}
      placeholder="City or Airport"
      fullWidth
      required
    />
  );
};

export default LoactionInput;
