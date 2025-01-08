import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CardError from "../pages/CardError";

export default function Card({ lat, lon, setHasChanged }) {
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
            <Link
              id="cardElement"
              className="group-hover:opacity-100 opacity-0 absolute top-3 right-2 z-[1]"
            >
              <button
                onClick={deleteLocation}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 -mt-1 ml-16 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </Link>
            <div className="mb-10 px-3 py-10 relative flex flex-col opacity-70 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-sm border rounded-lg w-full">
              <div className="flex">
                <div className="w-1/4">
                  <img
                    className="object-none h-24 w-96 "
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                </div>
                <div className="w-2/4 ">
                  <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
                    {weather.name}, {weather.sys.country}
                  </h5>
                  <p className="text-gray-900 dark:text-white dark:opacity-80">
                    {weather.weather[0].description}
                  </p>
                  <p className="text-gray-900 dark:text-white italic dark:opacity-80">
                    Feels like {weather.main.feels_like | 0} &#8451;
                  </p>
                </div>
                <div className="w-1/4 ">
                  <h5 className="text-5xl font-semibold  text-gray-900 dark:text-white mt-6 mr-8">
                    {weather.main.temp | 0} &#8451;
                  </h5>
                </div>
              </div>
            </div>
          </Link>
        </>
      );
    }
  }
}
