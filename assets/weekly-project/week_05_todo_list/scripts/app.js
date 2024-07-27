document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(todoInput.value);
        todoInput.value = '';
    });

    function addTask(task) {
        const listItem = document.createElement('li');
        
        const taskText = document.createElement('span');
        taskText.textContent = task;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        
        todoList.appendChild(listItem);
    }
});
