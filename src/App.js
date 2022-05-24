import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import BookingConfirmation from "./pages/BookingConfirmation";
import SearchResultsPage from "./pages/SearchResultsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ marginTop: 15 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
