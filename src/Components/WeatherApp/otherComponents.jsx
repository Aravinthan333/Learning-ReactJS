import Styles from "./WeatherApp.module.css";
import PropTypes from "prop-types";

import humidityIcon from "../../assets/humidity.png";
import windIcon from "../../assets/wind.png";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
}) => {
  return (
    <>
      <div className={Styles.image}>
        <img src={icon} alt="Image" />
      </div>
      <div className={Styles.temp}>{temp}°C</div>
      <div className={Styles.location}>{city}</div>
      <div className={Styles.country}>{country}</div>
      <div className={Styles.cord}>
        <div>
          <span className={Styles.lat}>Latitude</span>
          <span>{lat}</span>
        </div>

        <div>
          <span className={Styles.log}>Longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className={Styles.dataContainer}>
        <div className={Styles.element}>
          <img src={humidityIcon} alt="Humidity" className={Styles.icon}></img>
          <div className={Styles.data}>
            <div className={Styles.humidityPercent}>{humidity}%</div>
            <div className={Styles.text}>Humidity</div>
          </div>
        </div>

        <div className={Styles.element}>
          <img src={windIcon} alt="Wind" className={Styles.icon}></img>
          <div className={Styles.data}>
            <div className={Styles.windPercent}>{wind} km/h</div>
            <div className={Styles.text}>Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

WeatherDetails.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  log: PropTypes.number.isRequired,
};

export { WeatherDetails };
