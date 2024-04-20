//importing modules
import { addTask, renderTasks, toggleTaskOptionsDropdown, taskDialogue, openDialogue, closeDialogue } from "./data/tasks.js";

//task frame section
renderTasks();

//create button functionality
document.getElementById('create-task-button').addEventListener('click', function() {
  openDialogue();
});

//add button functionality
document.getElementById('add-button').addEventListener('click', function() {
  closeDialogue();
  addTask();
});

//cancel button functionality
document.getElementById('cancel-button').addEventListener('click', function() {
  closeDialogue();
});

// task options button functionality
const taskOptionsButtons = document.querySelectorAll('.task-options-button'); // corrected selector
taskOptionsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dropdownId = button.nextElementSibling.id;
    toggleTaskOptionsDropdown(dropdownId);
  });
});

//close taskDialogue when clicked outside of it (overlay effect)
taskDialogue.addEventListener("click", e => {
  const dialogDimensions = taskDialogue.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    closeDialogue();
  }
});