import { Outlet } from "react-router";
import { socialLinks } from "~/constants/socialLinks";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
      <Navbar socialLinks={socialLinks} />
      <main>
        <Outlet />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
