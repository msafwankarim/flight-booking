import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import BookingConfirmation from "./pages/BookingConfirmation";
import SearchResultsPage from "./pages/SearchResultsPage";
import HomePage from "./pages/HomePage";
import TrackTicket from "./pages/TrackTicket";
import { useContext, useEffect } from "react";
import FlightContext from "./store/flight-context";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import LandingPage from "./pages/LandingPage";

function App() {
  const { userInfo, setUserInfo } = useContext(FlightContext);

  useEffect(() => {
    if (userInfo) return;
    const data = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(data);
  }, [userInfo, setUserInfo]);
  console.log(userInfo);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box sx={{ marginTop: 15 }}>
          {userInfo ? (
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/booking/:id" element={<BookingConfirmation />} />
              <Route path="/track-ticket" element={<TrackTicket />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
