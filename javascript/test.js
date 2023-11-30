// function to take in a single item as an input and returns it.
// function toDoList (id, name, createdDate, completed){
//     this.id=id,
//     this.name=name,
//     this.createdDate=createdDate,
//     this.completed=completed
// }

// declaring an array variable to push the objects inside 

// let array =[]

// function thingsToDo(id, name, createdDate, completed) {
//     let task = new toDoList(id, name, createdDate, completed);
//     return array.push(task)
// }


// thingsToDo('5', 'siya', '200','yes');
// console.log(array);

// let items = getItems();
// function getItems() {
//     let value=localStorage.getItem('todo-list')|| '[]';
//     return JSON.parse(value)
// }

// function setItems(items) {
//     let itemsJson = JSON.stringify(items);
//     localStorage.setItem('todo-list', itemsJson);
// }

// function addItem() {
//     items.unshift({
//         id: "",
//         name: "",
//         dateCreated: "",
//         completed: false
//     });

//     setItems(items) 
// }

// function update(item, key, value) {
//     item[key] =value;
//     setItems(items)
// }
// console.log(items);


// let output = document.querySelector('[data-output]');
// let btn2 = document.querySelector('[data-btn2]')
// btn2.addEventListener('click', function(){
//     let input = document.querySelector('[data-item]').value;
//     addItem(input);
//     console.log(items);
//     output.textContent=JSON.stringify(items, null, 2);
// }) 
//write function


// let input = document.querySelector('[data-item]')

// let output = document.querySelector('[data-output]')


// Declaring sort button as a variable btn1 
// adding an event listner to btn1  
// let btn1 = document.querySelector('[data-btn1]')
// btn1.addEventListener('click', function) //write function

// Declaring add button as a variable btn2 
// adding an event listner to btn1  

// Global variable for getting items from local storage
// let items = getItems();

// function to send items to local storage
// function setItems(items) {
//     let itemsJson = JSON.stringify(items);
//     localStorage.setItem('todo-list', itemsJson);
// }

// function to get items from local storage 
// and reverse them back to their original data type, it is an opposite of stringify
// function getItems() {
//     let value = localStorage.getItem('todo-list') || '[]';
//     return JSON.parse(value);
// }

// function for adding items to the todo list
// inside is an object template with 
// name of the item
// date item was added in the list
// an unque item ID generator and
// a completion status
// function addItem(taskName) {
//     let newTask = {
//         id: Date.now(),
//         name: taskName,
//         dateCreated: new Date().toLocaleString(),
//         completed: false
//     };
    // push method for inserting/ placing new items in the array of objects
    // items.push(newTask);
    // setItem method used to add key and their values to the local storage (key=name and value=Item name)
    // setItems(items);
// }


// function for updating item properties
// function update(item, key, value) {
//     item[key] = value;
//     setItems(items);
// }

// function 
// function displayTasks() {
//     let output = document.querySelector('[data-output]');
//     output.innerHTML = ""; // Clear previous content

//     items.forEach(task => {
//         let taskElement = document.createElement('div');
//         taskElement.innerHTML = `
//             <input type="checkbox" ${task.completed ? 'checked' : ''} 
//                 onchange="update(items.find(t => t.id === ${task.id}), 'completed', this.checked)">
//             <span>${task.name}</span>
//         `;
//         output.appendChild(taskElement);
//     });
// }

// displayTasks(); // Display initial tasks

// let btn2 = document.querySelector('[data-btn2]');
// btn2.addEventListener('click', function () {
//     let input = document.querySelector('[data-item]').value;
//     if (input.trim() !== "") {
//         addItem(input);
//         displayTasks();
//     }
// });