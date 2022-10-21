import TextField from "@mui/material/TextField";
import styled from "styled-components";
const CartTotal = () => {
  return (
    <Wrapper>
      <div className="container-button">
        <input placeholder="Coupon Code" className="input-code" />
        <button className="button-apply">Apply Coupon</button>
      </div>
      <div className="box">
        <h3 className="title-large">Cart Total</h3>
        <div className="title-detail">
          <h4 className="title-small">Subtotal</h4>
          <h4 className="money">$120.00</h4>
          <h4 className="title-small">Shipping</h4>
          <h4 className="money">$20.00</h4>
          <h3 className="total">Total</h3>
          <h4 className="money">$140.00</h4>
        </div>
        <div className="container-input">
          <button className="button-apply">Proceed to checkout</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48rem;
  margin-top: 4rem;
  .container-button {
    display: flex;
    align-items: center;
    gap: 2rem;

    .input-code {
      border: none;
      border-bottom: none;
      width: 28rem;
      height: 5rem;
      padding: 0;
      background: #c4c4c4;
      color: #5a5a5a;
      border-radius: 0.5rem;
      font-size: 1.8rem;
      font-weight: 400;
      padding: 2rem;
    }
    .button-apply {
      background: #ffd333;
      border-radius: 5px;
      border: none;
      width: 18rem;
      height: 5rem;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: #000000;
    }
  }
  .box {
    width: 57.1rem;
    height: 45rem;
    border: 1px solid rgba(90, 90, 90, 0.4);
    border-radius: 5px;
    background-color: #fff;
    .title-large {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 3.4rem;
      line-height: 4rem;
      padding: 2rem;
    }
    .title-detail {
      display: grid;
      grid-row-gap: 3rem;
      grid-column-gap: 28rem;
      grid-template-columns: repeat(2, 1fr);
      padding: 2rem;
    }
    .title-small {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
    .money {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
    .total {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      color: #000000;
    }
    .container-input {
      display: flex;
      align-items: center;
      justify-content: center;
      .button-apply {
        background: #ffd333;
        border-radius: 5px;
        border: none;
        width: 48.7rem;
        height: 6.9rem;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 650;
        font-size: 3rem;
        line-height: 40px;
        color: #000000;
      }
    }
  }
`;
export default CartTotal;
