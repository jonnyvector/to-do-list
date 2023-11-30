import { createTask } from "./createTask";
import { addTask } from "./addTask";

const newTask = createTask("build eggs", "i need to build an egg", "12/23/23");

let id = 0;

function createProject(name) {
  let projectArray = [];
  id++;
  return { id, name, projectArray };
}

createProject("Shopify");
createProject("Eggs");
createProject("Build a Bear");

export { createProject };
