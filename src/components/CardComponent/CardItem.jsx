import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { Rate } from "antd";
import { fetchProducts } from "../../redux/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const CardItem = () => {
  const { category, fetchProductSuccess, products } = useSelector(
    (store) => store.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [category]);
  return (
    <Wrapper>
      {fetchProductSuccess ? (
        <>
          {products.map((item) => {
            return (
              <Card key={item.id} className="cart-item">
                <Card.Img
                  className="cart-img"
                  variant="top"
                  src={item.images[0].url}
                />

                <Card.Body>
                  <Link to={`/products/${item.id}`} className="cart-name">
                    {item.name}
                  </Link>
                  <Card.Text>{`ID: ${item.id}`}</Card.Text>
                  <div className="container_detail">
                    <div className="container_star">
                      <Rate disabled defaultValue={item.rating} />
                    </div>
                    <div className="container_number">
                      <p className="number_review">{`${item.numOfReviews} Review`}</p>
                    </div>

                    <div className="container_price">
                      <p className="price">{`$ ${item.price}`}</p>
                    </div>
                    <div className="container_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="cart-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                    {item.countInStock ? (
                      <>
                        <span className="badge badge-pill badge-success">
                          Avaliable
                        </span>
                      </>
                    ) : (
                      <>
                        <span class="badge badge-pill badge-danger">
                          Danger
                        </span>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(25rem, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 9rem;
  .cart-item {
    grid-row-gap: 3.5rem;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;

    .cart-img {
      width: 100%;
      grid-column: 1 / -1;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      object-fit: cover;
      height: 20rem;
    }
    .cart-name {
      font-weight: 600;
      font-size: 2.75rem;
      line-height: 2.5rem;
      color: #000000;
    }
    .container_detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 0.5rem;
      .container_icon {
        display: flex;
        justify-content: flex-end;
        .cart-icon {
          height: 3.5rem;
          width: 3.5rem;
        }
      }
      .container_number {
        display: flex;
        justify-content: flex-end;
      }
      .price {
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 2rem;
      }
    }
  }
`;
export default CardItem;
