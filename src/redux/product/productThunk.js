import customFetch from "../../utils/contants";
export const fetchAllCategoriesThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
export const fetchProductsThunk = async (thunkAPI) => {
  const { category } = thunkAPI.getState().product;

  let url = "/v1/products?size=12&sortBy=id&order=DESC";
  if (category) {
    url = url + `&category=${category}`;
  }

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
