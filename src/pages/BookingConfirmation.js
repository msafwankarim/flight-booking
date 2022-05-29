import { Container } from "@mui/material";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BookingInfoTabs from "../components/BookingInfoTabs";
import FlightContext from "../store/flight-context";

const BookingConfirmation = () => {
  const { inboundFlight, setInboundFlight, outboundFlight, setOutboundFlight } =
    useContext(FlightContext);
  const navigate = useNavigate();
  const confirmCallback = (ticket) => {
    setOutboundFlight(() => null);
    setInboundFlight(() => null);
    console.log("Inbound: ", inboundFlight);
    console.log("Outbound: ", outboundFlight);
    navigate("/track-ticket?q=" + ticket.ticket_id);
  };
  return (
    <>
      {!outboundFlight && <Navigate to="/home" />}
      <Container maxWidth="xl">
        <BookingInfoTabs confirmCallback={confirmCallback} />
      </Container>
    </>
  );
};

export default BookingConfirmation;
