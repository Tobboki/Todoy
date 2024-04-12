// task create and edit section
const taskDialogue = document.getElementById('task-dialogue');

function openDialogue() {
  taskDialogue.showModal();
}

function closeDialogue() {
  taskDialogue.close();
}

//create button functionality
document.getElementById('create-task-button').addEventListener('click', function() {
  openDialogue();
});

//add button functionality
document.getElementById('add-button').addEventListener('click', function() {
  closeDialogue();
});

//cancel button functionality
document.getElementById('cancel-button').addEventListener('click', function() {
  closeDialogue();
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
})