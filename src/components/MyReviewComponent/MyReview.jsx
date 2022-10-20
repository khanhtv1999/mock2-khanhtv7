import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { LoadingButton } from "@mui/lab";
import styled from "styled-components";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { createReview } from "../../redux/product/productDetailSlice";
import { useSelector, useDispatch } from "react-redux";

const Review = Yup.object().shape({
  content: Yup.string().min(1, "Please enter review"),
});
const MyReview = ({ id }) => {
  console.log("check chil id", id);
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
        productId: id,
      })
    );
    resetForm();
  };
  return (
    <Wrapper>
      <div className="writeReview">
        <h2>Write Review</h2>
        <div>
          <Rating
            name="simple-controlled"
            value={5}
            onChange={(event, newValue) => {
              setValueStar(newValue);
            }}
          />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              label="Write Your Review..."
              variant="filled"
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
      width: 80%;
    }
  }
`;
export default MyReview;
