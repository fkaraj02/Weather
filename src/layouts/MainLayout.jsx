import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import NavBar2 from "../components/NavBar2";

export default function MainLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <NavBar2 />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <main className="bg-[url('/images/sky.png')] bg-cover ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
