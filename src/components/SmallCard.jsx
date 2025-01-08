import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CardError from "../pages/CardError";

export default function SmallCard({ lat, lon, setHasChanged }) {
  const api = {
    key: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    base: import.meta.env.VITE_OPEN_WEATHER_API_URL,
  };
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorOccured, setErrorOccured] = useState(false);

  useEffect(() => {
    fetchWeatherData(lat, lon);
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `${api.base}weather?lat=${lat}&lon=${lon}&APPID=${api.key}`
      );
      const data = await response.json();
      if (data.cod != 200) {
        setErrorOccured(true);
      }
      setWeather(data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorOccured(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteLocation = () => {
    localStorage.removeItem(`${lat}&${lon}`);
    setHasChanged(true);
    toast.success(`"${weather.name}" Successfully Removed!`);
  };

  if (isLoading) {
    return (
      <div className="m-5 shadow-sm border rounded-lg w-full">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    if (errorOccured) {
      return (
        <div className="m-5 relative flex flex-col opacity-70 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-sm border rounded-lg w-full">
          <CardError />
        </div>
      );
    } else {
      return (
        <>
          <Link to={`/city/${lat}/${lon}`} className="group relative">
            <Link className="absolute z-[1] top-2 right-2">
              <button
                onClick={deleteLocation}
                type="button"
                className="bg-red-700 rounded-md p-2 inline-flex items-center justify-center text-white opacity-80"
              >
                <span className="sr-only">Remove Card</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Link>
            <div className="mb-10 relative flex flex-col opacity-70 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-sm border rounded-lg w-full">
              <div className="grid grid-rows-3">
                <div className=" flex items-center justify-center text-center">
                  <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-h-10">
                    {weather.name}, {weather.sys.country}
                  </h5>
                </div>

                <div className="grid grid-cols-2">
                  <h5 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center justify-center">
                    {weather.main.temp | 0} &#8451;
                  </h5>
                  <img
                    className="object-none h-24 w-96"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white dark:opacity-80">
                    {weather.weather[0].description}
                  </p>
                  <p className="text-gray-900 dark:text-white italic dark:opacity-80">
                    Feels like {weather.main.feels_like | 0} &#8451;
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* <div className="absolute right-0">
            <Link className="absolute right-0">
              <button
                onClick={deleteLocation}
                type="button"
                className="bg-red-700 rounded-md p-2 inline-flex items-center justify-center text-white opacity-100"
              >
                <span className="sr-only">Remove Card</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Link>
          </div> */}
        </>
      );
    }
  }
}
