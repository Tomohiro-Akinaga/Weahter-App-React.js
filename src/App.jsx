import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Description from "./components/Description/Description.jsx";
import SwitchBar from "./components/SwitchBar/SwitchBar.jsx";
import HourlyItem from "./components/HourlyItem/HourlyItem.jsx";
import "./App.scss";
import { useEffect } from "react/cjs/react.development";

export default function App() {
    const [country, setCountry] = React.useState("Vancouver, Canada");
    const [json, setJson] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setCountry(event.target.querySelector(".SearchBar_input__V8-ey").value);
    }
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=7d20d69e5d5abc8385c9ae6416019816`
        )
            .then((res) => res.json())
            .then((data) => {
                setJson(data);
            });
    }, [country]);

    return (
        <div className="app">
            <div className="app-top">
                <DisplayDate country={country} />
                <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className="app-middle">
                <CurrentWeather />
                <Description />
            </div>
            <div className="app-bottom">
                <SwitchBar />
                <HourlyItem />
            </div>
        </div>
    );
}
