import WeatherDetails from "../components/WeatherDetails";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import PermissionDenied from "./PermissionDenied";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const api = {
    key: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    base: import.meta.env.VITE_OPEN_WEATHER_API_URL,
  };

  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [allowed, setAllowed] = useState(false);
  let navigate = useNavigate();

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          fetchWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          setAllowed(true);
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED) {
            setAllowed(false);
            console.log(error);
            setIsLoading(false);
          }
        }
      );
    } else {
      setAllowed(false);
      setIsLoading(false);
      console.log("Geolocation is not available in your browser.");
    }
  };

  const fetchWeatherData = async ({ lat, lon }) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${api.base}weather?lat=${lat}&lon=${lon}&APPID=${api.key}`
      );
      const data = await response.json();
      if (data.cod != 200) {
        navigate("/*", { replace: true });
      }
      setWeather(data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorOccured(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    if (allowed) {
      return <WeatherDetails weather={weather} lat={lat} lon={lon} />;
    } else {
      return <PermissionDenied />;
    }
  }
}
