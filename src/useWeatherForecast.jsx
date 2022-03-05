import { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchHourlyWeather } from "./api/weatherAPI.js";

 function useWeatherForecast(countryName) {
     const [current, setCurrent] = useState();
     const [hourly, setHourly] = useState();
     useEffect(() => {
        async function IIFE() {
            const current = await fetchCurrentWeather(countryName);
            setCurrent(current);
            const hourly = await fetchHourlyWeather(current.coord.lat, current.coord.lon);
            setHourly(hourly);
        }
        IIFE();
    }, [countryName]);
    return { current, hourly };
}

export default useWeatherForecast;