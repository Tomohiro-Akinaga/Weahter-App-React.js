import DescriptionStyle from "./Description.module.scss";

export default function Description(props) {
    const sunriseDate = new Date(props.currentWeather.sys.sunrise * 1000);
    const sunsetDate = new Date(props.currentWeather.sys.sunset * 1000);
    const sunriseHour = sunriseDate.getHours().toString().padStart(2, "0");
    const sunsetHour = sunsetDate.getHours().toString().padStart(2, "0");
    const sunriseMinute = sunriseDate.getMinutes().toString().padStart(2, "0");
    const sunsetMinute = sunsetDate.getMinutes().toString().padStart(2, "0");

    const data = [
        { title: "High", text: `${Math.floor(props.currentWeather.main.temp_max)}°`},
        { title: "Humidity", text: `${props.currentWeather.main.humidity}%` },
        { title: "Sunrise", text: `${sunriseHour}:${sunriseMinute}` },
        { title: "Low", text: `${Math.floor(props.currentWeather.main.temp_min)}°` },
        { title: "Pressure", text: `${props.currentWeather.main.pressure} hPa` },
        { title: "Sunset", text: `${sunsetHour}:${sunsetMinute}` },
    ];

    return (
        <div className={DescriptionStyle.container}>
            <ul className={DescriptionStyle.ul}>
                {data.map((item, index) => (
                    <li key={index} className={DescriptionStyle.li}>
                        <h2 className={DescriptionStyle.h2}>{item.text}</h2>
                        <p className={DescriptionStyle.p}>{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
