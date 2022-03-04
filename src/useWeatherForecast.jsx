import { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchHourlyWeather } from "./api/weatherAPI.js";

 function useWeatherForecast() {
     const [current, setCurrent] = useState();
     const [hourly, setHourly] = useState();
     useEffect(() => {
        async function IIFE() {
            const current = await fetchCurrentWeather("Vancouver");
            setCurrent(current);
            const hourly = await fetchHourlyWeather(current.coord.lat, current.coord.lon);
            setHourly(hourly);
        }
        IIFE();
    }, []);
    return { current, hourly };
}

export default useWeatherForecast;