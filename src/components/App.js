import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App(props) {
  const { forecast } = props;
  return (
    <div className="App">
      <LocationDetails location={forecast.location} />
      <ForecastSummaries forecasts={forecast.forecasts} />
    </div>
  );
}

export default App;
