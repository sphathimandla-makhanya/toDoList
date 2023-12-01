
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
