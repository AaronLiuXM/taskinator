// declare buttonEL and save as memory to save-task
var buttonEl = document.querySelector("#save-task");
// declare tasksToDoEl and save as memory to tasks-to-do
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    // declare listItemEl create <"li">
    var listItemEl = document.createElement("li");
    // match style as task-item
    listItemEl.className = "task-item";
    // add text content in new <li>
    listItemEl.textContent = "This is a new task.";
    // append to listItemEl as a child node
    tasksToDoEl.appendChild(listItemEl);
}

// button func -> click then call func
buttonEl.addEventListener("click", createTaskHandler);