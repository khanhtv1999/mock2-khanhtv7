import styled from "styled-components";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Dialog, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModalLogin } from "../../redux/modal/modalSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleClickAvatar = () => {};
  const handleClose = () => {};
  const handleClickLogout = () => {};
  const handleClickCart = () => {
    navigate("cart");
  };
  const handleClickUser = () => {
    dispatch(openModalLogin());
  };
  return (
    <Wrapper>
      <div className="navbar-top">
        <p>About Us</p>
        <p>Contacts</p>
        <p>Store</p>
        <p>Track Order</p>
      </div>
      <div className="navbar-bottom">
        <div className="mainBar">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <h1 className="title">SHOP APP</h1>
          </div>
          <Box
            component="form"
            sx={{
              p: "10px 16px",
              display: "flex",
              alignItems: "center",
              width: 748,
              height: 51,
              backgroundColor: "#C4C4C4",
              marginTop: "17px",
              marginLeft: "20px",
              borderRadius: "5px",
            }}
          >
            <IconButton sx={{ p: "27px" }} aria-label="menu">
              <MenuIcon sx={{ fontSize: "20px" }} />
            </IconButton>

            <Typography
              sx={{
                color: "#4B4B4B",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Categories
            </Typography>

            <Divider sx={{ height: 51, m: 0.5 }} orientation="vertical" />

            <InputBase
              sx={{ ml: 2, flex: 1, fontSize: "20px" }}
              placeholder="Search Items"
              inputProps={{ "aria-label": "search google maps" }}
            />

            <IconButton type="button" sx={{ p: "16px" }} aria-label="search">
              <SearchIcon fontSize="large" />
            </IconButton>
          </Box>
          <div className="icons">
            <IconButton type="submit" sx={{ p: "16px" }} aria-label="cart">
              <span className="cart-container">
                <AddShoppingCartIcon
                  onClick={handleClickCart}
                  sx={{
                    color: "#323232",
                    fontSize: "35px",
                    marginBottom: "10px",
                  }}
                />
                <span className="cart-value">{cart.length}</span>
              </span>
            </IconButton>
            <IconButton
              type="submit"
              sx={{ p: "16px", fontSize: "35px", marginBottom: "10px" }}
              aria-label="user"
            >
              {!isAuthenticated ? (
                <PersonOutlineIcon
                  fontSize="large"
                  sx={{ color: "#323232", fontSize: "40px" }}
                  onClick={handleClickUser}
                />
              ) : (
                <Avatar
                  alt="Avatar"
                  src={user.avatar}
                  onClick={handleClickAvatar}
                />
              )}
            </IconButton>
          </div>
          <div className="menuDialog">
            <Dialog
              // open={stateDialogUser}
              BackdropProps={{
                style: {
                  height: "89.5%",
                  marginTop: "10.5%",
                },
              }}
              PaperProps={{
                style: { borderRadius: 5 },
                sx: {
                  m: 0,
                  bottom: 76,
                  left: 420,
                },
              }}
              onClose={handleClose}
            >
              <div className="menu">
                <ul className="listItem">
                  <li>My Profile</li>
                  <li>Order History</li>
                  <li onClick={handleClickLogout}>Logout</li>
                </ul>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .navbar-top {
    display: flex;
    flex-direction: row;
    background: #f0e9e9;
    min-height: 3.8rem;
    min-width: 144rem;
    p {
      font-size: 1.6rem;
      margin-right: 1.42rem;
      align-items: center;
      align-self: center;
    }
    p:first-child {
      margin-left: 16.3rem;
    }
  }
  .navbar-bottom {
    background: #ffd333;
    min-height: 11rem;
    min-width: 144rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cart-container {
      display: flex;
      align-items: center;
      position: relative;
    }
    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
      background: #fffdfd;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.25rem;
      padding: 12px;
      color: #8c7211;
    }
    .mainBar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6rem;
      .title {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        margin-top: 2.75rem;
        margin-right: 2rem;
        cursor: pointer;
      }
      .icons {
        margin-top: 35px;
        margin-left: 10px;
      }
      .menu {
        width: 217px;
        height: 193px;
        background: #ffffff;
      }
    }
  }
`;
export default Navbar;
