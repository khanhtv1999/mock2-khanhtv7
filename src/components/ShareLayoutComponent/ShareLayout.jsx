import { Outlet } from "react-router-dom";
import Navbar from "../NavbarComponent/Navbar";

const ShareLayout = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};
export default ShareLayout;
