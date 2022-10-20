import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalLogin,
  closeModalLogin,
  openModalRegister,
  closeModalRegister,
} from "../../redux/modal/modalSlice";

const DropDownCopm = () => {
  const dispatch = useDispatch();
  const handleOpenModalLogin = () => {
    dispatch(openModalLogin());
  };
  const handleOpenModalRegister = () => {
    dispatch(openModalRegister());
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p onClick={handleOpenModalLogin}>Login</p>,
        },
        {
          key: "2",
          label: <p onClick={handleOpenModalRegister}>Register</p>,
        },
      ]}
    />
  );

  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <BsPerson
          style={{
            width: "4rem",
            height: "4rem",
            fill: "#000",
          }}
        />
      </Dropdown>
    </>
  );
};
export default DropDownCopm;
