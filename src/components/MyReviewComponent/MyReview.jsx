import { Rate } from "antd";
import Rating from "@mui/material/Rating";
import { LoadingButton } from "@mui/lab";
import styled from "styled-components";
import * as Yup from "yup";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { createReview } from "../../redux/product/productDetailSlice";
import { useSelector, useDispatch } from "react-redux";

const Review = Yup.object().shape({
  content: Yup.string().min(1, "Please enter review"),
});
const MyReview = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [valueStar, setValueStar] = useState(5);
  const initialValues = {
    content: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      handleValues(values, resetForm);
    },
    validationSchema: Review,
  });
  const handleValues = (values, resetForm) => {
    console.log("checkk");
    console.log(values.content);
    dispatch(
      createReview({
        token: user.access_token,
        content: values.content,
        rating: valueStar,
        productId: productId,
      })
    );
    resetForm();
  };
  return (
    <Wrapper>
      <div className="writeReview">
        <h2>Write Review</h2>
        <div>
          <Rate
            name="simple-controlled"
            allowHalf
            defaultValue={5}
            onChange={(newValue) => {
              setValueStar(newValue);
            }}
          />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              placeholder="Write Your Review..."
              className="input-review"
              id="content"
              name="content"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
            />
          </div>

          <LoadingButton
            type="submit"
            loadingPosition="end"
            variant="contained"
            // loading={loading}
            sx={{
              width: "248px",
              height: "40px",
              backgroundColor: "#FFD333",
              marginTop: "13px",
              color: "black",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Post Your Review
          </LoadingButton>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .writeReview {
    margin-left: 14%;
    margin-bottom: 5%;
    font-family: "Arial";
    font-weight: 700;
    font-size: 3rem;
    .input-review {
      width: 125rem;
      height: 7.3rem;
      background: #e6e6e6;
      border: 1px solid #6a6a6a;
      border-radius: 5px;
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #5a5a5a;
      padding: 1rem;
      padding-bottom: 3rem;
    }
  }
`;
export default MyReview;
