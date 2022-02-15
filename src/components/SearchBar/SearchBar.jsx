import SearchBarStyle from "../SearchBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {

    /* Controller role of MVC */
    function handleChange() {
        console.log("hello");
    }

    return (
        <form className={SearchBarStyle.form} autoComplete="off">
            <input className={SearchBarStyle.input} type="text" placeholder="Enter city name" onChange={handleChange}></input>
            <button className={SearchBarStyle.button} type="button" onChange={handleChange}>
                <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}