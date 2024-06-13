import { loadTasksFromStorage, saveTasksToStorage } from "../../data/tasks.js";
import { openTaskDialogue, closeTaskDialogue, getTaskInfo } from "./taskDialogue.js";
import { formatDate } from "../helpers/formatDate.js";
// Tasks Storage
let tasks = loadTasksFromStorage();

// * Task CRUD Functions *

// fn to generate the task card HTML and return as string
function generateTaskCardHTML(taskId, taskTitle, taskDescription, taskCreationDate){
  return `
        <div class="task-card" data-task-id="${taskId}">

          <!-- Task Card Header-->
          <div class="task-card-header">
            <h3 class="task-card-title" id="task-title-${taskId}">${taskTitle}</h3>

            <div class="task-options-dropdown">
              <button class="task-options-button" id="task-options-button" data-task-option-button-id="${taskId}" type="button">&ctdot;</button>

              <div class="task-options-dropdown-content" id="task-options-dropdown-content-${taskId}">

                <button class="task-edit-button" id="task-edit-button-${taskId}" type="button">
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                  Edit..
                </button>

                <button class="task-remove-button" id="task-remove-button-${taskId}" type="button">
                  <span class="material-symbols-outlined">
                    delete_forever
                  </span>
                  Delete
                </button>

              </div>
            </div>
          </div>

          <!-- Task Card Body -->
          <div class="task-card-body">
            <p class="task-description" id="task-description-${taskId}">${taskDescription}</p>
          </div>

          <!-- Task Card Footer -->
          <div class="task-card-footer">
            <div class="task-checkbox-wrapper">
              <input class="task-checkbox-input" id="task-checkbox-input-${taskId}" type="checkbox" name="task-done" value="done">
              <label class="task-checkbox-label" for="task-checkbox-input-${taskId}">Done</label>
            </div>
            <span class="task-create-section">
              <span class="material-symbols-outlined">calendar_month</span>
              <time datetime="${taskCreationDate}" class="task-create-date">${taskCreationDate}</time>
            </span>
          </div>

        </div>
        `;
}

// fn to render tasks on the page
export function renderTasks() {
  const taskFrame = document.getElementById('task-frame');
  taskFrame.innerHTML = '';

  tasks.forEach(task => {
      // defining the task card HTML for every task in storage
      let taskCardHTML = generateTaskCardHTML(task.id, task.title, task.description, task.creationDate);

      // inserting the defined task card HTML into the page
      taskFrame.insertAdjacentHTML('beforeend', taskCardHTML);

      // add dropdown section listeners
      addTaskEventListeners(task.id);
  });
};

// fn to add new tasks
export function addTask() {
  const taskInfo = getTaskInfo();

  if (taskInfo !== null){
    // collect the new task info
    const { taskTitle, taskDescription } = taskInfo;
    const newTaskId = (tasks.length + 1).toString();
    const taskCreationDate = formatDate();

    // create a new task object and append it to the tasks array
    tasks.push({
        "id": newTaskId,
        "title": taskTitle,
        "description": taskDescription,
        "creationDate": taskCreationDate,
        "isDone": false
    });

    const newTaskHTML = generateTaskCardHTML(newTaskId, taskTitle, taskDescription, taskCreationDate);

    const taskFrame = document.querySelector('.task-frame');
    taskFrame.insertAdjacentHTML('beforeend', newTaskHTML);

    // add dropdown section listeners
    addTaskEventListeners(newTaskId);

    // close the task dialogue
    closeTaskDialogue();

    // save the tasks array that include the new array into localStorage
    saveTasksToStorage();
  }
  
};

// this fn edits a task using its task id
export function editTask(taskId){
  const taskInfo = getTaskInfo();

  if (taskInfo !== null){
    const { taskTitle, taskDescription } = taskInfo;

    // Find the index of the task with the specified id
    const taskIndex = tasks.findIndex(task => taskId === task.id);

    // Check if the task with the specified id exists
    if (taskIndex !== -1) {
      // edit the task object in the array
      const selectedTask = tasks[taskIndex];
      selectedTask.title = taskTitle;
      selectedTask.description = taskDescription;
      
      // replaced the selected task with new generated task on the DOM
      const taskElement = document.querySelector(`[data-task-id='${taskId}']`);
      if (taskElement) {
        const editedTaskElement = generateTaskCardHTML(selectedTask.id, selectedTask.title, selectedTask.description, selectedTask.creationDate);
        taskElement.outerHTML = editedTaskElement;
        
        // add dropdown section listeners
        addTaskEventListeners(taskId);
      }
      
      // save the new tasks object to storage
      saveTasksToStorage();

      // close the task dialogue
      closeTaskDialogue();
    } else { 
      // an err msg just in case (it theoretically should never work)
      console.error(`Task with id='${taskId}' not found.`);
    }
  }

}

// this fn removes a task using its task id
function removeTask(taskId) {

  // Find the index of the task with the specified id
  const taskIndex = tasks.findIndex(task => taskId === task.id);

  // Check if the task with the specified id exists
  if (taskIndex !== -1) {
    // Remove the task from the array
    tasks.splice(taskIndex, 1);

    // save the new tasks object to storage
    saveTasksToStorage();

    // Remove the task from the DOM
    const taskElement = document.querySelector(`[data-task-id='${taskId}']`);
    if (taskElement) {
      taskElement.remove();
    }
  } else {
    console.error(`Task with id='${taskId}' not found.`);
  }
}

// * Task Card Event Handlers and UI Interactions *


// fn to toggle task card dropdown menu display
function toggleTaskOptionsDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  dropdown.classList.toggle('dropdown-content-show');
};

// fn to toggle task card title & description crossed when checkbox Done is changed
function toggleCrossedText(taskId) {
  const checkbox = document.getElementById(`task-checkbox-input-${taskId}`);
  const title = document.getElementById(`task-title-${taskId}`);
  const description = document.getElementById(`task-description-${taskId}`);

  if (checkbox.checked) {
    title.classList.add('crossed-text');
    description.classList.add('crossed-text');
  } else {
    title.classList.remove('crossed-text');
    description.classList.remove('crossed-text');
  }
};

// fn to add task card events listeners
function addTaskEventListeners(taskId){
  // task options button event 'click' listener
  const taskOptionsButton = document.querySelector(`[data-task-option-button-id='${taskId}']`);
  taskOptionsButton.addEventListener('click', () => {
    toggleTaskOptionsDropdown(`task-options-dropdown-content-${taskId}`);
  });

  // task options edit button event 'click' listener
  const dropdownEditButton = document.getElementById(`task-edit-button-${taskId}`);
  dropdownEditButton.addEventListener('click', () => {
    toggleTaskOptionsDropdown(`task-options-dropdown-content-${taskId}`);
    openTaskDialogue('edit', taskId);
    editTask(taskId);
  });

  // task options delete button event 'click' listener
  const dropdownDeleteButton = document.getElementById(`task-remove-button-${taskId}`);
  dropdownDeleteButton.addEventListener('click', () => {
    removeTask(taskId);
  });

  // task checkbox event 'change' listener
  const checkbox = document.getElementById(`task-checkbox-input-${taskId}`);
  checkbox.addEventListener('change', () => toggleCrossedText(taskId));
};

// !Under Construction: overlay effect for dropdown menu
// const taskOptionsDropdowns = document.querySelectorAll('.task-options-dropdown-content');
// taskOptionsDropdowns.forEach(dropdown => {
//   dropdown.addEventListener("click", e => {
//     const taskOptionsDropdownsDimensions = taskOptionsDropdowns.getBoundingClientRect()
//     if (
//       e.clientX < taskFrameDimensions.left ||
//       e.clientX > taskFrameDimensions.right ||
//       e.clientY < taskFrameDimensions.top ||
//       e.clientY > taskFrameDimensions.bottom
//     ) {
//       const dropdownId = document.querySelector('.dropdown-content-show')
//       toggleTaskOptionsDropdown(dropdownId);
//     }
//   });
// });