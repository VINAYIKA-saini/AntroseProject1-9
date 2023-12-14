let tasks = [];
let taskHistory = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDateTime = document.getElementById('taskDateTime');

  const task = {
    name: taskInput.value,
    dateTime: new Date(taskDateTime.value).toLocaleString(),
    completed: false
  };

  tasks.push(task);
  displayTasks();
  setAlarm(taskDateTime.value, task.name);
  taskInput.value = '';
  taskDateTime.value = '';
}

function displayTasks() {
  const tasksDiv = document.getElementById('tasks');
  tasksDiv.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.textContent = `${task.name} - ${task.dateTime}`;
    
    if (!task.completed) {
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.onclick = function() {
        completeTask(index);
      };
      taskElement.appendChild(completeButton);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        editTask(index);
      };
      taskElement.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        deleteTask(index);
      };
      taskElement.appendChild(deleteButton);
    }

    tasksDiv.appendChild(taskElement);
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  taskHistory.push(tasks[index]);
  tasks.splice(index, 1);
  displayTasks();
  displayTaskHistory();
}

function editTask(index) {
  const newName = prompt('Enter new task name:');
  if (newName !== null && newName !== '') {
    tasks[index].name = newName;
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function deleteAllTasks() {
  tasks = [];
  displayTasks();
}

function displayDateTime() {
  const currentDateTime = new Date().toLocaleString();
  document.getElementById('currentDateTime').textContent = `Current Date & Time: ${currentDateTime}`;
}

function setAlarm(dateTime, taskName) {
  const taskDateTime = new Date(dateTime);
  const currentTime = new Date();

  if (taskDateTime > currentTime) {
    const timeDifference = taskDateTime - currentTime;
    setTimeout(() => {
      alert(`Task "${taskName}" is starting now!`);
      playAudio(); // Play audio when the task starts
    }, timeDifference);
  }
}

function playAudio() {
  const audio = document.getElementById('audio');
  audio.play();
}

function displayTaskHistory() {
  const taskHistoryDiv = document.getElementById('taskHistory');
  taskHistoryDiv.innerHTML = '<h2>Task History</h2>';
  taskHistory.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.textContent = `${task.name} - ${task.dateTime}`;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
      markTaskIncomplete(index);
    };
    taskElement.appendChild(completeButton);

    taskHistoryDiv.appendChild(taskElement);
  });
}

function markTaskIncomplete(index) {
  taskHistory[index].completed = false;
  tasks.push(taskHistory[index]);
  taskHistory.splice(index, 1);
  displayTasks();
  displayTaskHistory();
}

setInterval(displayDateTime, 1000);
displayDateTime();
