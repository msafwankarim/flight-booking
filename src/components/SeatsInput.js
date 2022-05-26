import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { TextField, IconButton } from "@mui/material";

const SeatsInput = ({ seats, setSeats }) => {
  const incrementSeats = () => {
    setSeats((prevSeats) => {
      return prevSeats * 1 + 1;
    });
  };

  const decrementSeats = () => {
    setSeats((prevSeats) => {
      let newSeats = prevSeats - 1;
      if (newSeats < 1) return prevSeats;
      else return newSeats;
    });
  };

  return (
    <TextField
      variant="outlined"
      label="Number of Seats"
      value={seats}
      onChange={(event) => setSeats(event.target.value)}
      type="number"
      InputProps={{
        startAdornment: (
          <IconButton onClick={decrementSeats} sx={{ fontSize: "16px" }}>
            <RemoveOutlined fontSize="inherit" />
          </IconButton>
        ),
        endAdornment: (
          <IconButton onClick={incrementSeats} sx={{ fontSize: "16px" }}>
            <AddOutlined fontSize="inherit" />
          </IconButton>
        ),
      }}
    />
  );
};

export default SeatsInput;
