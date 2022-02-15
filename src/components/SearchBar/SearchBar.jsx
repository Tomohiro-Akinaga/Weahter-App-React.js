import SearchBarStyle from "../SearchBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <div className={SearchBarStyle.container}>
            <input className={SearchBarStyle.input} type="text" placeholder="Enter city name"></input>
            <button className={SearchBarStyle.button} type="button">
                <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}