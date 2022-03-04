import React from "react";
import { useState, useEffect } from "react";


function useWeatherForecast() {
    const [country, setCountry] = useState("Vancouver");
    const [currentWeather, setCurrentWeather] = useState();

    useEffect(() => {
        async function fetchWeatherData() {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`)
                    .then(res => res.json())
                    // .then(data => );
        }
    }

    )
};

export default useWeatherForecast;