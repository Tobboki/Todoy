$(document).ready(function() {
  const taskDialogue = $('#task-dialogue');
  const overlay = $('#overlay');

  function openDialogue() {
    taskDialogue.addClass('active');
    overlay.addClass('active');
  }

  function closeDialogue() {
    taskDialogue.removeClass('active');
    overlay.removeClass('active');
  }

  $('#create-button').on('click', function() {
    openDialogue();
  });

  $('#add-button').on('click', function() {
    closeDialogue();
  });

  $('#cancel-button, #overlay').on('click', function() {
    closeDialogue();
  });
});
