"use strict";

const todoList = [];

renderTodoList();

function addTodo() {
  let todoName = document.querySelector(".todo-name").value;

  todoList.push(todoName);
  console.log(todoList);

  document.querySelector(".todo-name").value = "";

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = ``;

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todolist").innerHTML = todoListHTML;
}

function handleTodoKeydown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
