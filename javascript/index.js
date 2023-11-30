   // array to contain item objects
   let items = [];

   // Factory function to generate object tasks/items
   function toDolist(name) {
       return {
           id: Date.now(),
           name,
           dateCreated: new Date().toLocaleString(),
           completed: false
       };
   }

   // Function to generate objects using the factory function object template
   function addItem(itemName) {
    // Declaring an object from the factory function object template
       let newItem = toDolist(itemName);
       // push method for inserting/ placing new items in the array of objects
       items.push(newItem);
       // setItem method used to add key and their values to the local storage (key=name and value=Item name)
       setItems(items);
   }

   // Function to update task properties
   function update(item, key, value) {
       item[key] = value;
       // Save the updated tasks to local storage
       setItems(items);
   }

   // Function to delete a task by ID
   function deleteTask(id) {
       // Filter out the task with the specified ID
       items = items.filter(task => task.id !== id);
       // Save the updated tasks to local storage
       setItems(items);
       // Display the updated tasks
       displayTasks();
   }

   // Function to display tasks in the output area
   function displayTasks() {
       let output = document.querySelector('[data-output]');
       output.innerHTML = ""; // Clear previous content

       // Iterate through each task and create HTML elements
       items.forEach(task => {
           let taskElement = document.createElement('div');
           taskElement.innerHTML = `
               <input type="checkbox" ${task.completed ? 'checked' : ''} 
                   onchange="update(items.find(t => t.id === ${task.id}), 'completed', this.checked)">
               <span>${task.name}</span>
               <!-- Button to delete the task -->
               <button onclick="deleteTask(${task.id})">Delete</button>
           `;
           // Append the task HTML elements to the output area
           output.appendChild(taskElement);
       });
   }

   // Function to get tasks from local storage
   function getItems() {
       let value = localStorage.getItem('todo-list') || '[]';
       return JSON.parse(value);
   }

   // Function to save tasks to local storage
   function setItems(items) {
       let itemsJson = JSON.stringify(items);
       localStorage.setItem('todo-list', itemsJson);
   }

   // Display initial tasks
   items = getItems();
   displayTasks();

   // Event listener for the "Add Task" button
   let btn2 = document.querySelector('[data-btn2]');
   btn2.addEventListener('click', function () {
       let input = document.querySelector('[data-item]').value;
       // Check if the input is not empty before adding a task
       if (input.trim() !== "") {
           // Add a new task, save, and display the updated tasks
           addItem(input);
           displayTasks();
       }
   });




































































