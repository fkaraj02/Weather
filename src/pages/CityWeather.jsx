import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import WeatherDetails from "../components/WeatherDetails";
import { useNavigate } from "react-router-dom";

export default function CityWeather() {
  const api = {
    key: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    base: import.meta.env.VITE_OPEN_WEATHER_API_URL,
  };

  const search = useParams();
  let navigate = useNavigate();
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData(search.lat, search.lon);
  }, [search.lon, search.lat]);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `${api.base}weather?lat=${lat}&lon=${lon}&APPID=${api.key}`
      );
      const data = await response.json();
      if (data.cod != 200) {
        navigate("/error", { replace: true });
      }
      setWeather(data);
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <WeatherDetails weather={weather} lat={search.lat} lon={search.lon} />
    );
  }
}
