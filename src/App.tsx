import "normalize.css";
import { useEffect } from "react";
import './App.scss';
import { Router } from "./components/Router";
import { useAppDispatch } from "./hooks/redux";
import { getCart } from "./store/middleware/cart";
import { getFavorites } from "./store/middleware/favorites";
import { getPoints } from "./store/middleware/points";
import { loginAdd, stopLoading } from "./store/slices/loginSlice";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      dispatch(loginAdd())
    }
    dispatch(stopLoading())
    dispatch(getFavorites())
    dispatch(getPoints());
    dispatch(getCart());
  }, [])
  

  return (
    <div className="App">
       <Router />
    </div>
  );
}

export default App;
