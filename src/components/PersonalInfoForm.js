import {
  Button,
  Card,
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
const PersonalInfoForm = ({ onNext, initialInfo }) => {
  const info = initialInfo || {};
  const [firstName, setFirstName] = useState(info.firstName || ""),
    [lastName, setLastName] = useState(info.lastName || ""),
    [gender, setGender] = useState(info.gender || "male"),
    [dob, setDoB] = useState(info.dob || ""),
    [cnic, setCnic] = useState(info.cnic || ""),
    [email, setEmail] = useState(info.email || ""),
    [phone, setPhone] = useState(info.phone || 0);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const personalInfo = {
      firstName,
      lastName,
      gender,
      dob,
      cnic,
      email,
      phone,
    };
    onNext(personalInfo);
  };

  return (
    <Card sx={{ maxWidth: "lg" }}>
      <CardHeader title="Passenger Information" />
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
                label="Last Name"
              />
            </Grid>
            <Grid item md={1}>
              <FormControl>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  label="Gender"
                  required
                  defaultValue={"male"}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="business">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={5} xs={12}>
              <TextField
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
                fullWidth
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
                label="CNIC / Passport Number"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
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
            <Grid item md={6} xs={12} marginLeft="auto" marginRight="auto">
              <Button type="submit" fullWidth required variant="contained">
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
