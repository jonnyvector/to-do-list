import { createTask } from "./createTask";
import { addTask } from "./addTask";
import { createProject } from "./createProject";
import { addProject } from "./addProject";
import { addTaskToProject } from "./addTaskToProject";

const newTask = createTask(
  "Build a Rocket",
  "We're building a rocket with our bare hands",
  "12/25/23"
);
const newerTask = createTask(
  "Snowball Fight",
  "We're having a snowball fight",
  "12/30/23"
);
