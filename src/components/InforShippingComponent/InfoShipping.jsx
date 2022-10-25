import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changeInfoBefoCheckout } from "../../redux/user/userSlice";

const regexContact =
  /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
const validationSchema = yup.object({
  email: yup.string("Enter your email").required("Email is required"),
  contact: yup
    .string("Enter your contact")
    .matches(regexContact, "Invalid Contact")
    .required("Contact is required"),
});
const InfoShipping = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: user,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateInfor(values);
    },
  });
  const updateInfor = (values) => {
    dispatch(
      changeInfoBefoCheckout({
        contactEdit: values.contact,
        emailEdit: values.email,
        token: user.access_token,
      })
    );
  };
  return (
    <Wrapper>
      {/* <div className="container">
        <div className="container-title">
          <h2 className="title">Shipping Infomation</h2>
        </div>
        <div className="container-info">
          <p className="info">Hoang Mai, Ha Noi</p>
        </div>
        <div className="container-phone">
          <label>Phone Number</label>
          <p className="phone">0337529227</p>
        </div>
        <div className="container-email">
          <label>Email Address</label>
          <p className="email">Khanh1999ns@gmail.com</p>
        </div>
        <button>Edit Address</button>
      </div> */}
      <div className="container-edit">
        <div className="container-title">
          <h2 className="title">Shipping Infomation</h2>

          <TextField
            inputProps={{ style: { fontSize: 12 } }}
            fullWidth
            name="infomation"
            value={"114, Hoang Mai, Ha Noi"}
          ></TextField>
        </div>
        <div className="container-phone">
          <label>Phone Number</label>
          <TextField
            inputProps={{ style: { fontSize: 12 } }}
            fullWidth
            name="contact"
            value={formik.values.contact}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          ></TextField>
        </div>
        <div className="container-email">
          <label>Email Address</label>
          <TextField
            inputProps={{ style: { fontSize: 12 } }}
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          ></TextField>
        </div>

        <Button style={{ color: "red", fontSize: "12px" }} size="small">
          cancel
        </Button>
        <LoadingButton
          loadingPosition="start"
          // loading={loading}
          style={{ color: "blue", fontSize: "12px", marginLeft: "10px" }}
          onClick={formik.handleSubmit}
        >
          Save
        </LoadingButton>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container-edit {
    width: 40rem;
    height: 30rem;
    border: 1px solid rgba(90, 90, 90, 0.4);
    border-radius: 5px;
    padding: 1.5rem;
  }
  .container {
    margin-left: 1.5rem;
    margin-top: 1.5rem;
  }
  .container-title {
    margin-bottom: 1rem;
    .title {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }
  button {
    border: none;
    background-color: #fff;
    color: #2e8ada;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
  label {
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #000000;
  }
  .input {
    font-size: 40px;
  }
`;
export default InfoShipping;
