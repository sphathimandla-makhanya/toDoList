
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
    let storedItems = JSON.parse(localStorage.getItem('itemName'));
    // loads items from the local storage when the code runs
    if (storedItems) {
        items = storedItems;
    }
}

// Function to generate objects using the factory function object template
function addItem(itemName) {
    // Declaring an object from the factory function object template
    let newItem = toDolist(itemName);
    // Push method for inserting/placing new items in the array of objects
    items.push(newItem);
    // Save items to local storage
    setItem();
    return items;
}

let output = document.querySelector('[data-output]');
let btn2 = document.querySelector('[data-btn2]');
btn2.addEventListener('click', function () {
    const input = document.querySelector('[data-item]').value;
    output.textContent = JSON.stringify(addItem(input));
});