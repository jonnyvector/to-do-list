import { createProject } from "./createProject";

let projectList = [];

function addProject(project) {
  if (project !== undefined) {
    projectList.push(project);
  }

  return { projectList };
}

const shopify = createProject("Shopify");
const beans = createProject("Beans");

addProject(shopify);
addProject(beans);

// console.log(projectList);

export { addProject };
