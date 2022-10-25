import styled from "styled-components";
import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOders } from "../../redux/product/productSlice";
const RecentOrdTable = () => {
  var moment = require("moment");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { user } = useSelector((store) => store.user);
  const { myOders } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user.access_token);
    dispatch(
      getMyOders({ token: user.access_token, currentPage: currentPage })
    );
  }, [currentPage]);
  return (
    <Wrapper>
      <div>
        <table>
          <thead>
            <tr>
              <th>Oder</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {myOders.map((item) => {
              return (
                <tr>
                  <th className="col-img">{item.id}</th>

                  <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                  <td>{item.status}</td>
                  <td>{`$${item.totalPrice}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr style={{ width: "83.7rem" }} />
      <div>
        <Pagination
          count={1}
          variant="outlined"
          shape="rounded"
          style={{ display: "flex", justifyContent: "center", margin: "10px" }}
          onChange={(e, number) => {
            setCurrentPage(number);
          }}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  table {
    /* border: 1px solid rgba(90, 90, 90, 0.41); */

    width: 83.7rem;
    font-size: 18px;
    /* border: 1px solid rgba(90, 90, 90, 0.41); */
    border-collapse: collapse;
    border-radius: 5px;
    font-family: "Roboto";
  }

  th,
  td {
    /* border: 1px solid #343a40; */
    padding: 1rem 2rem;
    text-align: left;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    font-family: "Roboto";
  }

  thead tr {
    background-color: #c4c4c4;
    color: #000000;
    height: 5rem;
    font-weight: 600;
    font-size: 1.6rem;
    font-family: "Roboto";
  }

  thead th {
    width: 20%;
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    background-color: #dfe3e8 !important;
    font-size: 1.25rem;
    border: none;

    &.Mui-selected {
      background-color: #ffd333 !important;
    }

    &.Mui-disabled {
      color: #ffd333;
      background-color: #919eab !important;
      font-size: 2rem;
    }
  }
`;
export default RecentOrdTable;
