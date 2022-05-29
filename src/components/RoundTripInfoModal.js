import { useNavigate, useSearchParams } from "react-router-dom";
import { Modal, Container, IconButton } from "@mui/material";
import { useContext } from "react";
import { CloseOutlined } from "@mui/icons-material";
import FlightContext from "../store/flight-context";
import RoundTripInfoCard from "./RoundTripInfoCard";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  closeButtonStyle = {
    position: "absolute",
    top: "0",
    right: "0",
  };

const RoundTripInfoModal = ({ handleClose, trip }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setInboundFlight, setOutboundFlight } = useContext(FlightContext);

  const confirmBooking = (event) => {
    let seats = searchParams.get("seats");

    setInboundFlight(trip.inboundFlight);
    setOutboundFlight(trip.outboundFlight);

    navigate({
      pathname: `/booking/${trip.inboundFlight._id}`,
      search: `?seats=${seats || 1}`,
    });
  };

  return (
    <Modal open={true} onClose={handleClose}>
      <Container sx={style} maxWidth="lg">
        <IconButton sx={closeButtonStyle} onClick={handleClose}>
          <CloseOutlined />
        </IconButton>
        <RoundTripInfoCard trip={trip} onConfirmBooking={confirmBooking} />
      </Container>
    </Modal>
  );
};

export default RoundTripInfoModal;
