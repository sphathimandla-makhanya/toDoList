
// array to contain item objects
let items = [];

// date generator
let currentDate = new Date()
// random ID generator
let randomId = ()=>{
    return Math.random();
}
// Factory function to generate object tasks/items
function toDolist(name) {
    return{
        id: randomId(),
        name,
        dateCreated: currentDate,
        completed: false
    };
}

// function to save items into the local storage
function setItem() {
    let set = localStorage.setItem('itemName',JSON.stringify(items));
    
}

// get item from local storage
function getItem() {
    let storedItems = JSON.parse(localStorage.getItem('items'));
    // loads items from the local storage when the code runs
    if (storedItems) {
        items = storedItems;
    }
}