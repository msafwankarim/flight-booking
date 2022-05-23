import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Flight Booking Service
        </Typography>
        <Button color="inherit" variant="outlined">
          Track my Ticket
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
