import { createProject } from "./createProject";

let projectsArray = [];

function addProject(project) {
  if (project !== undefined) {
    projectsArray.push(project);
  }

  return { projectsArray };
}

const shopify = createProject("Shopify");
const beans = createProject("Beans");

addProject(shopify);
addProject(beans);

// console.log(projectList);

export { addProject };
