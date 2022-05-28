import { useState } from "react";
import FlightContext from "./flight-context";

const FlightContextProvider = ({ children }) => {
  const [inboundFlight, setInboundFlight] = useState(null),
    [outboundFlight, setOutboundFlight] = useState(null),
    [seats, setSeats] = useState(0);
  return (
    <FlightContext.Provider
      value={{
        inboundFlight,
        outboundFlight,
        setInboundFlight,
        setOutboundFlight,
        seats,
        setSeats,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContextProvider;
