import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-[url('src/assets/images/sky.png')] bg-cover">
        {/* <img src="src/assets/images/sky.png" className="blur-2xl" /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
