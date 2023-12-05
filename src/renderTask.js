import { createTask } from "./createTask";
import { addTask } from "./addTask";
const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const dueDate = document.getElementById("dueDate");
const projectId = document.getElementById("projectId");
const submitButton = document.getElementById("submitButton");
const defaultTaskList = document.getElementById("defaultTaskList");
const taskArray = addTask().taskList;

function renderTask(task) {
  const taskContainer = document.createElement("div");
  const taskName = document.createElement("p");
  const taskDescription = document.createElement("p");
  const dueDate = document.createElement("p");

  taskContainer.className = "task-container";
  taskContainer.classList.add(`${task.id}`);

  taskName.textContent = task.name;
  taskDescription.textContent = task.description;
  dueDate.textContent = task.dueDate;

  defaultTaskList.appendChild(taskContainer);
  taskContainer.appendChild(taskName);
  taskContainer.appendChild(taskDescription);
  taskContainer.appendChild(dueDate);
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const name = taskName.value;
  const description = taskDescription.value;
  const date = dueDate.value;
  const project =
    projectId.value === "" ? projectId.value : parseFloat(projectId.value);

  var newTask = createTask(name, description, date, project);
  addTask(newTask);
  renderTask(newTask);
  taskForm.reset();
});

export { renderTask };
