import styled from "styled-components";
import SideBar from "../../../components/SidebarComponent/Sidebar";
import ImageHome from "../../../components/ImageHomeComponent/ImageHomeComponent";
import FreeShipComponent from "../../../components/FreeShipComponent/FreeShipcomponent";
import Benefit from "../../../components/BenefitComponents/Benefit";
import CardItem from "../../../components/CardComponent/CardItem";
import ModalLogin from "../../../components/ModalLoginComponent/ModalLogin";
const HomePage = () => {
  return (
    <>
      <ModalLogin />
      <Wrapper>
        <div className="container-sidebar">
          <SideBar />
        </div>
        <div className="container-img">
          <ImageHome />
        </div>
        <div className="container_free_ship">
          <FreeShipComponent />
        </div>
        <div className="container_product">
          <Benefit />
        </div>
        <div className="container_items">
          <CardItem />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  /* grid-template-rows: 80vh min-content 40vw repeat(3, min-content); */
  grid-gap: 1rem;
  margin-top: 1rem;

  .container-sidebar {
    grid-column: 4/7;
  }
  .container-img {
    grid-column: 7/16;
  }
  .container_free_ship {
    display: flex;
    grid-row: 2/3;
    grid-column: 4/16;
    height: 10rem;
    gap: 1rem;
  }
  .container_product {
    grid-column: 4/16;
  }
  .container_items {
    grid-column: 4/16;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
  }
`;
export default HomePage;
