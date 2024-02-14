import React from "react";
import {
  Whatshot,
  BatteryCharging20,
  RotateLeft,
  Support,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
const Icons = (props) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
  };
  return (
    <div>
      <div style={style}>
        <Whatshot />
        <Typography variant="h6">Fuel</Typography>
      </div>
    </div>
  );
};

export default Icons;
