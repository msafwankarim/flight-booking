import { AppBar, Button, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <div style={{ maxWidth: 150, filter: "invert(1)" }}>
          <img src={LOGO} alt={LOGO} />
        </div>
        <Box
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", marginLeft: "1em" }}
        >
          <Button color="inherit">
            <NavLink
              className="navlink"
              to="/"
              style={({ isActive }) =>
                isActive ? { borderBottom: "2px solid" } : {}
              }
            >
              Home
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className="navlink"
              to="/search"
              style={({ isActive }) =>
                isActive ? { borderBottom: "2px solid" } : {}
              }
            >
              Search
            </NavLink>
          </Button>
        </Box>

        <Button color="inherit" variant="outlined">
          Track my Ticket
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
