import SearchBarStyle from "../SearchBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AutocompleteView from "./AutocompleteView.jsx";

export default function SearchBar() {

    function ErrorMessage(event) {
        event.preventDefault();
        const input = document.getElementById("input");
        if (!input.value) {
            alert("Enter country or state name")
        }
    }

    return (
        <div className={SearchBarStyle.container}>
            <form id="form" className={SearchBarStyle.form} onSubmit={ErrorMessage} autoComplete="off" type="submit">
                <input id="input" className={SearchBarStyle.input} onChange={AutocompleteView} type="text" placeholder="Enter country name"></input>
                <button className={SearchBarStyle.button} type="submit">
                    <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className={SearchBarStyle.autocomplete}>
                <ul id="ul" className={SearchBarStyle.ul}>
                </ul>
            </div>
            <template id="autocomplete-item">
                <li className={SearchBarStyle.li}></li>
            </template>
        </div>
    )
}