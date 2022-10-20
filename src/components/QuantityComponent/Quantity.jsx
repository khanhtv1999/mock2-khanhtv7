import styled from "styled-components";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
const QuantityComponent = () => {
  const { product, isSuccess } = useSelector((store) => store.productDetail);
  const [quantity, setQuantity] = useState(1);
  if (quantity < 1) {
    setQuantity(1);
  }
  if (quantity > product.countInStock * 1) {
    setQuantity(product.countInStock * 1);
  }

  return (
    <Wrapper>
      <div className="quantity">
        <div
          onClick={() => {
            setQuantity((quantity) => quantity + 1);
          }}
        >
          <AddIcon
            sx={{
              position: "absolute",
              left: "20px",
              top: "10px",
              color: "#33A0FF",
              cursor: "pointer",
              ":hover": {
                color: "black",
              },
            }}
          />
        </div>

        <label>{quantity}</label>
        <div
          onClick={() => {
            setQuantity((quantity) => quantity - 1);
          }}
        >
          <RemoveIcon
            sx={{
              position: "absolute",
              right: "20px",
              top: "10px",
              color: "#33A0FF",
              cursor: "pointer",
              ":hover": {
                color: "black",
              },
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .titleQuantity {
    color: #5a5a5a;
    font-size: 17px;
    font-weight: 700;
    font-family: "Roboto";
  }

  .quantity {
    width: 162px;
    height: 42px;
    background-color: #e2e4e5;
    border-radius: 5px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 11px;
    label {
      font-size: 16px;
      font-weight: 400;
      font-family: "Roboto";
      color: #959595;
    }
  }
`;
export default QuantityComponent;
