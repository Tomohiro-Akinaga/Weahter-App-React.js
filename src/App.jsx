import React from "react";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
/* components */
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
// import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
// import Description from "./components/Description/Description.jsx";
// import HourlyItem from "./components/HourlyItem/HourlyItem.jsx";
import Loading from "./components/Loading/Loading.jsx";
/* custom hooks */
import useWeatherForecast from "./useWeatherForecast.jsx";
/* API */
import { fetchCurrentWeather } from "./api/weatherAPI.js";
import { fetchHourlyWeather } from "./api/weatherAPI.js";
/* css */
import AppStyle from "./App.module.scss";
/* Firebase */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { text } from "@fortawesome/fontawesome-svg-core";

/* Firebase */
const firebaseConfig = {
    apiKey: "AIzaSyDKZ3CKxlUUiGttBZJrKTi4HcFZvWmiGFo",
    authDomain: "weather-forecast-react-app.firebaseapp.com",
    projectId: "weather-forecast-react-app",
    storageBucket: "weather-forecast-react-app.appspot.com",
    messagingSenderId: "1043737875729",
    appId: "1:1043737875729:web:f959d03a508cd582dfa8b0",
    measurementId: "G-Z1XYK3GH8V"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* component */
function App() {
    const { current, hourly } = useWeatherForecast();
    console.log(current);
    // const [country, setCountry] = useState("Vancouver");
    // const [currentWeather, setCurrentWeather] = useState();
    // const [hourlyWeather, setHourlyWeather] = useState();
    // const { lat, lon } = useLocation(VANCOUVER.lat, VANCOUVER.lon);
    /* default lat and long are vancouver */
    // const [lat, setLat] = useState("49.2497");
    // const [lon, setLon] = useState("-123.1193");


    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setCountry(event.target.querySelector(".SearchBar_input__V8-ey").value);
    // }

    return (
        <div className={AppStyle.app}>
            {/* {!hourlyWeather && <Loading />} */}
            <div className={AppStyle.top}>
                { current && <DisplayDate current={current} /> }
                <SearchBar />
            </div>
            {/* <div className={AppStyle.middle}>
                {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
                {currentWeather && <Description currentWeather={currentWeather}/>}
            </div>
            <div className={AppStyle.bottom}>
                {hourlyWeather && <HourlyItem hourlyWeather={hourlyWeather}/>}
            </div> */}
        </div>
    );
    App.propTypes = {
        current: PropTypes.object
    }
}

export default App;