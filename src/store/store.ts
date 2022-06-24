import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/loginSlice'
import pointReducer from './slices/pointsSlice'
import vegetablesReducer from './slices/vegetablesSlice'
import searchMapReducer from './slices/searchMapSlice'
import ownerReducer from './slices/ownerSlice'
import favoritesReducer from './slices/favoritesSlice'

const rootReducer = combineReducers({
 login: loginReducer,
 points: pointReducer,
 vegetables: vegetablesReducer,
 searchMap: searchMapReducer,
 owner: ownerReducer,
 favorites: favoritesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type rootState = ReturnType<typeof rootReducer> 
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch'] 