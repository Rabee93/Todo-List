const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addeventListener('click',addTodo)

function addTodo(event){
  event.preventDefault();
}
