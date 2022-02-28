import CurrentWeatherStyle from "./CurrentWeather.module.scss";

export default function CurrentWeather(props) {
    return (
        <div className={CurrentWeatherStyle.container}>
            <img className={CurrentWeatherStyle.img} src={`http://openweathermap.org/img/wn/${props.currentWeather.weather[0].icon}@2x.png`}></img>
            <div className={CurrentWeatherStyle.text}>
                <h2 className={CurrentWeatherStyle.degree}>{Math.floor(props.currentWeather.main.temp)}&deg;</h2>
                <p className={CurrentWeatherStyle.climate}>{props.currentWeather.weather[0].main}</p>
            </div>
        </div>
    )
};
