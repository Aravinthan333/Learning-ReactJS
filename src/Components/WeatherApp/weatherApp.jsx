import Styles from "./weatherApp.module.css";
import { WeatherDetails } from "./otherComponents.jsx";
import { useEffect, useState } from "react";

import sunIcon from "../../assets/sun.png";
import rainIcon from "../../assets/rain.png";
import drizzleIcon from "../../assets/drizzle.png";
import clearSkyIcon from "../../assets/clearSky.png";
import cloudsIcon from "../../assets/clouds.png";
import snowIcon from "../../assets/snow.png";

//   ---------------------------------------------------------------------

function WeatherApp() {
  // const apiKey = "ea8592bb915e163b40245f6eedc5409e";

  const [text, setText] = useState("Sivakasi");
  const [isLoading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [error, setError] = useState(null);

  const [icon, setIcon] = useState(rainIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState(text);
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  //   ---------------------------------------------------------------------

  const weatherIconMap = {
    "01d": sunIcon,
    "01n": sunIcon,
    "02d": clearSkyIcon,
    "02n": clearSkyIcon,
    "03d": cloudsIcon,
    "03n": cloudsIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13n": snowIcon,
    "13d": snowIcon,
  };

  //   ---------------------------------------------------------------------

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      //   console.log(data);
      if (data.cod == "404") {
        console.log("City not found");
        setLoading(false);
        setCityNotFound(true);
        return;
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearSkyIcon);
      setCityNotFound(false);
    } catch (err) {
      console.log("An error occured while fetching : ", err.message);
      setError("An error occured while fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
    console.log("useEffect");
  }, []);

  //   ---------------------------------------------------------------------

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.inputContainer}>
          <input
            type="text"
            className={Styles.cityInput}
            placeholder="Search City"
            value={text}
            onChange={handleCity}
            onKeyDown={handleKeyDown}
          />
          <div className={Styles.searchIcon} onClick={() => search()}>
            <i className="fa fa-search"></i>
          </div>
        </div>
        {!isLoading && !cityNotFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            log={log}
            humidity={humidity}
            wind={wind}
          />
        )}

        {isLoading && <div className={Styles.loadingMessage}>Loading...</div>}
        {error && <div className={Styles.errorMessage}>{error}</div>}
        {cityNotFound && (
          <div className={Styles["city-not-found"]}>City not found</div>
        )}

        <p className={Styles.copyright}>
          Designed by{" "}
          <a href="https://aravinthan333.github.io/Portfolio-demo/">
            Aravinthan.
          </a>
        </p>
      </div>
    </>
  );
}

export default WeatherApp;
