import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchBar({ setSearchVisibility }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    if (debouncedInput) {
      fetchData(debouncedInput);
    } else {
      setResults([]);
    }
  }, [debouncedInput]);

  useEffect(() => {
    setInput("");
  }, []);

  async function fetchData(value) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_OPEN_GEOLOCATION_URL}${value}${
          import.meta.env.VITE_OPEN_GEOLOCATION_KEY
        }`
      );
      const json = await response.json();
      setResults(json || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <>
      <div className="relative">
        <div className="inline-flex flex-col justify-center relative text-gray-500">
          <div className="relative">
            <input
              type="text"
              className="p-2 pl-14 rounded border-2 border-blue-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent dark:text-white text-black"
              placeholder="Search any place..."
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

          {debouncedInput && results.length > 0 && (
            <ul
              className="absolute bg-white border border-gray-100 w-full z-10"
              style={{ top: "calc(100% + 8px)" }}
            >
              {results.map((city) => (
                <li
                  key={`${city.lat}&${city.lon}`}
                  onClick={() => {
                    setInput("");
                    setSearchVisibility(false);
                  }}
                  className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
                >
                  <NavLink to={`/city/${city.lat}/${city.lon}`}>
                    {city.name}, {city.country}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
