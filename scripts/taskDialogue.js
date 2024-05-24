import { addTask, editTask } from "./taskFrame.js";

// constant used variables
const taskDialogue = document.getElementById('task-dialogue');
const taskDescriptionCharLimit = 255;

// fn to generate the task dialogue HTML depending on the mode
function parseTaskDialogue(mode){
  // defining the mode button: class & id name and text content
  let modeButtonTextContent
  let modeButtonClassId;
  if (mode == 'add') {
    modeButtonTextContent = 'Add';
    modeButtonClassId = 'add'
  } else if (mode == 'edit') {
    modeButtonTextContent = 'Save';
    modeButtonClassId = 'save';
  };

  // parsing the task dialogue HTML
  const taskDialogueHTML = `
    <div class="task-dialogue-header">
    <button id="task-dialogue-cancel-button" class="task-dialogue-cancel-button" type="button">Cancel</button>
    <button id="task-dialogue-${modeButtonClassId}-button" class="task-dialogue-${modeButtonClassId}-button" type="submit">${modeButtonTextContent}</button>
    </div>

    <form class="task-dialogue-body"><!-- //!fix action-->
        <label for="dialogue-task-title-input" class="dialogue-task-title-label">Title</label>
        <input id="dialogue-task-title-input" class="dialogue-task-title-input" type="text" placeholder="add a title..." autocomplete="off" required>
        <label for="dialogue-task-description-input" class="dialogue-task-description-label">Description</label>
        <textarea name="task-description" id="dialogue-task-description-input" class="dialogue-task-description-input" placeholder="add a description..." required></textarea>
        <span class="description-input-char-counter" id="description-input-char-counter"></span>
    </form>
    `;

    // appending the task dialogue HTML into the DOM
    taskDialogue.insertAdjacentHTML('beforeend', taskDialogueHTML);
}

// fn to display the task dialogue on the page
export function openTaskDialogue(mode, taskId = null) {
  // check if mode is handled
  if (mode == 'add') {
    parseTaskDialogue(mode);
    document.getElementById(`task-dialogue-add-button`).addEventListener('click', function() {
      addTask();
    });

  } else if (mode == 'edit') {
    parseTaskDialogue(mode);
    document.getElementById(`task-dialogue-save-button`).addEventListener('click', function() {
      editTask(taskId);
    });
    
  } else {
    console.log(`the mode you inserted ${mode} isn't handled and will lead to a fetal error`);
    return;

  }

  // display task dialogue modal
  taskDialogue.showModal();

  // cancel button functionality
  document.getElementById('task-dialogue-cancel-button').addEventListener('click', function() {
    closeTaskDialogue(mode);
  });

  // task description input char limit functionality
  const taskDescriptionCharCounter = document.getElementById('description-input-char-counter');
  taskDescriptionCharCounter.textContent = 0 + "/" + taskDescriptionCharLimit;

  // task description input char limit functionality
  const taskDescriptionInput = document.getElementById('dialogue-task-description-input');
  taskDescriptionInput.addEventListener('input', () => {
    let textLength = taskDescriptionInput.value.length;
    taskDescriptionCharCounter.textContent = textLength + "/" + taskDescriptionCharLimit;

    if (textLength > taskDescriptionCharLimit) {
      taskDescriptionInput.style.borderColor = "#e72f41";
      taskDescriptionCharCounter.style.color = "#e72f41";
    } else {
      taskDescriptionInput.style.borderColor = "#0b0c0d";
      taskDescriptionCharCounter.style.color = "#0b0c0d";
    }
  });

  // close taskDialogue when clicked outside of it (overlay effect)
  taskDialogue.addEventListener("click", e => {
    const dialogDimensions = taskDialogue.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeTaskDialogue(mode);
    }
  });
};

// fn to remove the task dialogue from the page
export function closeTaskDialogue(mode) {
  // remove the task dialogue
  taskDialogue.replaceChildren();
  // close task dialogue modal
  taskDialogue.close();
};

// this fn collects the task title and description from the task dialogue
export function getTaskInfo(){
  const taskTitleInput = document.getElementById('dialogue-task-title-input');
  const taskDescriptionInput = document.getElementById('dialogue-task-description-input');
  const taskTitle = taskTitleInput.value;
  const taskDescription = taskDescriptionInput.value;

  if (taskTitle !== '' && taskDescription.length < taskDescriptionCharLimit){
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    return {taskTitle, taskDescription};
  } else{
    return null;
  }
};