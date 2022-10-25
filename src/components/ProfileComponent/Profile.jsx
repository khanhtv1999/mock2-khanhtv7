import { Avatar, Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { openModalEditUser } from "../../redux/modal/modalSlice";
import styled from "styled-components";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <ModalEditUser />
      <div className="avatar">
        <Avatar
          sx={{ width: 110, height: 110 }}
          alt={user.username}
          src={user.avatar_link}
        />
      </div>
      <div className="info">
        <h2 className="user-name">{user.name}</h2>
        <div>
          <p>
            <span>Email: </span>
            {user.email}
          </p>
        </div>
        <div>
          <p>
            <span>Address: </span>
            {"114 Hoang Mai, Ha Noi"}
          </p>
        </div>
        <div>
          <p>
            <span>Phone: </span>
            {user.contact}
          </p>
        </div>
        <button
          onClick={() => dispatch(openModalEditUser())}
          className="btn-edit"
        >
          Edit Profile
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  height: 25rem;
  background: rgba(182, 182, 182, 0.4);

  .avatar {
    margin-top: 2.75rem;
    margin-left: 2.25rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 2.75rem;

    .btn-edit {
      width: 15.25rem;
      height: 3.9rem;
      background: #ffd333;
      border-radius: 5px;
      border: none;
      font-weight: 700;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
    }
    .user-name {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 3.2rem;
      color: #000000;
      margin-bottom: 1rem;
    }
    span {
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
      font-family: "Roboto", sans-serif;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 200;
      font-size: 20px;
      line-height: 2rem;
      color: #000000;
    }
  }
`;
export default Profile;
