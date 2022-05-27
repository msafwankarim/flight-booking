import { ClosedCaptionOutlined, CloseOutlined } from "@mui/icons-material";
import { Modal, Container, IconButton } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import FlightInfoCard from "./FlightInfoCard";

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

const FlightInfoModal = ({ flight, open, handleClose }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const confirmBooking = (event) => {
    let seats = searchParams.get("seats");
    navigate({
      pathname: `/booking/${flight._id}`,
      search: `?seats=${seats || 1}`,
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Container sx={style} maxWidth="lg">
        <IconButton sx={closeButtonStyle} onClick={handleClose}>
          <CloseOutlined />
        </IconButton>
        <FlightInfoCard flight={flight} onConfirmBooking={confirmBooking} />
      </Container>
    </Modal>
  );
};

export default FlightInfoModal;
