let id = 0;
function createTask(name, description, dueDate, projectId = null) {
  id++;
  return { id, name, description, dueDate, projectId };
}

export { createTask };
