import SearchBarStyle from "../SearchBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AutocompleteView from "./AutocompleteView.jsx";

export default function SearchBar() {

    return (
        <form className={SearchBarStyle.form} autoComplete="off">
            <input id="input" className={SearchBarStyle.input} type="text" placeholder="Enter city name" onChange={AutocompleteView}></input>
            <button className={SearchBarStyle.button} type="button">
                <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}