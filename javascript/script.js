// Array to contain item objects
let items = [];

// Date generator
let currentDate = new Date();

// Random ID generator
let randomId = () => {
    return Math.random();
};

// Factory function to generate object tasks/items
function toDoList(name) {
    return {
        id: randomId(),
        name,
        dateCreated: currentDate,
        completed: false
    };
}

// Function to save items to local storage
function setItem() {
    localStorage.setItem('items', JSON.stringify(items));
}

// Function to load items from local storage
function getItem() {
    let storedItems = JSON.parse(localStorage.getItem('items'));
    // Loads items from local storage when the code runs
    if (storedItems) {
        items = storedItems;
    }
}

// Function to generate objects using the factory function object template
function addItem(itemName) {
    // Declaring an object from the factory function object template
    let newItem = toDoList(itemName);
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


