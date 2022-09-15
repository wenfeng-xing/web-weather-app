import React from "react";
import "./App.css";

import { Grid } from "@mui/material";
import PrimarySearchAppBar from "./components/nav";

function App() {
  console.log(import.meta.env);
  return (
    <div className="App">
      <Grid container rowGap={2}>
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
            item
            lg={7.5}
            sx={{ bgcolor: "orangered", height: "95%", borderRadius: "15px" }}
          >
          </Grid>
          <Grid
            item
            lg={4}
            sx={{ bgcolor: "blue", height: "95%", borderRadius: "15px" }}
          ></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
