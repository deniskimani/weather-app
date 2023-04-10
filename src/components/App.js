import { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

function App(props) {
  const { forecast } = props;
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(forecast.forecasts[0].date);
  const selectedForecast = forecast.forecasts.find(
    (forecasted) => forecasted.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <LocationDetails location={forecast.location} />
      <ForecastSummaries
        forecasts={forecast.forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecasts={selectedForecast} />
    </div>
  );
}

export default App;
