let id = 0;
function createTask(
  name,
  description,
  dueDate,
  priority = "no",
  projectId = null
) {
  id++;
  return { id, name, description, dueDate, priority, projectId };
}

export { createTask };
