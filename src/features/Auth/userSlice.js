import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-key";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      // call API to regiser
      const data = await userApi.register(payload);

      // save date to local storage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
      return data.user;
    }
  )

  export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
      // call API to regiser
      const data = await userApi.login(payload);

      // save date to local storage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
      return data.user;
    }
  )


const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
      [register.fulfilled]: (state, action) => {
        state.current = action.payload;
      },
      
      [login.fulfilled]: (state, action) => {
        state.current = action.payload;
      }
    }
});

const {reducer} = userSlice;
export default reducer;
