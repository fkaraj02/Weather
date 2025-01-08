import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import CityWeather from "./pages/CityWeather";
import Favourites from "./pages/Favourites";
import AdvancedSearch from "./pages/AdvancedSearch";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/advanced-search" element={<AdvancedSearch />} />
        <Route path="/city/:lat/:lon" element={<CityWeather />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
