import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Description from "./components/Description/Description.jsx";
import HourlyItem from "./components/HourlyItem/HourlyItem.jsx";
import "./App.scss";
import { useEffect } from "react/cjs/react.development";

export default function App() {
    const [country, setCountry] = React.useState("Vancouver");
    const [currentWeather, setCurrentWeather] = React.useState();

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
                setCurrentWeather(data);
            });
    }, [country]);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`
        )
            .then((res) => res.json())
            .then((data) => {
                setCurrentWeather(data);
            });
    }, [country]);

    return (
        <div className="app">
            <div className="app-top">
                <DisplayDate country={country} />
                <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className="app-middle">
                {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
                {currentWeather && <Description currentWeather={currentWeather}/>}
            </div>
            <div className="app-bottom">
                <HourlyItem />
            </div>
        </div>
    );
}
