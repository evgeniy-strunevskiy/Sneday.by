import { LoginInterface } from './../../types/loginTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateTypes {
  login: boolean;
  isLoading: boolean;
  error: null | string;
  user: LoginInterface
}

const initialState: InitialStateTypes = {
  login: false,
  isLoading: true,
  error: null,
  user: {
    email: null,
    password: null,
  }
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSetting(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    loginSettingSuccess(state, action) {
      state.isLoading = false;
      state.login = true;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    loginSettingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginRemove(state) {
      state.isLoading = false;
      state.login = false;
      state.user.email = null;
      state.user.password = null;
    },
    loginAdd(state) {
      state.isLoading = false;
      state.login = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { loginSetting, stopLoading,loginAdd , loginRemove, loginSettingSuccess, loginSettingError } =
  loginSlice.actions;
export default loginSlice.reducer;
