let tasks;

export function loadTasksFromStorage(){
 tasks = JSON.parse(localStorage.getItem('tasks'));

  if (!tasks){
    tasks = [{
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
  };

  return tasks;
};

export function saveTasksToStorage(){
  localStorage.setItem('tasks',JSON.stringify(tasks));
};
