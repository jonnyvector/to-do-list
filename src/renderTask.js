const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const dueDate = document.getElementById("dueDate");
const projectId = document.getElementById("projectId");
const submitButton = document.getElementById("submitButton");
import { createTask } from "./createTask";

function renderTask() {
  console.log(taskName);
  console.log(taskDescription);
  console.log(dueDate);
  console.log(projectId);
}

renderTask();

export { renderTask };
