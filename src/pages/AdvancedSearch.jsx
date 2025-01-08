import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdvancedSearch() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  let navigate = useNavigate();
  const handleLatChange = (value) => {
    setLat(value);
  };
  const handleLonChange = (value) => {
    setLon(value);
  };

  const searchLocation = () => {
    if (lat && lon && lat <= 90 && lat >= -90 && lon <= 180 && lon >= -180) {
      navigate(`/city/${lat}/${lon}`, { replace: true });
    } else {
      toast.error("Invalid Input!");
    }
  };

  return (
    <>
      <div className="pt-16 md:pl-52 md:pr-52 pb-28 px-16">
        <div className="grid grid-cols-1">
          <div className=" flex items-center justify-center text-center">
            <h1 className="text-5xl font-bold">Advanced Search</h1>
          </div>
          <div className=" flex items-center justify-center mt-8 text-center ">
            <div className="grid grid-cols-1">
              <p>
                We doubt it, but if for any reason you cannot find you desired
                location, you can search a specific place by entering it's
                decimal coordinates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid -mt-5">
        <div className=" flex items-center justify-center font-bold mb-32 ">
          <div className="block max-w-xs md:max-w-md md:p-20 p-14 opacity-70 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-center items-center">
              <h5 className="mb-14 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Coordinates
              </h5>
            </div>
            <div className="relative z-0 w-full mb-10 group">
              <input
                type="number"
                name="latitude"
                id="latitude"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={lat}
                onChange={(e) => handleLatChange(e.target.value)}
              />
              <label
                htmlFor="latitude"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Latitude
              </label>
            </div>
            <div className="relative z-0 w-full mb-16 group">
              <input
                type="number"
                name="longitude"
                id="longitude"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={lon}
                onChange={(e) => handleLonChange(e.target.value)}
              />
              <label
                htmlFor="longitude"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Longitude
              </label>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={searchLocation}
                className="text-white  border-blue-500 focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Search Location
              </button>
            </div>
            <p className="font-light mt-14 italic -mb-10 dark:text-gray-300">
              You can use &nbsp;
              <a
                className="text-blue-600 font-bold underline not-italic"
                target="_blank"
                href="https://www.gps-coordinates.net/"
              >
                this tool
              </a>
              &nbsp; to find the coordinates of any location.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
