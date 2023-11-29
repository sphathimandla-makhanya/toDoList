// function to take in a single item as an input and returns it.
function toDoList (id, name, createdDate, completed){
    this.id=id,
    this.name=name,
    this.createdDate=createdDate,
    this.completed=completed
}

// declaring an array variable to push the objects inside 

let array =[]

function thingsToDo(id, name, createdDate, completed) {
    let task = new toDoList(id, name, createdDate, completed);
    return array.push(task)
}


thingsToDo('5', 'siya', '200','yes');
console.log(array);

// 
let input = document.querySelector('[data-item]')

let output = document.querySelector('[data-output]')


// Declaring sort button as a variable btn1 
// adding an event listner to btn1  
// let btn1 = document.querySelector('[data-btn1]')
// btn1.addEventListener('click', function) //write function

// Declaring add button as a variable btn2 
// adding an event listner to btn1  
let btn2 = document.querySelector('[data-btn2]')
btn2.addEventListener('click', function(){
    let input = document.querySelector('[data-item]').value
    output.textContent=name(input)
}) //write function









































































