import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visibility, setVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);

  useEffect(() => {
    setSearchVisibility(false);
    setVisibility(false);
  }, []);

  const menuToggle = () => {
    if (searchVisibility) {
      setSearchVisibility(!searchVisibility);
    }
    setVisibility(!visibility);
  };

  const searchToggle = () => {
    if (visibility) {
      setVisibility(!visibility);
    }
    setSearchVisibility(!searchVisibility);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/7133364.png" className="h-14 " />
            <span className="self-center max-[350px]:text-lg text-2xl font-semibold whitespace-nowrap dark:text-white">
              Weather App
            </span>
          </NavLink>
          <div className="flex lg:order-2">
            <button
              type="button"
              onClick={searchToggle}
              className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden lg:block">
              <SearchBar />
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 "
              onClick={menuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 lg:hidden">
              <SearchBar setSearchVisibility={setSearchVisibility} />
            </div>

            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favourites"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Favourites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/advanced-search"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Advanced Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {visibility && (
          <div className="lg:hidden opacity-90" onClick={menuToggle}>
            <ul className="absolute bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full z-10 pl-2">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 mb-3"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favourites"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 mb-3"
                >
                  Favourites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/advanced-search"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 mb-3"
                >
                  Advanced Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 mb-4"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {searchVisibility && (
          <div className="lg:hidden opacity-90 absolute bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full z-10">
            <div className="my-4  flex items-center justify-center">
              <SearchBar setSearchVisibility={setSearchVisibility} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
