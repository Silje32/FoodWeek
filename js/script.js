import createList from "./createList.js";
import { saveToStorage, getFromStorage } from "./storage.js";
import { listKey } from "./settings.js";
import clearButton from "./clearButton.js";

const listItems = getFromStorage(listKey);
createList(listItems);
clearButton();


const listInput = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener("click", addItem);

function addItem() {
    const itemValue = listInput.value.trim();

    if (itemValue.length >= 1) {
        const newItem = { id: Date.now(), item: itemValue };
        listInput.value = "";
        listInput.focus();
        listItems.push(newItem);

        createList(listItems);
        saveToStorage(listKey, listItems);
    }

    console.log(listItems);
}
