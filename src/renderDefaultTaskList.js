import { addTask } from "./addTask";

const defaultTaskList = document.getElementById("defaultTaskList");
const taskArray = addTask().taskList;

function renderDefaultTaskList(taskArray) {
  taskArray.forEach((task) => {
    console.log(task);
    const taskItem = document.createElement("p");
    taskItem.textContent = task.name;
    defaultTaskList.appendChild(taskItem);
    console.log(addTask().taskList);
  });
}

renderDefaultTaskList(taskArray);

export { renderDefaultTaskList };
