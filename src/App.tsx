import "normalize.css";
import { useEffect } from "react";
import './App.scss';
import { Router } from "./components/Router";
import { useAppDispatch } from "./hooks/redux";
import { loginAdd, stopLoginLoading } from "./store/slices/loginSlice";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      dispatch(loginAdd())
    }
    dispatch(stopLoginLoading())
  }, [])
  

  return (
    <div className="App">
       <Router />
    </div>
  );
}

export default App;
