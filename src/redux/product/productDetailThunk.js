import customFetch from "../../utils/contants";
export const getProductByIdThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
export const createReviewThunk = async (
  url,
  content,
  rating,
  token,
  productId,
  thunkAPI
) => {
  try {
    const resp = await customFetch.post(
      url,
      {
        content: content,
        rating: rating,
        productId: productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
