let tasks = [];
// use array to stote all the tasks, to store data
tasks.push('eat');
tasks.push('drink');
// this is not reassigning, I am just mutating or changing my array value
tasks =[];
console.log(tasks);
// Dom nodes --> input and addBtn

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');

console.log (input, addBtn);

// adding event listeners do that out buttons actually function
addBtn.addEventListener('click', function(){
  const newTask = input.ariaValueMax.trim();
  if (newTask !== ""){
    tasks.push(newTask);
    console.log(tasks);
    input.value = '';
  }
}
)