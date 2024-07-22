import { renderTasks} from "./taskFrame.js";
import { openTaskDialogue } from "./taskDialogue.js";

// *create button functionality*
document.getElementById('create-task-button').addEventListener('click', () => {
  openTaskDialogue('add');
});

// *task frame section*
renderTasks();
