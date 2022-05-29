import { List } from "@mui/material";
import { useState } from "react";
import RoundTripInfoModal from "./RoundTripInfoModal";
import RoundTripListItem from "./RoundTripListItem";

const RoundTripList = ({ list }) => {
  const [tripInfoModal, setTripInfoModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const onBooking = (flight) => {
    setSelectedTrip(flight);
    setTripInfoModal(true);
  };

  return (
    <>
      <List>
        {list.map((e, i) => (
          <RoundTripListItem data={e} key={i} onBooking={onBooking} elevated />
        ))}
      </List>
      {tripInfoModal && (
        <RoundTripInfoModal
          trip={selectedTrip}
          handleClose={() => setTripInfoModal(false)}
        />
      )}
    </>
  );
};

export default RoundTripList;
