const todoList = [];
// renderTodoList();

function renderTodoList(params) {

let innerHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i]; 
    const html = `<p>${todo}</p>`;
    innerHTML = innerHTML + html;
    
}
document.querySelector('.js-todo-list').innerHTML = innerHTML;

}

function addTodo() {
   const inputElement = document.querySelector('.js-name-input')
   const name = inputElement.value;
   todoList.push(name);
   console.log(todoList);
   renderTodoList();
}
   

   
