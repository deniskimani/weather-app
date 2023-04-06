import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecasted) => (
        <ForecastSummary
          key={forecasted.date}
          date={forecasted.date}
          description={forecasted.description}
          icon={forecasted.icon}
          temperature={forecasted.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
