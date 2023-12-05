import { createTask } from "./createTask";
import { addTask } from "./addTask";
const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const dueDate = document.getElementById("dueDate");
const projectId = document.getElementById("projectId");
const submitButton = document.getElementById("submitButton");

function renderTask() {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    let name = taskName.value;
    let description = taskDescription.value;
    let date = dueDate.value;
    let project =
      projectId.value === "" ? projectId.value : parseFloat(projectId.value);

    var newTask = createTask(name, description, date, project);

    addTask(newTask);
    taskForm.reset();
  });
}

renderTask();

export { renderTask };
