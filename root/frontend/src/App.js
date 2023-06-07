import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {ZeroTestWeather} from "./pages/weather/zerotest/";

// EXAMPLE TEST http://localhost:3000/0000weather?lat=33.86&lon=151.20

function App() {
  return (
    <Routes>
      <Route path={"/0000weather"} element={<ZeroTestWeather />}/>
    </Routes>
  );
}

export default App;
