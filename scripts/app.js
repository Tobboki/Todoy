import { renderTasks, openTaskDialogue } from "./taskFrame.js";

// *create button functionality*
document.getElementById('create-task-button').addEventListener('click', function() {
  openTaskDialogue();
});

// *task frame section*
renderTasks();
