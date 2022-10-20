import styled from "styled-components";
import SideBar from "../../../components/SidebarComponent/Sidebar";
import ImageHome from "../../../components/ImageHomeComponent/ImageHomeComponent";
import FreeShipComponent from "../../../components/FreeShipComponent/FreeShipcomponent";
import Products from "../../../components/BenefitComponents/Benefit";
import CardItem from "../../../components/CardComponent/CardItem";
import ModalLogin from "../../../components/ModalLoginComponent/ModalLogin";
const HomePage = () => {
  return (
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
        <Products />
      </div>
      <div className="container_items">
        <CardItem />
      </div>
      <ModalLogin />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  /* grid-template-rows: 80vh min-content 40vw repeat(3, min-content); */
  grid-gap: 1rem;
  margin-top: 1rem;

  .container-sidebar {
    grid-column: 2/5;
  }
  .container-img {
    grid-column: 5/14;
  }
  .container_free_ship {
    display: flex;
    grid-row: 2/3;
    grid-column: 2/14;
    height: 10rem;
    gap: 1rem;
  }
  .container_product {
    grid-column: 2/14;
  }
  .container_items {
    grid-column: 2/14;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
  }
`;
export default HomePage;
