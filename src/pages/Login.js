import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import FlightContext from "../store/flight-context";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <RouterLink to="/" color="primary">
        Book me
      </RouterLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const [email, setEmail] = React.useState(""),
    [password, setPassword] = React.useState(""),
    [rememberMe, setRememberMe] = React.useState(false);

  const [message, setMessage] = React.useState(null);
  const { setUserInfo } = React.useContext(FlightContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      rememberMe,
    };
    console.log(data, rememberMe);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
      );
      console.log(res.data);
      if (rememberMe) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ userId: res.data.user._id })
        );
      }
      setUserInfo({ userId: res.data.user._id });
      console.log(res);
    } catch (e) {
      setMessage({
        type: "error",
        text: "Incorrect username or password",
      });
    }
    // navigate("/home");
  };

  return (
    <Container component={Paper} maxWidth="xs" sx={{ p: 1 }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email Address"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/signup">
                <Typography variant="body2" color="primary">
                  Don't have an account? Sign Up
                </Typography>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      {message && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={() => setMessage(null)}
        >
          <Alert
            severity={message.type}
            variant="filled"
            sx={{ width: "100%" }}
            action={message.action}
            onClose={() => setMessage(null)}
          >
            {message.text}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
}
