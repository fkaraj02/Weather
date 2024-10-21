import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setInput(input);
    setResults(results);
  }, [input, results]);

  async function fetchData(value) {
    await fetch(
      `${import.meta.env.VITE_GEO_DB_URL1}${value}${
        import.meta.env.VITE_GEO_DB_URL2
      }`
    )
      .then((response) => response.json())
      .then((json) => {
        setResults(json);
        printCities(json.data);
      });
  }

  function printCities(data) {
    data.forEach((city) => {
      console.log(city.name + ", " + city.country);
    });
    console.log("-------------------------------------------");
  }

  const handleChange = (value) => {
    setInput(value);
    if (value) {
      fetchData(value);
    }
  };

  return (
    <>
      <div className="">
        <div className="inline-flex flex-col justify-center relative text-gray-500">
          <div className="relative">
            <input
              type="text"
              className="p-2 pl-14 rounded border-2 border-blue-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              placeholder="Enter a city/town..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <svg
              className="w-5 h-5 absolute left-5 top-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* <ul className="bg-white border border-gray-100 w-full mt-2 ">
            <li className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
              <svg
                className="stroke-current absolute w-4 h-4 left-2 top-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {input}
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
}

//   const fetchData = (value) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.name &&
//             user.name.toLowerCase().includes(value.toLowerCase())
//           );
//         });
//         console.log(results);
//       });
//   };

//   const fetchData = (value) => {
//     fetch("https://countriesnow.space/api/v0.1/countries")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.data.filter((location) => {
//           return (
//             value &&
//             location &&
//             location.country &&
//             location.country.toLowerCase().includes(value.toLowerCase())
//           );
//         });
//         console.log(results);
//       });
//   };

{
  /* <div className="flex px-6 py-3 rounded-md border-2 border-blue-500 overflow-visible max-w-m mx-auto ">
        <input
          type="text"
          placeholder="Search a city/town..."
          className="w-full outline-none bg-transparent text-white text-m"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="20px"
          className="fill-gray-600"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
      </div>
      <ul className="bg-white border border-gray-100 w-full mt-2 ">
        <li className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
          <svg
            className="stroke-current absolute w-4 h-4 left-2 top-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <b>Gar</b>dameer - Italië
        </li>
      </ul> */
}
