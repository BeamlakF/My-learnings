const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
// first we call the html elements by using the DOM tree structure
// document
//  └── input (id="taskInput") → has property .value
//  └── button (id="addBtn") → has method .addEventListener()
//  └── ul (id="taskList") → can hold <li> items

const li = document.createElement('li');

addBtn.addEventListener('click', function(){
  const taskText = input.value.trim();
  if (taskText === ''){
    console.log("Task can not be empty");
    return;

  }
  li.textContent = taskText;
  list.appendChild(li);
  // DOM Method-Adds the new <li> into the <ul>
  input.value = ''; //Clears the input field after adding

  console.log (" you typed in:" + taskText);
});

const doneBtn = document.createElement( 'donebtn');
doneBtn.textContent = 'Done';

const deleteBtn = document.createElement( 'deletebtn');
deleteBtn.textContent = 'Delete';


li.appendChild(doneBtn);
li.appendChild(deleteBtn);

list.appendChild(li);
input.value = '';

doneBtn.addEventListener('click', function(){
  li.style.textDecoration = 'line-through';})

deleteBtn.addEventListener('click', function(){
  list.removeChild(li);
})

// When this button is clicked, please call back this function.
// function () {
//   console.log("Button was clicked!");
// } is called a callback function — a function that will be executed later by the browser when the event occurs.


