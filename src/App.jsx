import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
// import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="app-top">
        <DisplayDate />
        <SearchBar />
      </div>
      {/* <div className="app-middle">
        <CurrentWeather />
      </div> */}
    </div>
  )
};