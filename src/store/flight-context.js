import { createContext } from "react";

const FlightContext = createContext({
  inboundFlight: null,
  outboundFlight: null,
  seats: 0,
  userInfo: null,
  setUserInfo: () => {},
  setInboundFlight: () => {},
  setOutboundFlight: () => {},
  setSeats: () => {},
});

export default FlightContext;
