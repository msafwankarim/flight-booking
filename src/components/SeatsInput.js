import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

const SeatsInput = ({ seats, setSeats }) => {
  const incrementSeats = () => {
    setSeats((prevSeats) => {
      return prevSeats + 1;
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
          <InputAdornment position="start">
            <IconButton onClick={decrementSeats}>-</IconButton>,
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={incrementSeats}>+</IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SeatsInput;
