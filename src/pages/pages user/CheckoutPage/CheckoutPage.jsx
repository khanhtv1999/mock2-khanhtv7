import styled from "styled-components";
import CheckoutTable from "../../../components/CheckoutTable/CheckoutTable";
import InfoShipping from "../../../components/InforShippingComponent/InfoShipping";
import CheckoutSubtotal from "../../../components/CheckoutSubtotal/CheckoutSubtotal";
const CheckoutPage = () => {
  return (
    <Wrapper>
      <div className="container-table">
        <CheckoutTable />
      </div>
      <div className="container-info">
        <InfoShipping />
      </div>
      <div className="container-info">
        <CheckoutSubtotal />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;

  gap: 2rem;
  margin-left: 22rem;

  .container-table {
    width: 100%;
  }
  .container-info {
    width: 40%;
  }
`;
export default CheckoutPage;
