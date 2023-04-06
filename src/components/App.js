import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

function App(props) {
  const { forecast } = props;
  return (
    <div className="weather-app">
      <LocationDetails location={forecast.location} />
      <ForecastSummaries forecasts={forecast.forecasts} />
      <ForecastDetails forecasts={forecast.forecasts[0]} />
    </div>
  );
}

export default App;
