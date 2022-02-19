import AutocompleteModel from "./AutocompleteModel.js";

export default function AutocompleteView() {
    const keyword = AutocompleteModel();
    const ul = document.getElementById("ul");
    if(keyword === undefined) {
        ul.replaceChildren();
    }
    const template = document.getElementById("autocomplete-item").firstElementChild;
    const autocompleteArray = keyword.map(x => {
        const element = template.cloneNode(true);
        element.innerText = x.name;
        return element;
    });
    ul.replaceChildren(...autocompleteArray);

    /* when select country name from autocomplete */
    ul.addEventListener("click", selectCountry);
    function selectCountry(event) {
        const input = document.getElementById("input");
        input.value = event.target.innerText;
        ul.replaceChildren();
    };
};