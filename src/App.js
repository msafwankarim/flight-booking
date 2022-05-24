import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import BookingConfirmation from "./pages/BookingConfirmation";
import SearchResults from "./pages/SearchResults";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{ marginTop: 15 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
