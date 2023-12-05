let id = 0;

function createProject(name) {
  let taskArray = [];
  id++;
  return { id, name, taskArray };
}

export { createProject };
