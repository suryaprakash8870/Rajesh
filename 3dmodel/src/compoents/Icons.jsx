import React from "react";
import { CardContent, Grid, Typography, Avatar } from "@mui/material";
import {
  LocalGasStation,
  BatteryChargingFullRounded,
  SpeedRounded,
  DashboardOutlined,
  ThermostatOutlined,
  Opacity,
} from "@mui/icons-material";

const data = [
  { title: "Fuel", value: 80, unit: "%", icon: <LocalGasStation /> },
  {
    title: "Battery",
    value: 95,
    unit: "%",
    icon: <BatteryChargingFullRounded />,
  },

  {
    title: "Meter",
    value: 1234,
    unit: "km",
    icon: <SpeedRounded />,
  },
  {
    title: " Oil",
    value: 75,
    unit: "%",
    icon: <Opacity />,
  },
  {
    title: "Engine",
    value: 85,
    unit: "°C",
    icon: <ThermostatOutlined />,
  },
  {
    title: "Condition",
    value: "Running",
    unit: "",
    icon: <DashboardOutlined />,
  },
];

const CarInterface = () => (
  <Grid container>
    {data.map((item) => (
      <CardContent>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={4}>
            <Avatar style={{ color: "black" }}>{item.icon}</Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2">
              {item?.value}
              {item?.unit}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    ))}
  </Grid>
);

export default CarInterface;
