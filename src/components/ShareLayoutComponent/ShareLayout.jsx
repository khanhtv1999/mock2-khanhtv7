import { Outlet } from "react-router-dom";
import Navbar from "../NavbarComponent/Navbar";
import ModalLogin from "../ModalLoginComponent/ModalLogin";

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
