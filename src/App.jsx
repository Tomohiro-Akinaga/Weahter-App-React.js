import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Description from "./components/Description/Description.jsx";
import HourlyItem from "./components/HourlyItem/HourlyItem.jsx";
import Loading from "./components/Loading/Loading.jsx";
import AppStyle from "./App.module.scss";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const VANCOUVER = { lat:"49.2497", lon:"-123.1193" };

export default function App() {
    const [country, setCountry] = useState("Vancouver");
    const [currentWeather, setCurrentWeather] = useState();
    /* default lat and long are vancouver */
    const [lat, setLat] = useState("49.2497");
    const [lon, setLon] = useState("-123.1193");
    const [hourlyWeather, setHourlyWeather] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        setCountry(event.target.querySelector(".SearchBar_input__V8-ey").value);
    }

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`
        )
            .then((res) => res.json())
            .then((data) => {
                if(data.cod === "404") {
                    alert("city not found");
                    return ;
                };
                setCurrentWeather(data);
                setLat(data.coord.lat);
                setLon(data.coord.lon);
            });
    }, [country]);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`
        )
            .then((res) => res.json())
            .then((data) => {
                setHourlyWeather(data);
            });
    }, [country]);

    return (
        <div className={AppStyle.app}>
            {!hourlyWeather && <Loading />}
            <div className={AppStyle.top}>
                {currentWeather && <DisplayDate currentWeather={currentWeather} />}
                <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className={AppStyle.middle}>
                {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
                {currentWeather && <Description currentWeather={currentWeather}/>}
            </div>
            <div className={AppStyle.bottom}>
                {hourlyWeather && <HourlyItem hourlyWeather={hourlyWeather}/>}
            </div>
        </div>
    );
}