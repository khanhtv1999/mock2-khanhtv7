import ProductDetailPicture from "../../../components/ProductPictureComponent/ProductDetailPicture";

import styled from "styled-components";
import ReviewProducts from "../../../components/ReviewProductComponent/ReviewProduct";
import MyReview from "../../../components/MyReviewComponent/MyReview";
import { getProductById } from "../../../redux/product/productDetailSlice";
import Related from "../../../components/RelatedProductComponent/Related";
const ProductDetailPage = () => {
  return (
    <Wrapper>
      <ProductDetailPicture />
      <ReviewProducts />
      <MyReview />
      <Related />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container-detail {
  }
`;
export default ProductDetailPage;
