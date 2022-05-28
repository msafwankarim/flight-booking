import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import BookingConfirmation from "./pages/BookingConfirmation";
import SearchResultsPage from "./pages/SearchResultsPage";
import HomePage from "./pages/HomePage";
import TrackTicket from "./pages/TrackTicket";
import FlightContextProvider from "./store/FlightContextProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ marginTop: 15 }}>
        <FlightContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/booking/:id" element={<BookingConfirmation />} />
            <Route path="/track-ticket" element={<TrackTicket />} />
          </Routes>
        </FlightContextProvider>
      </Box>
    </div>
  );
}

export default App;
