import styled from "styled-components";
import { fetchAllCategories } from "../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCategory } from "../../redux/product/productSlice";
const SideBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  const { categories, loadCategories } = useSelector((store) => store.product);

  const handleOnclick = (item) => {
    dispatch(setCategory(item));
  };
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
        {loadCategories ? (
          <>
            {categories.map((item) => {
              return (
                <div
                  className="header_item"
                  onClick={() => handleOnclick(item)}
                >
                  <h3 className="header_item_title">{item}</h3>
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
              );
            })}
          </>
        ) : (
          <></>
        )}
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
    height: 82vh;

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
      align-items: stretch;
      cursor: pointer;

      .header_item_icon {
        width: 3rem;
        height: 3rem;
        color: #fff;
      }
      .header_item_title {
        font-size: 2.75rem;
        font-weight: 500;
        color: #fff;
      }
    }
    .active {
      background-color: #b59628;
    }
    .header_item:hover {
      background-color: #b59628;
    }
  }
`;
export default SideBar;
