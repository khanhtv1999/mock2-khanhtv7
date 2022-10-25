import { Outlet } from "react-router-dom";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import styled from "styled-components";

const ShareSidebar = () => {
  return (
    <Wrapper>
      <SidebarProfile />
      <section>
        <Outlet />
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 280px 835px;
  grid-column-gap: 3rem;
  justify-content: center;
`;
export default ShareSidebar;
