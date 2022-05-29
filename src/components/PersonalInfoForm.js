import { CreditCardOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const PersonalInfoForm = ({ onFormSubmit, initialInfo }) => {
  const info = initialInfo || {};
  const [first_name, setFirstName] = useState(info.first_name || ""),
    [last_name, setLastName] = useState(info.last_name || ""),
    [gender, setGender] = useState(info.gender || "male"),
    [dob, setDoB] = useState(info.dob || ""),
    [cnic, setCnic] = useState(info.cnic || ""),
    [email, setEmail] = useState(info.email || ""),
    [phone, setPhone] = useState(info.phone || ""),
    [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const personalInfo = {
      first_name,
      last_name,
      gender,
      dob,
      cnic,
      email,
      phone,
      password,
    };
    onFormSubmit(personalInfo);
  };

  return (
    <Card component="form" onSubmit={onSubmit}>
      <CardHeader title="Personal Information" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="first_name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              required
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="last_name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              required
              label="Last Name"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              name="cnic"
              fullWidth
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
              label="CNIC / Passport Number"
            />
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
                required
                fullWidth
                defaultValue={"male"}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="business">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={8} xs={12}>
            <TextField
              name="dob"
              type="date"
              fullWidth
              value={dob}
              onChange={(e) => setDoB(e.target.value)}
              required
              label="Date of Birth"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              name="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="name@xyz.com"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              name="phone"
              fullWidth
              required
              label="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Numeric only"
              inputProps={{
                inputMode: "numeric",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              type="password"
              required
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button type="submit" fullWidth required variant="contained">
          <CreditCardOutlined sx={{ mr: 1 }} />
          Setup Payment Information
        </Button>
      </CardActions>
    </Card>
  );
};

export default PersonalInfoForm;
