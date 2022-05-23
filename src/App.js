import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{ marginTop: 15 }}>
        <MainSection />
      </Container>
    </div>
  );
}

export default App;
