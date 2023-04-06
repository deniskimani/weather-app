import "../styles/ForecastDetails.css";

function ForecastDetails(props) {
  const { forecasts } = props;
  const formattedDate = new Date(forecasts.date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>

      <div className="forecast-details__max--temp">
        <p>
          <span>MaxTemperature:</span> {forecasts.temperature.max} &deg;C
        </p>
      </div>
      <div className="forecast-details__min--temp">
        <p>
          <span>Min Temperature:</span> {forecasts.temperature.min} &deg;C
        </p>
      </div>

      <div className="forecast-details__humidity">
        <p>
          <span>Humidity:</span> {forecasts.humidity} &#37; ;
        </p>
      </div>

      <div className="forecast-details__wind">
        <p>
          <span>Wind:</span> {forecasts.wind.speed} mph
        </p>
      </div>
    </div>
  );
}
export default ForecastDetails;
