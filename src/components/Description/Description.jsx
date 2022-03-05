import DescriptionStyle from "./Description.module.scss";

function convertSecondsToDate(seconds) {
    return new Date(seconds * 1000);
}

function TimeFormat({ dateTime }) {
    const hour = dateTime.getHours().toString().padStart(2, "0");
    const minute = dateTime.getMinutes().toString().padStart(2, "0");
  
    return <time datetime={dateTime.toISOString()}>{hour}:{minute}</time>
}

export default function Description(props) {
    const propsObject = [
        { title: "High", text: `${Math.floor(props.current.main.temp_max)}°`},
        { title: "Humidity", text: `${props.current.main.humidity}%` },
        { title: "Sunrise", text: <TimeFormat dateTime={convertSecondsToDate(props.current.sys.sunrise)}/> },
        { title: "Low", text: `${Math.floor(props.current.main.temp_min)}°` },
        { title: "Pressure", text: `${props.current.main.pressure} hPa` },
        { title: "Sunset", text: <TimeFormat dateTime={convertSecondsToDate(props.current.sys.sunset)} /> },
    ];

    return (
        <div className={DescriptionStyle.container}>
            <ul className={DescriptionStyle.ul}>
                {propsObject.map((item, index) => (
                    <li key={index} className={DescriptionStyle.li}>
                        <h2 className={DescriptionStyle.h2}>{item.text}</h2>
                        <p className={DescriptionStyle.p}>{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
