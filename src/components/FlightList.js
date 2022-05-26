import { List } from "@mui/material";
import { useState } from "react";
import FlightInfoModal from "./FlightInfoModal";
import FlightListItem from "./FlightListItem";

const FlightList = ({ list }) => {
  const [flightInfoModal, setFlightInfoModal] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const onBooking = (flight) => {
    setSelectedFlight(flight);
    setFlightInfoModal(true);
  };

  return (
    <>
      <List>
        {list.map((e, i) => (
          <FlightListItem data={e} key={i} onBooking={onBooking} elevated />
        ))}
      </List>
      {flightInfoModal && (
        <FlightInfoModal
          flight={selectedFlight}
          open={flightInfoModal}
          handleClose={() => setFlightInfoModal(false)}
        />
      )}
    </>
  );
};

export default FlightList;
