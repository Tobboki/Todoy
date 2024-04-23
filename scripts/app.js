import { renderTasks, toggleTaskOptionsDropdown, openDialogue } from "./taskFrame.js";

//task frame section
renderTasks();

//create button functionality
document.getElementById('create-task-button').addEventListener('click', function() {
  openDialogue();
});

const taskOptionsButtons = document.querySelectorAll('.task-options-button');
taskOptionsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dropdownId = button.nextElementSibling.id;
    toggleTaskOptionsDropdown(dropdownId);
  });
});