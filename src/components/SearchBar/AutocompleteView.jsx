import SearchBarStyle from "../SearchBar/SearchBar.module.css";

export default function AutocompleteView() {
    return (
        <div className={SearchBarStyle.autocomplete}>
            <ul className={SearchBarStyle.ul}>
                <li className={SearchBarStyle.li}>Japan</li>
                <li className={SearchBarStyle.li}>Canada</li>
                <li className={SearchBarStyle.li}>China</li>
                <li className={SearchBarStyle.li}>Taiwan</li>
            </ul>
        </div>
    )
}