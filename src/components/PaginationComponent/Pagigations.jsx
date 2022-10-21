import { Pagination } from "@mui/material";
import styled from "styled-components";
const Pagigations = ({ totalReview }) => {
  return (
    <Wrapper>
      <div className="container-pagination">
        <Pagination
          count={totalReview}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          sx={{
            button: {
              backgroundColor: "#DFE3E8",
            },
            ul: {
              "& .MuiPaginationItem-root": {
                "&.Mui-selected": {
                  background: "#FFD333",
                  color: "black",
                },
              },
            },
          }}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Pagigations;
