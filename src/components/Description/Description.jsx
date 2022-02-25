import DescriptionStyle from "./Description.module.scss";

export default function Description() {
    const data = [
        { title: "High", text: "23°" },
        { title: "Wind", text: "7mph" },
        { title: "Sunrise", text: "05:27" },
        { title: "Low", text: "14°" },
        { title: "Rain", text: "0%" },
        { title: "Sunset", text: "20:57" },
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
