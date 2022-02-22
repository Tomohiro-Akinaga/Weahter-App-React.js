import SearchBarStyle from "../SearchBar/SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar() {
    return (
        <div className={SearchBarStyle.container}>
            <form className={SearchBarStyle.form} autoComplete="off" type="submit">
                <input className={SearchBarStyle.input} type="text" placeholder="Enter country name"></input>
                <button className={SearchBarStyle.button} type="submit">
                    <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}