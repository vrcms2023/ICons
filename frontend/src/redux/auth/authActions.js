import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClientServiceApi, axiosServiceApi } from "../../util/axiosUtil";
import { getCookie, setCookie } from "../../util/cookieUtil";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON

      const { data } = await axiosClientServiceApi.post(
        `/user/auth/jwt/create/`,
        {
          email,
          password,
        }
      );

      // store user's token in local storage
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      setCookie("access", data.access);
      setCookie("refresh", data.refresh);

      return data;
    } catch (error) {
      // return custom error message from API if any
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ userName, email, password, re_password }, { rejectWithValue }) => {
    try {
      await axiosClientServiceApi.post(`/user/auth/users/`, {
        userName,
        email,
        password,
        re_password,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosServiceApi.get(`/user/auth/users/me/`);
      localStorage.setItem("userName", data.userName);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error?.response?.data) {
        const key = Object.keys(error.response.data);
        return rejectWithValue(error.response.data[key][0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getRefreshToken = createAsyncThunk(
  "auth/getRefreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosServiceApi.get(`/user/auth/jwt/refresh/`);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error?.response?.data) {
        const key = Object.keys(error.response.data);
        return rejectWithValue(error.response.data[key][0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getSelectedUserPermissions = createAsyncThunk(
  "auth/getSelectedUserPermissions",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosServiceApi.get(
        `/pagePermission/updatePermissions/${id}/`
      );

      return data?.userPermissions?.user_permission_list;
    } catch (error) {
      // return custom error message from API if any
      if (error === "Not Found") {
        return [
          {
            id: "67c7e654-6008-4690-96e6-e7cac347db23232",
            name: "all",
          },
        ];
      }
      if (error?.response?.data) {
        const key = Object.keys(error.response.data);
        return rejectWithValue(error.response.data[key][0]);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);

export const getMenu = createAsyncThunk(
  "auth/getMenus",
  async (_, { rejectWithValue }) => {
    try {
      let data = {};
      if (getCookie("access")) {
        data = await axiosServiceApi.get("/pageMenu/createPageMenu/");
      } else {
        data = await axiosClientServiceApi.get(`/pageMenu/getPageMenu/`);
      }

      return data.data;
    } catch (error) {
      // return custom error message from API if any
      if (error?.response?.data) {
        const key = Object.keys(error.response.data);
        return rejectWithValue(error.response.data[key][0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
