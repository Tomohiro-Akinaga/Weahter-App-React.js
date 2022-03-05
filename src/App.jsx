import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
/* components */
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Description from "./components/Description/Description.jsx";
// import HourlyItem from "./components/HourlyItem/HourlyItem.jsx";
import Loading from "./components/Loading/Loading.jsx";
/* custom hooks */
import useWeatherForecast from "./useWeatherForecast.jsx";
/* css */
import AppStyle from "./App.module.scss";
/* Firebase */
import { initializeApp } from "firebase/app";

/* Firebase */
const firebaseConfig = {
    apiKey: "AIzaSyDKZ3CKxlUUiGttBZJrKTi4HcFZvWmiGFo",
    authDomain: "weather-forecast-react-app.firebaseapp.com",
    projectId: "weather-forecast-react-app",
    storageBucket: "weather-forecast-react-app.appspot.com",
    messagingSenderId: "1043737875729",
    appId: "1:1043737875729:web:f959d03a508cd582dfa8b0",
    measurementId: "G-Z1XYK3GH8V",
};
initializeApp(firebaseConfig);

/* component */
function App() {
    const [country, setCountry] = useState("Vancouver");
    const { current, hourly } = useWeatherForecast(country);

    function handleSubmit(event) {
        event.preventDefault();
        setCountry(event.target.querySelector(".SearchBar_input__V8-ey").value);
    }

    return (
        <div className={AppStyle.app}>
            {!hourly && <Loading />}
            <div className={AppStyle.top}>
                {current && <DisplayDate current={current} />}
                <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className={AppStyle.middle}>
                {current && <CurrentWeather current={current} />}
                {current && <Description current={current}/>}
            </div>
            {/* <div className={AppStyle.bottom}>
                {hourlyWeather && <HourlyItem hourlyWeather={hourlyWeather}/>}
            </div> */}
        </div>
    );
    App.propTypes = {
        current: PropTypes.object,
    };
}

export default App;
