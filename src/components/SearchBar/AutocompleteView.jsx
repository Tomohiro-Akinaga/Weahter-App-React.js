export default function AutocompleteView() {
    const country = ["Japan", "India", "Canada", "China"];
    const input = document.getElementById("input");
    const div = document.createElement("div");
    div.classList.add("autocomplete");
    input.appendChild(div);
}