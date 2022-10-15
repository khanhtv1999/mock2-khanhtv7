import styled from "styled-components";
const SideBar = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <div className="header_sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="menu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>

          <h2 className="header_title">Categories</h2>
        </div>
        <div className="header_item first">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="header_item">
          <h3 className="header_item_title">Computer</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="header_item_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sidebar {
    display: flex;
    background-color: #3d464d;
    color: #fff;
    flex-direction: column;

    .header_sidebar {
      align-items: center;
      display: flex;
      padding: 2rem 6rem;
      justify-content: center;
      gap: 1.5rem;
      .menu {
        width: 5rem;
        height: 5rem;
        color: #fff;
      }
      .header_title {
        color: #fff;
        font-size: 4.5rem;
        font-weight: 600;
        line-height: 4rem;
      }
    }
    .header_item {
      display: flex;

      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;

      .header_item_icon {
        width: 3rem;
        height: 3rem;
        color: #fff;
      }
      .header_item_title {
        font-size: 3rem;
        font-weight: 500;
      }
    }
    .first {
      background-color: #b59628;
    }
  }
`;
export default SideBar;
