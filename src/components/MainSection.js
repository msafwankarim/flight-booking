import { Grid, Paper } from "@mui/material";
import SearchFlightForm from "./SearchFlightForm";

import PIA_IMG from "../assets/pia-wall.jpg";

const MainSection = () => {
  return (
    <Paper sx={{ overflow: "hidden" }} elevation={6}>
      <Grid container spacing={2} direction="row">
        <Grid xs={6} item>
          <SearchFlightForm />
        </Grid>
        <Grid xs={6} item>
          <img src={PIA_IMG} className="pia-image" alt={PIA_IMG} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainSection;
