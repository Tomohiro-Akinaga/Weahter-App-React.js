import React from "react";
import "../src/css/app.css"
import CountryDate from "./components/CountryDate.js"
import CurrentDescription from "./components/CurrentDescription";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar.js"
// import ResultCurrent from "./components/result-current/ResultCurrent.js"
// import ResultForecast from "./components/result-forecast/ResultForecast.js"

export default function App() {
  return (
    <div className="app">
      <div className="top-container">
        <CountryDate />
        <SearchBar />
      </div>
      <div className="middle-container">
        <CurrentWeather />
        <CurrentDescription />
      </div>
      <div className="bottom-container">
        <SwitchBar />
        <HourlyData />
        <DailyData />
      </div>

    </div>
  )
}
