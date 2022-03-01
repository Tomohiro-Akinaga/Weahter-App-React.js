import React from "react";
import SwitchBarStyle from "./SwitchBar.module.scss";

export default function SwitchBar() {
    const [hourly, setHourly] = React.useState(true);
    const [daily, setDaily] = React.useState(false);

    function handleClickHourly() {
        setHourly(!hourly);
        setDaily(!daily);
    }

    function handleClickDaily() {
        setHourly(!hourly);
        setDaily(!daily);
    }

    return (
        <div className={SwitchBarStyle.container}>
            <a
                href="#"
                className={`${SwitchBarStyle.a} ${hourly ? "is-active" : ""}`}
                onClick={handleClickHourly}
            >
                Hourly
            </a>
            <a
                href="#"
                className={`${SwitchBarStyle.a} ${daily ? "is-active" : ""}`}
                onClick={handleClickDaily}
            >
                Daily
            </a>
        </div>
    );
}
