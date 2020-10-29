import createList from "./createList.js";

export default function clearButton() {

    const clearButton = document.querySelector("#clear");

    clearButton.addEventListener("click", clearFoods); 

    function clearFoods() {
       // clear the localstorage
       // to remove everything in localstorage you can use the clear method
       localStorage.clear();

       // clear the ul
       createList([]);
    }
}