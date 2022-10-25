import { Avatar, Divider, Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import Pagigations from "../PaginationComponent/Pagigations";

export default function ReviewProducts() {
  const { reviews } = useSelector((store) => store.productDetail);
  const [titleStatus, setTitleStatus] = useState("Reviews");
  var moment = require("moment");
  return (
    <Wrapper>
      <div className="reviewProduct">
        <div className="titleReview">
          <div className="listTitle">
            <ul>
              <li
                className={titleStatus === "Description" ? "active" : ""}
                onClick={() => {
                  setTitleStatus("Description");
                }}
              >
                Description
              </li>
              <li
                className={titleStatus === "Specification" ? "active" : ""}
                onClick={() => {
                  setTitleStatus("Specification");
                }}
              >
                Specification
              </li>
              <li
                className={titleStatus === "Reviews" ? "active" : ""}
                onClick={() => {
                  setTitleStatus("Reviews");
                }}
              >
                Reviews
              </li>
            </ul>
          </div>
        </div>
        <Divider
          sx={{
            borderRightWidth: 2,
            backgroundColor: "#737070",
            marginBottom: "19px",
            width: "80%",
            marginLeft: "10%",
            marginTop: "-19px",
          }}
        />
        {titleStatus === "Reviews" ? (
          <div className="contentReviews">
            <h2>Customer Reviews</h2>
            {reviews.total > 0 ? (
              reviews.result.map((item) => {
                return (
                  <>
                    <div className="review">
                      <div className="avatar">
                        <Avatar />
                      </div>
                      <div className="contentReview">
                        <h3>{item.userReview.username}</h3>
                        <Rating
                          name="read-only"
                          value={item.rating}
                          readOnly
                          size="small"
                        />
                        <p>{item.content}</p>
                        <p className="date">
                          {moment(item.createdAt).format(
                            "h:mm:ss a,MMMM Do YYYY"
                          )}
                        </p>
                      </div>
                    </div>
                    <Divider
                      sx={{
                        borderRightWidth: 2,
                        backgroundColor: "#737070",
                        marginBottom: "19px",
                        width: "73%",
                        marginLeft: "4%",
                        marginTop: "-10px",
                      }}
                    />
                  </>
                );
              })
            ) : (
              <p className="titleReview">No Review</p>
            )}

            {reviews.total > 0 ? (
              <Pagigations totalReview={1} />
            ) : (
              <h2>The product has no reviews</h2>
            )}
          </div>
        ) : (
          <p className="titleReview">No Review</p>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .listTitle {
    color: "black";
    font-weight: 700;
    font-family: "Roboto";
    font-size: 20px;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      list-style-type: none;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 131px;
      margin-left: 35px;
      margin-right: 35px;
      cursor: pointer;
    }
    .active {
      background-color: #e7e2e2;
      border-bottom: solid 1px #ffd333;
    }
    li:hover {
      background-color: #e7e2e2;
      border-bottom: solid 1px #ffd333;
    }
  }
  .contentReviews {
    margin-left: 10%;
    font-family: "Roboto";
    h2 {
      font-weight: 700;
      font-size: 28;
      margin-left: 3%;
    }
  }
  .review {
    width: 73%;
    margin-left: 4%;
    display: flex;
    margin-top: 30px;
  }
  .date {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 12px;
    color: #5a5a5a;
  }
  .titleReview {
    font-size: 24px;
    font-family: "Roboto";
    text-align: center;
  }
  .contentReview {
    margin-left: 20px;
    margin-top: -14px;
  }
`;
