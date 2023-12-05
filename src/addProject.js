import { createProject } from "./createProject";
const projectsDropDown = document.getElementById("projectId");
console.log(projectsDropDown);

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

addProject().projectsArray.forEach((project) => {
  let option = document.createElement("option");
  option.setAttribute("value", project.id);
  console.log(option);

  let optionText = document.createTextNode(project.name);
  option.appendChild(optionText);

  projectsDropDown.appendChild(option);
});

console.log(addProject().projectsArray);

export { addProject };
