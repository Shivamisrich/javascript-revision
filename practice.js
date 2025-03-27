const todoList = [];


const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


if (localStorage.getItem('darkMode') === 'enabled') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', null);
    }
});


renderTodoList();

function renderTodoList() {
    let innerHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]; 
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        
        const html = `
        <div class="todo-item" id="todo-${i}">
            <div class="todo-content">
                <div>${name}</div>
                <div class="todo-date">Due: ${duedate}</div>
            </div>
            <button onclick="deleteTodo(${i})" class="delete-todo-button">Delete</button> 
        </div>
        `;
        innerHTML = innerHTML + html;
    }
    document.querySelector('.js-todo-list').innerHTML = innerHTML;
}

function deleteTodo(index) {
    const todoElement = document.getElementById(`todo-${index}`);
    
  
    todoElement.classList.add('deleting');
    
    
    setTimeout(() => {
        todoList.splice(index, 1);
        renderTodoList();
    }, 300); 
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-date-input');
    const duedate = dateInputElement.value;
    
    if (name.trim() !== '') {
        todoList.push({
            name: name,
            duedate: duedate
        });
        
        
        inputElement.value = '';
        dateInputElement.value = '';
        
        renderTodoList();
    }
}
   

   
