// import CurrentWeatherImg from "http://openweathermap.org/img/wn/10d@2x.png";
import CurrentWeatherStyle from "./CurrentWeather.module.scss";

export default function CurrentWeather(props) {
    console.log(props.json);
    return (
        <div className={CurrentWeatherStyle.container}>
            <img className={CurrentWeatherStyle.img}></img>
            <div className={CurrentWeatherStyle.text}>
                <h2 className={CurrentWeatherStyle.degree}>21&deg;</h2>
                <p className={CurrentWeatherStyle.climate}>Mostly Sunny</p>
            </div>
        </div>
    )
};

// src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}