import styled from "styled-components";
import { GrCart } from "react-icons/gr";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar-top">
        <p>About Us</p>
        <p>Contacts</p>
        <p>Store</p>
        <p>Track Order</p>
      </div>
      <div className="navbar-bottom">
        <div className="logo">SHOPP APP</div>
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search items"
          />
          //
          <button className="search__button">
            <svg
              className="search__icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
          </button>
        </form>
        <div>
          <GrCart className="icon-cart" />
        </div>
        <div className="avatar"></div>
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
    min-height: 15.904rem;
    min-width: 144rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .logo {
      font-size: 3.9rem;
      font-weight: 700;
      line-height: 4.5rem;
      margin-right: 1rem;
    }

    .icon-cart {
      width: 4rem;
      height: 4.2rem;
      margin-right: 3.3rem;
    }
    .avatar {
      background-color: #fff;
      width: 4.9rem;
      height: 4.9rem;
      border-radius: 50%;
    }
    .search {
      display: flex;
      flex: 0 0 40%;
      margin-right: 4rem;
      align-items: center;
      justify-content: center;
      margin-right: 10rem;
      .search__input {
        width: 74.8rem;
        height: 5.035rem;
        background: #c4c4c4;
        padding: 0.7rem 2rem;
        border: none;
        margin-right: -5.25rem;
        font-size: 2rem;
      }
      .search__button {
        background: #c4c4c4;
        border: none;
        .search__icon {
          border: none;
          fill: #999;
        }
      }
    }
  }
`;
export default Navbar;
