import { createContext } from "react";

const FlightContext = createContext({
  inboundFlight: null,
  outboundFlight: null,
  setInboundFlight: () => {},
  setOutboundFlight: () => {},
  seats: 0,
  setSeats: () => {},
});

export default FlightContext;
