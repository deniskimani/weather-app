import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App(props) {
  const { forecast } = props;
  return (
    <div className="App">
      <LocationDetails
        city={forecast.location.city}
        country={forecast.location.country}
      />
      <ForecastSummaries />
    </div>
  );
}

export default App;
