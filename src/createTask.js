let id = 0;
function createTask(name, description, dueDate, projectId = null) {
  id++;
  return { id, name, description, dueDate, projectId };
}

const newTask = createTask("store build", "build a store", "12/23/23");
const shopifyTask = createTask("store build", "build a store", "12/23/23", 4);

console.log(newTask);
console.log(shopifyTask);

export { createTask };
