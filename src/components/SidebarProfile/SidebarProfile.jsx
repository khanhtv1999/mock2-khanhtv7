import styled from "styled-components";
import { NavLink } from "react-router-dom";
const SidebarProfile = () => {
  return (
    <Wrapper>
      <div className="container-title">
        <h1 className="title">Navigation</h1>
      </div>
      <div className="container-link">
        <NavLink
          to="/profile"
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#FFD333" : "#868484",
          })}
        >
          My Profile
        </NavLink>
        <NavLink
          to="/profile/history-order"
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#FFD333" : "#868484",
          })}
        >
          Order History
        </NavLink>
        <NavLink
          to="/logout"
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#FFD333" : "#868484",
          })}
        >
          Logout
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 28rem;
  box-shadow: 0.5px 0.5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: #fffefe;
  border: 1px solid rgba(90, 90, 90, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  .container-title {
    margin-top: 2rem;
    .title {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 33px;

      color: #000000;
    }
  }
  .container-link {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    .link {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
export default SidebarProfile;
