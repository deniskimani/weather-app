import "../styles/ForecastDetails.css";

function ForecastDetails(props) {
  const { forecast } = props;
  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>

      <div className="forecast-details__max--temp">
        <p>
          <span>MaxTemperature:</span> {forecast.temperature.max} &deg;C
        </p>
      </div>
      <div className="forecast-details__min--temp">
        <p>
          <span>Min Temperature:</span> {forecast.temperature.min} &deg;C
        </p>
      </div>

      <div className="forecast-details__humidity">
        <p>
          <span>Humidity:</span> {forecast.humidity} &#37;
        </p>
      </div>

      <div className="forecast-details__wind">
        <p>
          <span>Wind:</span> {forecast.wind.speed} mph
        </p>
      </div>
    </div>
  );
}
export default ForecastDetails;
