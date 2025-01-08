import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function WeatherDetails({ weather, lat, lon }) {
  const [saved, setSaved] = useState(false);
  const date = new Date((weather.dt + weather.timezone) * 1000);
  const sunset = new Date((weather.sys.sunset + weather.timezone) * 1000);
  const sunrise = new Date((weather.sys.sunrise + weather.timezone) * 1000);

  useEffect(() => {
    if (localStorage.getItem(`${lat}&${lon}`)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  });
  const saveLocation = () => {
    const coords = {
      lat: lat,
      lon: lon,
    };
    localStorage.setItem(`${lat}&${lon}`, JSON.stringify(coords));

    setSaved(true);
    toast.success(`"${weather.name}" Successfully Saved!`);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 mb-32 pl-4 pr-4 grid-cols-1">
        <div className=" flex items-center justify-center mt-32 font-bold">
          <div className="grid-rows-3	">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl block text-center">
                {weather.name}
                {weather.sys.country && <>, {weather.sys.country}</>}
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="mt-3 text-black text-opacity-50 text-xl">
                {date.toString().slice(0, 21)}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-8xl mt-10">
                {weather.main.temp | 0} &#8451;
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center md:mt-24 ">
          <div className="grid-rows-3">
            <div className="flex items-center justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                className="h-48 "
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-black text-opacity-50 md:text-8xl text-6xl font-semibold">
                {weather.weather[0].main}
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-black text-opacity-50 text-2xl font-semibold mt-4">
                {String(weather.weather[0].description)
                  .charAt(0)
                  .toUpperCase() +
                  String(weather.weather[0].description).slice(1)}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className=" flex items-center justify-center font-bold mb-32">
          <div className="group block md:max-w-2xl max-w-sm p-14 opacity-70 bg-white border w-full border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-center items-center">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Details
              </h5>
            </div>
            <hr className="w-full h-1 mx-auto bg-gray-100 border-0 rounded my-6 dark:bg-gray-700 group-hover:bg-gray-600" />
            <div className="grid md:grid-cols-2">
              <div className="flex justify-center items-center">
                <div>
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center items-center">
                    Wind
                  </h5>
                  <ul className="font-normal text-gray-700 dark:text-gray-400 ">
                    <li className="flex justify-center items-center">
                      Speed: {weather.wind.speed} m/s
                    </li>
                    <li className="flex justify-center items-center">
                      Direction: {weather.wind.deg}&deg;
                    </li>
                  </ul>
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center items-center">
                    Sunrise / Sunset
                  </h5>
                  <ul className="font-normal text-gray-700 dark:text-gray-400">
                    <li className="flex justify-center items-center">
                      Sunrise: {sunrise.toTimeString().slice(0, 8)}
                    </li>
                    <li className="flex justify-center items-center">
                      Sunset: {sunset.toTimeString().slice(0, 8)}
                    </li>
                  </ul>
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center items-center">
                    Coordinates
                  </h5>
                  <ul className="font-normal text-gray-700 dark:text-gray-400 ">
                    <li className="flex justify-center items-center">
                      Latitude: {lat}
                    </li>
                    <li className="flex justify-center items-center">
                      Longitude: {lon}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  {(weather.rain || weather.snow) && (
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center items-center">
                      Precipitation
                    </h5>
                  )}

                  <ul className="font-normal text-gray-700 dark:text-gray-400">
                    {weather.rain && (
                      <>
                        <li className="flex justify-center items-center">
                          Rain: {weather.rain["1h"]} mm/h
                        </li>
                      </>
                    )}
                    {weather.snow && (
                      <>
                        <li className="flex justify-center items-center">
                          Snow: {weather.snow["1h"]} mm/h
                        </li>
                      </>
                    )}
                  </ul>
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center items-center">
                    Other
                  </h5>

                  <ul className="font-normal text-gray-700 dark:text-gray-400">
                    <li className="flex justify-center items-center">
                      Feels Like: {weather.main.feels_like | 0} &#8451;
                    </li>
                    <li className="flex justify-center items-center">
                      Clouds: {weather.clouds.all}%
                    </li>
                    <li className="flex justify-center items-center">
                      Humidity: {weather.main.humidity}%
                    </li>

                    <li className="flex justify-center items-center">
                      Visibility: {weather.visibility / 1000} km
                    </li>
                    <li className="flex justify-center items-center">
                      Pressure: {weather.main.pressure} hPa
                    </li>
                    <li className="flex justify-center items-center">
                      Sea-Level Pressure: {weather.main.sea_level} hPa
                    </li>
                    <li className="flex justify-center items-center">
                      Ground-Level Pressure: {weather.main.grnd_level} hPa
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {!saved && (
              <>
                <hr className="w-full h-1 mx-auto bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700 group-hover:bg-gray-600 mt-20" />

                <div className="flex justify-center items-center mt-10">
                  <button
                    type="button"
                    onClick={saveLocation}
                    className="text-white  border-blue-500 focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 -mb-2"
                  >
                    <svg
                      fill="#FFFFFF"
                      width="25"
                      height="25"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>heart</title>
                      <path d="M256 418Q187 369 149 337 110 305 87 269 64 233 64 192 64 153 93 125 121 96 160 96 199 96 228 125 256 153 256 192 256 153 285 125 313 96 352 96 391 96 420 125 448 153 448 192 448 234 425 271 401 307 363 339 324 371 256 418Z" />
                    </svg>
                    &nbsp;&nbsp;Favourite
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
