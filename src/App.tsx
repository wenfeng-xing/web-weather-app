import React from "react";
import "./App.css";

import { Grid } from "@mui/material";
import PrimarySearchAppBar from "./components/nav";

function App() {
  return (
    <div className="App">
      <Grid container lg={12} rowGap={2}>
        <Grid container>
          <PrimarySearchAppBar />
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          sx={{
            bgcolor: "aqua",
            minHeight: "92vh",
            borderRadius: "15px 15px 0px 0px"
          }}
        >
          <Grid
            container
            lg={7.5}
            sx={{ bgcolor: "orangered", height: "95%", borderRadius: "15px" }}
          ></Grid>
          <Grid
            container
            lg={4}
            sx={{ bgcolor: "blue", height: "95%", borderRadius: "15px" }}
          ></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
