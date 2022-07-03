// declare formEl and save as memory to save-task
var formEl = document.querySelector("#task-form");
// declare tasksToDoEl and save as memory to tasks-to-do
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.append(listItemEl);
};

// button func -> click then call func
formEl.addEventListener("click", createTaskHandler);