import CartTable from "../../../components/CartTableComponent/CartTable";
import CartTotal from "../../../components/CartTotalComponent/CartTotal";
import styled from "styled-components";
const CartPage = () => {
  return (
    <Wrapper>
      <h1 className="title">Shopping Cart</h1>
      <CartTable />
      <CartTotal />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 5rem;
  .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.7rem;
    color: #000000;
    margin-left: 20rem;
  }
`;
export default CartPage;
