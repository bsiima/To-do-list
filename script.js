// To-Do List Functionality
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function createTask(task) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = task;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn btn btn-danger btn-sm';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        createTask(task);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});

// Blog Functionality
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const savePostBtn = document.getElementById('save-post-btn');
const postList = document.getElementById('post-list');

function createPost(title, content) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<strong>${title}</strong><p>${content}</p>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn btn btn-danger btn-sm';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        postList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    postList.appendChild(li);
}

savePostBtn.addEventListener('click', () => {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();
    if (title && content) {
        createPost(title, content);
        postTitleInput.value = '';
        postContentInput.value = '';
    }
});
