import styled from "styled-components";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { totalQuantity } from "../../redux/cart/cartSlice";
import { useEffect } from "react";
import { CompressOutlined } from "@mui/icons-material";
const QuantityComponent = ({ quantityItem, check }) => {
  const dispatch = useDispatch();
  let initial;
  if (check) {
    initial = 1;
  } else initial = quantityItem;
  const [quantity, setQuantity] = useState(initial);

  const handleDecrease = () => {
    setQuantity((quantity) => {
      let newState = quantity - 1;
      if (newState < 0) {
        newState = 0;
      }
      return newState;
    });
  };
  const handleIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };
  useEffect(() => {
    dispatch(totalQuantity(quantity));
  }, [quantity]);
  return (
    <Wrapper>
      <div className="quantity">
        <div onClick={handleIncrease}>
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
        <div onClick={handleDecrease}>
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
