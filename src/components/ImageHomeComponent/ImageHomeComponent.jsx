import styled from "styled-components";
import watch from "../../assets/image/watch.jpg";
import mobile from "../../assets/image/mobile.jpg";
import sale from "../../assets/image/sale.jpg";
import shoes from "../../assets/image/shoes.jpg";
const ImageHome = () => {
  return (
    <Wrapper>
      <div className="container_img1">
        <img className="img_1" src={sale} />
      </div>
      <div className="container_img2">
        <img className="img_2" src={mobile} />
      </div>
      <div className="container_img3">
        <img className="img_3" src={watch} />
      </div>
      <div className="container_img4">
        <img className="img_4" src={shoes} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 50vh 30vh;
  grid-gap: 1rem;
  .container_img1 {
    grid-column: 1/-1;
    grid-row: 1/2;
    .img_1 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container_img2 {
    grid-column: 1/3;
    grid-row: 2/-1;
    .img_2 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container_img3 {
    grid-column: 3/5;
    grid-row: 2/-1;
    .img_3 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container_img4 {
    grid-column: 5/-1;
    grid-row: 2/-1;
    .img_4 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default ImageHome;
