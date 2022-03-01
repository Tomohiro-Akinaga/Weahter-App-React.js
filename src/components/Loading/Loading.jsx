import LoadingStyle from "./Loading.module.scss";

export default function Loading() {
    return (
        <div className={LoadingStyle.loading}>
            <div className={LoadingStyle.spinner}></div>
        </div>
    )
};