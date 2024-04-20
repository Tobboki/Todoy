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

export function toggleTaskOptionsDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  dropdown.classList.toggle('dropdown-content-show');
};

// document.addEventListener('click', e => {
//   const dropdown = document.getElementById('task-options-dropdown-content');
//   if (!e.target.closest('.task-options-dropdown') && !e.target.matches('.task-options-button')) {
//     dropdown.classList.remove('dropdown-content-show');
//   }
// });

export function renderTasks() {
  const taskFrame = document.getElementById('task-frame');
  taskFrame.innerHTML = '';

  tasks.forEach(task => {
      let taskHTML = `
      <!-- Task Card -->
      <div class="task-card">

        <!-- Task Card Header-->
        <div class="task-card-header">
          <h3 class="task-title">${task.title}</h3>

          <div class="task-options-dropdown">
            <button class="task-options-button" id="task-options-button" type="button">&ctdot;</button> <!-- 3 centered ellipsis unicode icon for editing -->

            <div class="task-options-dropdown-content" id="task-options-dropdown-content-${task.id}">

              <button class="task-edit-button" id="task-edit-button-${task.id}" type="button">
                <span class="material-symbols-outlined">
                  edit
                </span>
                Edit..
              </button>

              <button class="task-remove-button" id="task-remove-button-${task.id}" type="button">
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
          <p class="task-description">${task.description}</p>
        </div>

        <!-- Task Card Footer -->
        <div class="task-card-footer">
          <div class="task-checkbox-wrapper">
            <input class="task-checkbox-input" id="task-checkbox-input-${task.id}" type="checkbox" name="task-done" value="done">
            <label class="task-checkbox-label" for="task-checkbox-input-${task.id}">Done</label>
          </div>
          <span class="task-create-section">
            <span class="material-symbols-outlined">calendar_month</span>
            <time datetime="datetime" class="task-create-date">${task.creationDate}</time>
          </span>
        </div>

      </div>
      `;

      taskFrame.innerHTML += taskHTML;
  });
};

export function addTask() {
  const newTaskId = tasks.length + 1; // Generate a unique ID for the new task
  const { taskTitle, taskDescription } = getTaskInfo();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${day}/${month}/${year}`; //task creation date

  tasks.push({
      "id": newTaskId.toString(),
      "title": taskTitle,
      "description": taskDescription,
      "creationDate": formattedDate,
      "isDone": false
  });

  renderTasks();
};

export function removeTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);

  renderTasks();
};

// Task dialogue section
export const taskDialogue = document.getElementById('task-dialogue');

export function openDialogue() {
  taskDialogue.showModal();
};

export function closeDialogue() {
  taskDialogue.close();
};

export function getTaskInfo(){
  taskTitle = document.getElementById('dialogue-task-title-input').value();
  taskDescription = document.getElementById('dialogue-task-description-input').value();

  return taskTitle, taskDescription;
} ;