import { createProject } from "./createProject";
const projectsDropDown = document.getElementById("projectId");

let projectsArray = [];

function addProject(project) {
  if (project !== undefined) {
    projectsArray.push(project);
  }

  return { projectsArray };
}

const shopifyProject = createProject("Shopify");
const beanProject = createProject("Beans");
const magentoProject = createProject("Magento");

addProject(shopifyProject);
addProject(beanProject);
addProject(magentoProject);

addProject().projectsArray.forEach((project) => {
  let option = document.createElement("option");
  option.setAttribute("value", project.id);

  let optionText = document.createTextNode(project.name);
  option.appendChild(optionText);

  projectsDropDown.appendChild(option);
});

console.log(addProject().projectsArray);

export { addProject };
