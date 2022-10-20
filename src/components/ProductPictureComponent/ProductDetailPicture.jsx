import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProductById } from "../../redux/product/productDetailSlice";
import { Divider, Rating } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import image2 from "../../assets/image/img2.jpg";
import image3 from "../../assets/image/img3.jpg";
import image4 from "../../assets/image/img4.jpg";
import image5 from "../../assets/image/img5.jpg";
import { useParams } from "react-router-dom";

const ProductDetailPicture = () => {
  const { product, isSuccess } = useSelector((store) => store.productDetail);
  const dispatch = useDispatch();
  const [imgCurr, setImgCurr] = useState(image2);
  const listImg = [image2, image2, image3, image4, image5];

  const [quantity, setQuantity] = useState(1);
  if (quantity < 1) {
    setQuantity(1);
  }
  if (quantity > product.countInStock * 1) {
    setQuantity(product.countInStock * 1);
  }
  const handleClickImg = (item) => {
    setImgCurr(item);
  };
  return (
    <Wrapper>
      <div className="product">
        <div className="listImg">
          <div className="mainImg">
            <img src={imgCurr} alt="product img" width="474" height="474" />
          </div>

          <div className="effectImg">
            {listImg.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  onClick={() => handleClickImg(item)}
                  alt={item}
                  width="87"
                  height="87"
                />
              );
            })}
          </div>
        </div>

        {isSuccess ? (
          <>
            <div className="contentProduct">
              <h1>{product.name}</h1>
              <div className="rating">
                <Rating
                  style={{ fontSize: "25px" }}
                  name="read-only"
                  value={product.rating}
                  readOnly
                  size="large"
                />
                <Divider
                  sx={{
                    height: 15,
                    m: 0.5,
                    borderRightWidth: 2,
                    backgroundColor: "#565353",
                    margin: "0px 10px 0px 10px",
                  }}
                  orientation="vertical"
                />
                <label>{product.numOfReviews} Reviews</label>
                <Divider
                  sx={{
                    height: 15,
                    m: 0.5,
                    borderRightWidth: 2,
                    backgroundColor: "#565353",
                    margin: "0px 10px 0px 10px",
                  }}
                  orientation="vertical"
                />
                <label>3k Sold</label>
              </div>
              <p>{product.description}</p>
              <Divider
                sx={{
                  borderRightWidth: 2,
                  backgroundColor: "#737070",
                  marginBottom: "19px",
                }}
              />
              <div className="stateProduct">
                <label className="avaliability">
                  Avaliability:{" "}
                  {product.countInStock > 0 ? (
                    <lable className="state">In stock</lable>
                  ) : (
                    <lable className="stateSoldout">Sold out</lable>
                  )}{" "}
                </label>
                <label className="brand">Brand: {product.brand}</label>
                <label className="code">SKU: 83690/32</label>
              </div>
              <div className="statePrice">
                <label className="price">${product.price}</label>
                <div className="sale">
                  <label style={{ marginTop: "0.4rem" }}>50% Off</label>
                </div>
              </div>
              <h5 className="select_color">Select Color</h5>
              <div className="container-color">
                <div className="circle">
                  <div className="color1"></div>
                </div>
                <div className="color2"></div>
                <div className="color3"></div>
                <div className="color4"></div>
              </div>
              <label className="titleQuantity">Quantity: </label>
              <div className="wrap">
                <div className="quantity">
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

                  <label>{quantity}</label>
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
                </div>
                <div className="add-card">
                  <LoadingButton
                    className="btn"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    <div>
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cart-icon"
                      >
                        <path
                          d="M9 4.8868C9 4.59502 8.77614 4.3585 8.5 4.3585C8.22386 4.3585 8 4.59502 8 4.8868V6.4717H6.5C6.22386 6.4717 6 6.70823 6 7C6 7.29178 6.22386 7.52831 6.5 7.52831H8V9.11321C8 9.40499 8.22386 9.64151 8.5 9.64151C8.77614 9.64151 9 9.40499 9 9.11321V7.52831H10.5C10.7761 7.52831 11 7.29178 11 7C11 6.70823 10.7761 6.4717 10.5 6.4717H9V4.8868Z"
                          fill="#212529"
                        />
                        <path
                          d="M0.5 0.13208C0.223858 0.13208 0 0.368609 0 0.660382C0 0.952155 0.223858 1.18868 0.5 1.18868H1.60961L2.01131 2.88644L3.50856 11.3238C3.55291 11.5737 3.75939 11.7547 4 11.7547H5C3.89543 11.7547 3 12.7008 3 13.8679C3 15.035 3.89543 15.9811 5 15.9811C6.10457 15.9811 7 15.035 7 13.8679C7 12.7008 6.10457 11.7547 5 11.7547H12C10.8954 11.7547 10 12.7008 10 13.8679C10 15.035 10.8954 15.9811 12 15.9811C13.1046 15.9811 14 15.035 14 13.8679C14 12.7008 13.1046 11.7547 12 11.7547H13C13.2406 11.7547 13.4471 11.5737 13.4914 11.3238L14.9914 2.87095C15.0188 2.71648 14.9797 2.55713 14.8848 2.4362C14.7898 2.31526 14.6487 2.24529 14.5 2.24529H2.89039L2.48507 0.53225C2.42943 0.297067 2.22943 0.13208 2 0.13208H0.5ZM4.41496 10.6981L3.10246 3.30189H13.8975L12.585 10.6981H4.41496ZM6 13.8679C6 14.4515 5.55228 14.9245 5 14.9245C4.44772 14.9245 4 14.4515 4 13.8679C4 13.2844 4.44772 12.8113 5 12.8113C5.55228 12.8113 6 13.2844 6 13.8679ZM13 13.8679C13 14.4515 12.5523 14.9245 12 14.9245C11.4477 14.9245 11 14.4515 11 13.8679C11 13.2844 11.4477 12.8113 12 12.8113C12.5523 12.8113 13 13.2844 13 13.8679Z"
                          fill="#212529"
                        />
                      </svg>
                    </div>
                    Add to cart
                  </LoadingButton>
                </div>
              </div>
              <div className="rate_footer">
                <h5>Rate: </h5>
                <Rating
                  style={{ fontSize: "25px" }}
                  name="read-only"
                  value={product.rating}
                  readOnly
                  size="large"
                />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-left: 5vw;
  .product {
    gap: 10rem;
    display: flex;
    margin-top: 12px;
    .listImg {
      margin-left: 10%;
      img {
        cursor: pointer;
        border-radius: 5px;
        margin: 5px;
      }
      .mainImg {
        margin-bottom: 16px;
      }
      .effectImg {
        display: flex;
        justify-content: center;
      }
    }

    .contentProduct {
      height: 360px;
      width: 625px;
      margin-left: 31px;
      h1 {
        font-family: "Roboto";
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        margin-top: 30px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto";
        line-height: 19px;
      }
      .rating {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        font-size: 2rem;
        align-items: center;
        label {
          display: flex;
          font-family: "Roboto";
          color: #565353;
          font-size: 1.6rem;
          font-weight: 700;
          align-items: center;
        }
      }
    }
  }

  .stateProduct {
    color: #5a5a5a;
    font-weight: 400;
    font-family: "Roboto";
    font-size: 14px;
  }

  .state {
    color: #04941b;
  }

  .stateSoldout {
    color: #c90404;
  }

  .avaliability {
    margin-right: 49px;
  }

  .brand {
    margin-right: 33px;
  }

  .statePrice {
    font-family: "Roboto";
    margin-top: 22px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .select_color {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 2.3rem;
    color: #5a5a5a;
  }
  .container-color {
    margin-bottom: 1.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: 1px solid #79b17c;
      height: 100px;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      .color1 {
        width: 2.5rem;
        height: 2.5rem;
        background-color: #79b17c;
        border-radius: 50%;
      }
    }
    .color2 {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #140006;
      border-radius: 50%;
    }
    .color3 {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #e89edc;
      border-radius: 50%;
    }
    .color4 {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #9a9a00;
      border-radius: 50%;
    }
  }
  .price {
    font-size: 32px;
    font-weight: bold;
    color: #000000;
  }

  .sale {
    margin-left: 22px;
    height: 30px;
    width: 76px;
    background-color: #ffd333;
    color: #c90404;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

  .wrap {
    display: flex;
    align-items: center;
  }

  .add-card {
    margin-left: 19px;
    margin-top: 10px;
    width: 16.4rem;
    height: 4.2rem;
    background-color: #ffd333;
    border-radius: 5px;
    .btn {
      text-transform: none;
      justify-content: center;
      align-items: center;
    }
    .cart-icon {
      margin-right: 1rem;
      width: 1.85rem;
      height: 1.85rem;
      margin-left: 1.2rem;
    }
  }

  .ratingReview {
    margin-top: 100px;
  }
  .rate_footer {
    margin-top: 2rem;
    h5 {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #5a5a5a;
    }
  }
`;
export default ProductDetailPicture;
