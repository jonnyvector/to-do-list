import { createTask } from "./createTask";
import { addTask } from "./addTask";
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const dueDate = document.getElementById("dueDate");
const projectId = document.getElementById("projectId");
const submitButton = document.getElementById("submitButton");

function renderTask() {
  const name = taskName.value;
  const description = taskDescription.value;
  const date = dueDate.value;
  const project = projectId.value;

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    var newTask = createTask(name, description, date, project);
    addTask(newTask);
  });
}

renderTask();

export { renderTask };
