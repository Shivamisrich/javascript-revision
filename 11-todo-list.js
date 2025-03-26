const todoList =['my name', 'your name'];

renderTodoList();

function renderTodoList() {
    

let todoListHtml = '';


for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];  //get each todo store it in the variable
    const html = `<p> ${todo} </p>`//genrrate <p> for each todo store it in variable
    todoListHtml += html; //ek ke bad ek add krte jao 
    
}
console.log(todoListHtml);

document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();

}


