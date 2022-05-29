import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [classes, setClasses] = useState("");

  return (
    <Grid container maxWidth="1366px" mx="auto">
      <Grid item md={6}>
        <Box className="fade-in-left">
          <Typography variant="h1" fontWeight="bold">
            Book your Flights now with{" "}
            <span style={{ color: "orange" }}>Book Me</span>
          </Typography>
          <Typography variant="subtitle1" maxWidth="sm">
            One of the leading online booking engine providers EXCLUSIVELY for
            travel agencies. Our aim is to provide you with a fast and easy
            online access to the flight booking to our clients, wherever and
            whenever that may be.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3, marginLeft: "auto", marginRight: 0 }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Book Flight Now
            </Link>
          </Button>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={`hero-img ${classes}`}>
          <img
            onLoad={() => setClasses("fade-in-right")}
            src="https://static.vecteezy.com/system/resources/previews/003/030/692/non_2x/airplane-isolated-on-white-background-free-vector.jpg"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
