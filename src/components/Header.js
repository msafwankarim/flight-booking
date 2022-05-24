import { AppBar, Button, Toolbar, Box } from "@mui/material";
import LOGO from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          <div style={{ maxWidth: 150, filter: "invert(1)" }}>
            <img src={LOGO} alt={LOGO} />
          </div>
        </Box>
        <Button color="inherit" variant="outlined">
          Track my Ticket
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
