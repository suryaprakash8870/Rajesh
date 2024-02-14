import React, { useState, useEffect } from "react";
import { Toolbar, Typography, Box, Avatar } from "@mui/material";
import moment from "moment";

const Header = () => {
  const [weather, setWeather] = useState(null);
  const getWeatherdata = () => {
    const apiKey = "345e51b9611e9965090bb6426cb00639";
    const city = "coimbatore";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("weather", JSON.stringify(data));
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
        });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };
  useEffect(() => {
    if (localStorage.getItem("weather")) {
      let data = JSON.parse(localStorage.getItem("weather"));
      console.log(data);
      setWeather({
        temperature: data.main.temp,
        description: data.weather[0].description,
      });
    } else {
      getWeatherdata();
    }
  }, []);

  const currentTime = moment();
  const formattedTime = currentTime.format("H:mm");
  const formattedDate = currentTime.format("dddd | MMM DD, YYYY");

  return (
    <Toolbar>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">{formattedTime}</Typography>
          <Typography variant="h6">{formattedDate}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: 2 }}></Box>
          <Box>
            <Avatar
              alt="User Avatar"
              src="https://images.unsplash.com/photo-1558730234-d8b2281b0d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxhSDk4ZGhlYjUwTXx8ZW58MHx8fHx8"
            />
          </Box>
          <Box sx={{ marginLeft: 1 }}>
            {weather && (
              <>
                <Typography variant="h5">
                  {Math.round(weather.temperature)}°C
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {weather.description}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default Header;
