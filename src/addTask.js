import { addProject } from "./addProject";
import { createTask } from "./createTask";

const beanTask = createTask("eat beans", "eat a bowl of beans", "12/23/23");
const shopifyTask = createTask(
  "Shopify code",
  "make some new shopify code",
  "12/23/23"
);
const projectTask = createTask(
  "Shopify code",
  "make some new shopify code",
  "12/23/23",
  5
);

console.log(beanTask);
console.log(shopifyTask);
console.log(projectTask);

let taskList = [];
let projectList = [];

console.log(addProject().projectsArray);

function addTask(task) {
  if (task !== undefined && task.projectId === null) {
    taskList.push(task);
  }

  if (task !== undefined && task.projectId !== null) {
    addProject().projectsArray.forEach((project) => {
      if (task.projectId === project.id) {
        project.taskArray.push(task);
      }
    });
  }

  return { taskList, projectList };
}

addTask(shopifyTask);
addTask(beanTask);
addTask(projectTask);

console.log(addTask().taskList);
console.log(addTask().projectList);

export { addTask };
