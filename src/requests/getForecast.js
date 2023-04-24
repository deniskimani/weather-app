import axios from "axios";

const getForecast = async (
  setForecasts,
  setLocation,
  setSelectedDate,
  searchText,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (searchText) {
    setErrorMessage("");
    endpoint += `?city=${searchText}`;
  }

  await axios
    .get(endpoint)
    .then((response) => {
      const json = response.data;
      setForecasts(json.forecasts);
      setLocation(json.location);
      setSelectedDate(json.forecasts[0].date);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
