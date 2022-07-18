import { ILoginInterface } from './../../types/loginTypes';
import { loginRemove, loginSetting, loginSettingError, loginSettingSuccess } from "../slices/loginSlice";
import { AppDispatch } from "../store";

export const setLogin = (data: ILoginInterface) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginSetting(true));
    //Здесь может быть асинхронная логика
    localStorage.setItem('auth', 'true');
    dispatch(loginSettingSuccess(data))
  } catch (error) {
    dispatch(loginSettingError('ошибка'))
  } finally {
    dispatch(loginSetting(false));
  }
}

export const removeLogin = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginSetting(true));
    //Здесь может быть асинхронная логика
    localStorage.removeItem('auth');
    dispatch(loginRemove());
  } catch (error) {
    dispatch(loginSettingError('ошибка'))
  } finally {
    dispatch(loginSetting(false));
  }
}