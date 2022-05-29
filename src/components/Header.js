import { AppBar, Button, Toolbar, Box } from "@mui/material";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/logo.png";
import FlightContext from "../store/flight-context";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(FlightContext);

  const logOut = () => {
    localStorage.setItem("userInfo", null);
    setUserInfo(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <Link to="/">
          <div style={{ maxWidth: 150, filter: "invert(1)" }}>
            <img src={LOGO} alt={LOGO} />
          </div>
        </Link>
        <Box
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", marginLeft: "1em" }}
        >
          <Button color="inherit">
            <NavLink
              className="navlink"
              to="/home"
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
        {userInfo ? (
          <>
            <Link
              to="/track-ticket"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button color="inherit" variant="outlined">
                Track my Ticket
              </Button>
            </Link>
            <Button sx={{ ml: 2 }} color="inherit" onClick={logOut}>
              Logout
            </Button>
          </>
        ) : (
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit" variant="outlined">
              Login
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
