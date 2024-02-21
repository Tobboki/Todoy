$(document).ready(function() {
  $('#create-button').on('click', function (){
    $('#task-dialogue').addClass('active');
    $('#overlay').addClass('active');
  });
});

$(document).ready(function() {
  $('#add-button').on('click', function (){
    $('#task-dialogue').removeClass('active');
    $('#overlay').removeClass('active');
  });
});

$(document).ready(function() {
  $('#cancel-button').on('click', function (){
    $('#task-dialogue').removeClass('active');
    $('#overlay').removeClass('active');
  });
});