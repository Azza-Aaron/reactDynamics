import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {ZeroTestWeather} from "./pages/weather/zerotest/";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/0000weather"} element={<ZeroTestWeather />}/>
      </Routes>
    </>
  );
}

export default App;
