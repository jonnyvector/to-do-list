import { createTask } from "./createTask";
import { addTask } from "./addTask";
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const dueDate = document.getElementById("dueDate");
const projectId = document.getElementById("projectId");
const submitButton = document.getElementById("submitButton");

function renderTask() {
  submitButton.addEventListener("click", function (e) {
    const name = taskName.value;
    const description = taskDescription.value;
    const date = dueDate.value;
    const project =
      projectId.value === "" ? projectId.value : parseFloat(projectId.value);

    e.preventDefault();

    var newTask = createTask(name, description, date, project);
    console.log(newTask);
    addTask(newTask);
    console.log(addTask().taskList);
    console.log(addTask().projectList);
  });
}

renderTask();

export { renderTask };
