import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Description from "./components/Description/Description.jsx";
import HourlyItem from "./components/HourlyItem/HourlyItem.jsx";
import Loading from "./components/Loading/Loading.jsx";
import "./App.scss";
import { useEffect } from "react/cjs/react.development";

export default function App() {
    const [country, setCountry] = React.useState("Vancouver");
    const [currentWeather, setCurrentWeather] = React.useState();
    /* default lat and long are vancouver */
    const [lat, setLat] = React.useState("49.2497");
    const [lon, setLon] = React.useState("-123.1193");
    const [hourlyWeather, setHourlyWeather] = React.useState();

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
    }, [currentWeather]);

    return (
        <div className="app">
            {!hourlyWeather && <Loading />}
            <div className="app-top">
                {currentWeather && <DisplayDate currentWeather={currentWeather} />}
                <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className="app-middle">
                {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
                {currentWeather && <Description currentWeather={currentWeather}/>}
            </div>
            <div className="app-bottom">
                {hourlyWeather && <HourlyItem hourlyWeather={hourlyWeather}/>}
            </div>
        </div>
    );
}
