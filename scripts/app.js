import { renderTasks} from "./taskFrame.js";
import { openTaskDialogue } from "./taskDialogue.js";

// *create button functionality*
document.getElementById('create-task-button').addEventListener('click', function() {
  openTaskDialogue('add');
});

// *task frame section*
renderTasks();
