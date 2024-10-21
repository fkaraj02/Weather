import { NavLink } from "react-router-dom";

export default function HomePage({ weather }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-32 pl-4 pr-4">
        <div className=" flex items-center justify-center mt-32 font-bold">
          <div className="grid-rows-3	">
            <h1 className="text-5xl block">{weather.name}</h1>
            <p className="mt-3 text-black text-opacity-50">
              Min: {(weather.main.temp_min - 273.15) | 0} / Max:
              {(weather.main.temp_max - 273.15) | 0}
            </p>
            <h1 className="text-8xl mt-10">
              {(weather.main.temp - 273.15) | 0} &#8451;
            </h1>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-32 ">
          <h1 className="text-black text-opacity-50 text-8xl font-semibold">
            {weather.weather[0].main}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className=" flex items-center justify-center font-bold mb-32 ">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Details
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Details go here
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center font-bold mb-32 ">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Wind
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Details go here
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
