import SearchBarStyle from "../SearchBar/SearchBar.module.scss";

export default function SearchBar() {
    return (
        <div>
            <input type="text"></input>
            <p className={SearchBarStyle.text}>hello</p>
        </div>
    )
}