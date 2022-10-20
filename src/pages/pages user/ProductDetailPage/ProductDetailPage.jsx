import ProductDetailPicture from "../../../components/ProductPictureComponent/ProductDetailPicture";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReviewProducts from "../../../components/ReviewProductComponent/ReviewProduct";
import MyReview from "../../../components/MyReviewComponent/MyReview";
import { getProductById } from "../../../redux/product/productDetailSlice";
const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(getProductById({ id: productId }));
    console.log(productId);
  }, [productId]);
  return (
    <Wrapper>
      <ProductDetailPicture />
      <ReviewProducts />
      <MyReview id={productId} />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container-detail {
  }
`;
export default ProductDetailPage;
