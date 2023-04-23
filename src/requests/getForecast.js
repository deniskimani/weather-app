import axios from "axios";

const getForecast = async (setForecasts, setLocation, setSelectedDate) => {
  const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  axios.get(endpoint).then((response) => {
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
    setSelectedDate(response.data.forecasts[0].date);
  });
};

export default getForecast;
