import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Image } from "antd";
const CheckoutTable = () => {
  const { cart } = useSelector((store) => store.cart);
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => {
            return (
              <tr>
                <th className="col-img">
                  {" "}
                  <Image
                    style={{ borderRadius: "5px" }}
                    width={100}
                    height={100}
                    src={item.images[0].url}
                  />
                </th>
                <td className="col-product">{item.name}</td>
                <td className="coll-price">{`$${item.price}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  table {
    font-size: 18px;
    border: 1px solid rgba(90, 90, 90, 0.41);
    border-collapse: collapse;
    border-radius: 5px;
  }

  th,
  td {
    /* border: 1px solid #343a40; */
    padding: 1rem 2rem;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  td {
    background: #ebeaea;
  }

  thead tr {
    background-color: #c4c4c4;
    color: #000000;
    height: 5rem;
    font-weight: 700;
    font-size: 1.6rem;
  }

  thead th {
    /* width: 100%/3; */
  }
  .col-img {
    width: 20%;
    background: #ebeaea;
  }
  .col-product {
    width: 75%;
  }
  .col-price {
  }
`;
export default CheckoutTable;
