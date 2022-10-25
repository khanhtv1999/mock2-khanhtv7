import styled from "styled-components";
import Profile from "../../../components/ProfileComponent/Profile";
import RecentOrdTable from "../../../components/RecentOders/RecentOrdTable";
const ProfilePage = () => {
  return (
    <Wrapper>
      <section className="container">
        <Profile />
        <div className="container-title">
          <p className="title">Recent Orders</p>
        </div>
        <RecentOrdTable />
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    border: 1px solid rgba(90, 90, 90, 0.4);
    border-radius: 5px;
    width: 83.7rem;
    --bs-gutter-x: 0rem;
    .container-title {
      display: flex;
      width: 92rem;

      .title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 650;
        font-size: 2.8rem;
        line-height: 3.3rem;
        color: #000000;
        margin-top: 2.25rem;
        margin-left: 2.25rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
export default ProfilePage;
