import { addProject } from "./addProject";
import { createTask } from "./createTask";

const beanTask = createTask("eat beans", "eat a bowl of beans", "12/23/23", 5);
const shopifyTask = createTask(
  "Shopify code",
  "make some new shopify code",
  "12/23/23",
  4
);

// console.log(addProject().projectList);

let taskList = [];
let eatAnApple = [];

function addTask(task) {
  let projectId = task.projectId;

  if (task !== undefined && projectId === null) {
    taskList.push(task);
  }
  if (task !== undefined && projectId !== null) {
    addProject().projectsArray.forEach((project) => {
      if (task.id === project.id) {
        project.taskArray.push(task);
      }
    });
  }

  return { taskList };
}

addTask(beanTask);
addTask(shopifyTask);

export { addTask };
