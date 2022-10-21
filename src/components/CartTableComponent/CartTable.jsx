import styled from "styled-components";
import { Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import QuantityComponent from "../QuantityComponent/Quantity";

const CartTable = () => {
  const { product } = useSelector((store) => store.productDetail);
  const { cart } = useSelector((store) => store.cart);

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
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
                <td>{item.name}</td>
                <td>{`$${item.price}`}</td>
                <td>
                  <QuantityComponent quantityItem={item.quantity} />
                </td>
                <td>220 cm</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  table {
    /* border: 1px solid rgba(90, 90, 90, 0.41); */
    border: #000000;
    width: 80vw;
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

  thead tr {
    background-color: #c4c4c4;
    color: #000000;
    height: 5rem;
    font-weight: 700;
    font-size: 1.6rem;
  }

  thead th {
    width: 20%;
  }
`;

export default CartTable;
