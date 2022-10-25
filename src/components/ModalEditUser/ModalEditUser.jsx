import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { TextField, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useFormik } from "formik";
import { editUser } from "../../redux/user/userSlice";
import { closeModalEditUser } from "../../redux/modal/modalSlice";
const validationSchema = yup.object({
  name: yup.string("Enter your user name").required("User name is required"),
  email: yup.string("Enter your email").required("Email is required"),
  contact: yup.string("Enter your contact").required("Contact is required"),
});

const ModalEditUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isOpenModalEditUser } = useSelector((state) => state.modal);
  const formik = useFormik({
    initialValues: user,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateInfo(values);
    },
  });
  const myHandleChange = (e) => {
    formik.handleChange(e);
    console.log("haha");
  };
  const updateInfo = (values) => {
    console.log("haha");
    console.log(values.name, values.contact, values.email, user.access_token);
    dispatch(
      editUser({
        username: values.name,
        contactEdit: values.contact,
        emailEdit: values.email,
        token: user.access_token,
      })
    );
  };
  useEffect(() => {
    formik.setValues(user);
  }, [user]);
  return (
    <Wrapper>
      <div
        className={`${
          isOpenModalEditUser ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 3, width: "45ch" },
              padding: "1.75rem",
            }}
          >
            <h1>Update Profile </h1>
            <div className="block-1">
              <TextField
                id="outlined-basic"
                name={"name"}
                value={formik.values.name}
                label="Name"
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                onChange={myHandleChange}
              />

              <TextField
                id="outlined-basic"
                name={"email"}
                value={formik.values.email}
                label="Email"
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                onChange={myHandleChange}
              />
            </div>
            <div className="block-2">
              {" "}
              <TextField
                id="outlined-basic"
                value={"114, Hoang Mai, Ha Noi"}
                label="Address"
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
              />
              <TextField
                id="outlined-basic"
                name={"contact"}
                value={formik.values.contact}
                label="Phone"
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                onChange={myHandleChange}
              />
            </div>
            <LoadingButton
              // loading={loading}
              // loadingPosition="start"
              sx={{
                backgroundColor: "#FFD333;",
                color: "#000",
                width: "200px",
                fontSize: "1.25rem",
                fontWeight: "600",
                marginLeft: "28.5rem",
                marginTop: "4rem",
              }}
              onClick={formik.handleSubmit}
            >
              Save
            </LoadingButton>
          </Box>
          <button className="close-modal-btn">
            <FaTimes
              onClick={() => {
                dispatch(closeModalEditUser());
              }}
            ></FaTimes>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: #fff;
    border-radius: 0.75rem;
    width: 90vw;
    height: 40vh;
    max-width: 800px;
    position: relative;
    display: flex;
  }
  .close-modal-btn {
    position: absolute;
    top: 0.25rem;
    right: 1.25rem;
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    cursor: pointer;
  }
  .block-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .block-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;
export default ModalEditUser;
