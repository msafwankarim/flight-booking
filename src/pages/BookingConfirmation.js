import { Container } from "@mui/material";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import BookingInfoTabs from "../components/BookingInfoTabs";
import FlightContext from "../store/flight-context";

const BookingConfirmation = () => {
  const { inboundFlight } = useContext(FlightContext);

  return (
    <Container maxWidth="xl">
      {!inboundFlight && <Navigate to="/search" />}
      <BookingInfoTabs flightInfo={inboundFlight} />
    </Container>
  );
};

export default BookingConfirmation;
