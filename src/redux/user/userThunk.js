import customFetch from "../../utils/contants";
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
