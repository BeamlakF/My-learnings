const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
// first we call the html elements by using the DOM tree structure
// document
//  └── input (id="taskInput") → has property .value
//  └── button (id="addBtn") → has method .addEventListener()
//  └── ul (id="taskList") → can hold <li> items

addBtn.addEventListener('click', function(){
  const taskText = input.value.trim();
  if (taskText !== ''){
    console.log("Task can not be empty");
    return;

  }

  const li = document.createElement('li');
  li.textContent = taskText;
  list.appendChild(li);
  // DOM Method-Adds the new <li> into the <ul>
  input.value = ''; //Clears the input field after adding

  console.log (" you typed in:" + taskText);
});
// When this button is clicked, please call back this function.
// function () {
//   console.log("Button was clicked!");
// } is called a callback function — a function that will be executed later by the browser when the event occurs.


