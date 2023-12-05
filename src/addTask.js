import { addProject } from "./addProject";

let taskList = [];
let projectList = [];

function addTask(task) {
  if (
    task !== undefined &&
    (task.projectId === "" || task.projectId === null)
  ) {
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

export { addTask };
