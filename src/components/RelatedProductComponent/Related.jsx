import styled from "styled-components";
import { Divider } from "antd";
import CardItem from "../CardComponent/CardItem";
const Related = () => {
  return (
    <Wrapper>
      <div className="container-title">
        <h2>Related Products</h2>
      </div>
      <div className="line">
        <Divider />
      </div>

      <div>
        {/* <div className="container-icon">
          <svg
            width="10"
            height="15"
            viewBox="0 0 10 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.340492 6.70337L6.92047 0.330366C7.37527 -0.110122 8.11067 -0.110122 8.56063 0.330366L9.65407 1.38941C10.1089 1.8299 10.1089 2.54217 9.65407 2.97798L4.99486 7.5L9.65891 12.0173C10.1137 12.4578 10.1137 13.1701 9.65891 13.6059L8.56547 14.6696C8.11067 15.1101 7.37527 15.1101 6.92531 14.6696L0.34533 8.29663C-0.114301 7.85614 -0.114301 7.14386 0.340492 6.70337Z"
              fill="#706D6D"
            />
          </svg>
        </div>
        <div>
          <div>
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.65934 8.29663L3.07618 14.6696C2.62117 15.1101 1.8854 15.1101 1.43523 14.6696L0.34126 13.6106C-0.113753 13.1701 -0.113753 12.4578 0.34126 12.022L5.00756 7.50469L0.34126 2.98735C-0.113753 2.54686 -0.113753 1.83458 0.34126 1.39878L1.43039 0.330366C1.8854 -0.110122 2.62116 -0.110122 3.07134 0.330366L9.6545 6.70337C10.1144 7.14386 10.1144 7.85614 9.65934 8.29663Z"
                fill="#706D6D"
              />
            </svg>
          </div>
        </div> */}
      </div>
      <div className="container-item">
        <CardItem />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  .container-title {
    grid-column: 3/5;
  }
  .line {
    grid-column: 5/13;
  }
  .container-icon {
    grid-column: 13/15;
    display: flex;
    flex-direction: row;
  }
  .container-item {
    grid-column: 4/16;
  }
  .ant-divider-horizontal.ant-divider-with-text-center::before,
  .ant-divider-horizontal.ant-divider-with-text-center::after {
    border-top: 1px solid red;
  }
`;
export default Related;
