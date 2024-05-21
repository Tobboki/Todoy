// Tasks Storage
export const tasks = [{
  'id': '1',
  'title': 'Title',
  'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ab. Dignissimos repellat, sapiente eos perferendis vitae reiciendis recusandae omnis illo excepturi ea quidem ipsum iste? Temporibus culpa dolores nostrum doloremque.',
  'creationDate': '17/4/2022',
  'isDone': false
}, {
  'id': '2',
  'title': 'Title',
  'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ab. Dignissimos repellat, sapiente eos perferendis vitae reiciendis recusandae omnis illo excepturi ea quidem ipsum iste? Temporibus culpa dolores nostrum doloremque.',
  'creationDate': '17/4/2022',
  'isDone': false
}, {
  'id': '3',
  'title': 'Title',
  'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ab. Dignissimos repellat, sapiente eos perferendis vitae reiciendis recusandae omnis illo excepturi ea quidem ipsum iste? Temporibus culpa dolores nostrum doloremque.',
  'creationDate': '17/4/2022',
  'isDone': false
}, {
  'id': '4',
  'title': 'Title',
  'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ab. Dignissimos repellat, sapiente eos perferendis vitae reiciendis recusandae omnis illo excepturi ea quidem ipsum iste? Temporibus culpa dolores nostrum doloremque.',
  'creationDate': '17/4/2022',
  'isDone': false
}];

// Rendering tasks
function generateTaskCardHTML(taskId, taskTitle, taskDescription, taskCreationDate){
  let taskCardHTML = `
      <div class="task-card" data-task-id="${taskId}">

        <!-- Task Card Header-->
        <div class="task-card-header">
          <h3 class="task-title">${taskTitle}</h3>

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
          <p class="task-description">${taskDescription}</p>
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

  return taskCardHTML;
}

export function renderTasks() {
  const taskFrame = document.getElementById('task-frame');
  taskFrame.innerHTML = '';

  tasks.forEach(task => {
      let taskCardHTML = generateTaskCardHTML(task.id, task.title, task.description, task.creationDate);

      taskFrame.insertAdjacentHTML('beforeend', taskCardHTML);

      const taskOptionsButton = document.querySelector(`[data-task-option-button-id='${task.id}']`);
      taskOptionsButton.addEventListener('click', () => {
        toggleTaskOptionsDropdown(`task-options-dropdown-content-${task.id}`);
      });

      const dropdownDeleteButton = document.getElementById(`task-remove-button-${task.id}`);
      dropdownDeleteButton.addEventListener('click', () => {
        removeTask(task.id);
      });
  });
};

export function addTask() {
  const taskInfo = getTaskInfo();

  if (taskInfo !== null){
    const { taskTitle, taskDescription } = taskInfo;
    const newTaskId = (tasks.length + 1).toString();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day}/${month}/${year}`;

    tasks.push({
        "id": newTaskId,
        "title": taskTitle,
        "description": taskDescription,
        "creationDate": formattedDate,
        "isDone": false
    });

    const newTaskHTML = generateTaskCardHTML(newTaskId, taskTitle, taskDescription, formattedDate);

    const taskFrame = document.querySelector('.task-frame');
    taskFrame.insertAdjacentHTML('beforeend', newTaskHTML);

    const taskOptionsButton = document.querySelector(`[data-task-option-button-id='${newTaskId}']`);
      taskOptionsButton.addEventListener('click', () => {
        toggleTaskOptionsDropdown(`task-options-dropdown-content-${newTaskId}`);
      });

      const dropdownDeleteButton = document.getElementById(`task-remove-button-${newTaskId}`);
      dropdownDeleteButton.addEventListener('click', () => {
        removeTask(newTaskId);
      });

    closeTaskDialogue();

  }
  
};

// this fn removes the task using its task id
export function removeTask(taskId) {

  // Find the index of the task with the specified id
  const index = tasks.findIndex(task => task.id === taskId);

  // Check if the task with the specified id exists
  if (index !== -1) {
    // Remove the task from the array
    tasks.splice(index, 1);
    // Remove the task from the DOM
    const taskElement = document.querySelector(`[data-task-id='${taskId}']`);
    if (taskElement) {
      taskElement.remove();
    }
  } else {
    console.error(`Task with id='${taskId}' not found.`);
  }
}

// *task options dropdown section*

export function toggleTaskOptionsDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  dropdown.classList.toggle('dropdown-content-show');
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

// *Task dialogue section*
export const taskDialogue = document.getElementById('task-dialogue');

export function openTaskDialogue() {
  taskDialogue.showModal();
};

export function closeTaskDialogue() {
  const taskDescriptionCharLimit = 255;
  const taskDescriptionCharCounter = document.getElementById('description-input-char-counter');
  taskDescriptionCharCounter.textContent = 0 + "/" + taskDescriptionCharLimit;
  taskDialogue.close();
};

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

} ;

//add button functionality
document.getElementById('task-dialogue-add-button').addEventListener('click', function() {
  addTask();
});

//cancel button functionality
document.getElementById('task-dialogue-cancel-button').addEventListener('click', function() {
  closeTaskDialogue();
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
    closeTaskDialogue();
  }
});

// task description input char limit
const taskDescriptionCharLimit = 255;
const taskDescriptionCharCounter = document.getElementById('description-input-char-counter');
taskDescriptionCharCounter.textContent = 0 + "/" + taskDescriptionCharLimit;

const taskDescriptionInput = document.getElementById('dialogue-task-description-input');
taskDescriptionInput.addEventListener('input', () => {
  let textLength = taskDescriptionInput.value.length;
  taskDescriptionCharCounter.textContent = textLength + "/" + taskDescriptionCharLimit;

  if (textLength > taskDescriptionCharLimit) {
    taskDescriptionInput.style.borderColor = "#e72f41";
    taskDescriptionCharCounter.style.color = "#e72f41";
  }
});