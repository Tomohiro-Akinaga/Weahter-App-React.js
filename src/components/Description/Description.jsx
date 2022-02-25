import DescriptionStyle from "./Description.module.scss";

export default function Description() {
    const data = {
        High: 23,
        Wind: "7mph",
    };
    return (
        <div className={DescriptionStyle.container}>
            <ul className={DescriptionStyle.ul}>
                <li className={DescriptionStyle.li}>
                    <h2 className={DescriptionStyle.h2}>--</h2>
                    <p className={DescriptionStyle.p}>--</p>
                </li>
            </ul>
        </div>
    );
}
