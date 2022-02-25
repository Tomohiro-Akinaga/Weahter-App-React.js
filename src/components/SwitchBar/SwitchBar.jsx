import SwitchBarStyle from "./SwitchBar.module.scss";

export default function SwitchBar() {
    return (
        <div className={SwitchBarStyle.container}>
            <h2 className={SwitchBarStyle.h2}>Hourly</h2>
            <h2 className={SwitchBarStyle.h2}>Daily</h2>
        </div>
    )
};