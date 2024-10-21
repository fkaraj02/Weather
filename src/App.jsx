import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Loading from "./components/Loading";
import React, { useState, useEffect } from "react";
import AboutUs from "./pages/AboutUs";

function App() {
  const api = {
    key: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    base: import.meta.env.VITE_OPEN_WEATHER_API_URL,
  };

  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
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
      setWeatherData(data);
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage weather={weatherData} />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    )
  );

  if (isLoading) {
    return <Loading />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
