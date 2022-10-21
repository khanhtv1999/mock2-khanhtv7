import styled from "styled-components";
const Benefit = () => {
  return (
    <Wrapper>
      <div className="container_title">
        <h4>Bestsellers</h4>
        <button>Show more...</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container_title {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3.25rem;
    h4 {
      font-family: "Arial";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 25px;
    }
    button {
      background: #ffffff;
      border: 1px solid #f0e36a;
      border-radius: 6rem;
      padding: 1rem 2rem;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export default Benefit;
