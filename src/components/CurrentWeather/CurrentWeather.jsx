import CurrentWeatherStyle from "./CurrentWeather.module.scss";

export default function CurrentWeather(props) {
    const propsObject = {
        imgURL:`http://openweathermap.org/img/wn/${props.current.weather[0].icon}@2x.png`,
        degree: props.current.main.temp,
        climate: props.current.weather[0].main
    };
    
    return (
        <div className={CurrentWeatherStyle.container}>
            <img className={CurrentWeatherStyle.img} src={propsObject.imgURL}></img>
            <div className={CurrentWeatherStyle.text}>
                <h2 className={CurrentWeatherStyle.degree}>{Math.floor(propsObject.degree)}&deg;</h2>
                <p className={CurrentWeatherStyle.climate}>{propsObject.climate}</p>
            </div>
        </div>
    )
};
