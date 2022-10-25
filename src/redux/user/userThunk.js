import customFetch from "../../utils/contants";
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
export const editUserThunk = async (
  username,
  contactEdit,
  emailEdit,
  token,
  thunkAPI
) => {
  const { email, name, contact } = thunkAPI.getState().user.user;

  if (contact !== contactEdit) {
    try {
      let resp;
      resp = await customFetch.patch(
        "/v1/users/change-contact",
        {
          contact: contactEdit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      resp = await customFetch.patch(
        "/v1/users/change-email",
        {
          email: emailEdit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      resp = await customFetch.patch(
        "/v1/users/change-username",
        {
          username: username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return resp.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data.message);
      console.log(error);
    }
  }
};
export const changeInfoBefoCheckoutThunk = async (
  contactEdit,
  emailEdit,
  token,
  thunkAPI
) => {
  const { email, contact } = thunkAPI.getState().user.user;
  console.log(contactEdit, emailEdit, token);
  if (contact !== contactEdit) {
    try {
      let resp;
      resp = await customFetch.patch(
        "/v1/users/change-contact",
        {
          contact: contactEdit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      resp = await customFetch.patch(
        "/v1/users/change-email",
        {
          email: emailEdit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
};
