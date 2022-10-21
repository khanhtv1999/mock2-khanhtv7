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
                  style={{ borderRadius: "5px" }}
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
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cart-icon"
                      >
                        <path
                          d="M17.6491 8.4C17.6491 7.88453 17.2244 7.46667 16.7005 7.46667C16.1766 7.46667 15.7519 7.88453 15.7519 8.4V11.2H12.906C12.3821 11.2 11.9573 11.6179 11.9573 12.1333C11.9573 12.6488 12.3821 13.0667 12.906 13.0667H15.7519V15.8667C15.7519 16.3821 16.1766 16.8 16.7005 16.8C17.2244 16.8 17.6491 16.3821 17.6491 15.8667V13.0667H20.495C21.019 13.0667 21.4437 12.6488 21.4437 12.1333C21.4437 11.6179 21.019 11.2 20.495 11.2H17.6491V8.4Z"
                          fill="#212529"
                        />
                        <path
                          d="M1.52236 0C0.998448 0 0.57373 0.417868 0.57373 0.933333C0.57373 1.4488 0.998448 1.86667 1.52236 1.86667H3.62759L4.38973 4.86603L7.23041 19.772C7.31454 20.2134 7.7063 20.5333 8.1628 20.5333H10.0601C7.9644 20.5333 6.26553 22.2048 6.26553 24.2667C6.26553 26.3285 7.9644 28 10.0601 28C12.1557 28 13.8546 26.3285 13.8546 24.2667C13.8546 22.2048 12.1557 20.5333 10.0601 20.5333H23.3409C21.2453 20.5333 19.5464 22.2048 19.5464 24.2667C19.5464 26.3285 21.2453 28 23.3409 28C25.4366 28 27.1355 26.3285 27.1355 24.2667C27.1355 22.2048 25.4366 20.5333 23.3409 20.5333H25.2382C25.6947 20.5333 26.0865 20.2134 26.1706 19.772L29.0165 4.83867C29.0685 4.56577 28.9943 4.28426 28.8141 4.07061C28.6339 3.85695 28.3663 3.73333 28.0841 3.73333H6.05757L5.28857 0.706967C5.183 0.291478 4.80356 0 4.36826 0H1.52236ZM8.95009 18.6667L6.45993 5.6H26.9411L24.4509 18.6667H8.95009ZM11.9573 24.2667C11.9573 25.2976 11.1079 26.1333 10.0601 26.1333C9.01223 26.1333 8.1628 25.2976 8.1628 24.2667C8.1628 23.2357 9.01223 22.4 10.0601 22.4C11.1079 22.4 11.9573 23.2357 11.9573 24.2667ZM25.2382 24.2667C25.2382 25.2976 24.3888 26.1333 23.3409 26.1333C22.2931 26.1333 21.4437 25.2976 21.4437 24.2667C21.4437 23.2357 22.2931 22.4 23.3409 22.4C24.3888 22.4 25.2382 23.2357 25.2382 24.2667Z"
                          fill="#212529"
                        />
                      </svg>
                    </div>
                    {item.countInStock ? (
                      <>
                        <div className="success">Available</div>
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
  grid-template-columns: repeat(4, minmax(31rem, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 4rem;
  grid-column-gap: 1rem;

  .cart-item {
    grid-row-gap: 0.5rem;
    padding: 2.5rem;
    border-radius: 0.5rem;

    .cart-img {
      width: 100%;
      grid-column: 1 / -1;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      object-fit: cover;
      height: 20rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .cart-name {
      font-weight: 600;
      font-size: 2.75rem;
      line-height: 2.5rem;
      color: #000000;
      font-family: "Arial";
      font-style: normal;
    }
    .container_detail {
      display: grid;
      grid-template-columns: 2fr 1fr;
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
    .success {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 167, 17, 0.5);
      border: 1px solid rgba(0, 202, 20, 0.5);
      box-shadow: 5px 5px 20px rgba(196, 255, 202, 0.5);
      border-radius: 10px;
      width: 9.8rem;
      height: 2.4rem;
    }
    .cart {
      --bs-card-spacer-y: 0rem;
    }
  }
`;
export default CardItem;
