import React from "react";
import { Grid, Typography } from "@mui/material";
import Car from "../compoents/Car";
import Map from "../compoents/Map";
import Icons from "../compoents/Icons";
const Main = () => {
  return (
    <Grid container spacing={5} padding={2}>
      <Grid item xs={7}>
        <div
          style={{
            height: "560px",
            backgroundColor: "#1e1e1e",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <Typography variant="h5" style={{ textAlign: "center" }}>
            BMW M5 CS
          </Typography>
          <Car />
        </div>
      </Grid>
      <Grid item xs={5}>
        <div
          style={{
            height: "560px",
            backgroundColor: "#1e1e1e",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <Grid xs={12}>
            <Map />
          </Grid>
          <br />
          <Grid xs={12}>
            <div
              style={{
                height: "200px",
                backgroundColor: "#333333",
                borderRadius: "30px",
                padding: "20px",
              }}
            >
              <Icons />
            </div>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Main;
