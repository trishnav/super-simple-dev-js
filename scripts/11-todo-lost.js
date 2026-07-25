"use strict";

const todoList = [];
function todoAddHTML() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const name = todoObj.name;
    const dueDate = todoObj.dueDate;
    const HTML = `
    <div>${name}</div> 
    <div>${dueDate}</div> 
    <button onclick="
    todoList.splice(${i},1);
    todoAddHTML();
    " class="delTodoBtn" >Delete</button>
    `;
    todoListHTML += HTML;
  }
  console.log(todoListHTML);

  document.querySelector(".js-name-input").innerHTML = todoListHTML;
}

function addTodo() {
  let name = document.querySelector(".input-todo-name").value;
  let dueDate = document.querySelector(".js-date-input").value;
  todoList.push({ name: name, dueDate: dueDate });
  console.log(todoList);

  document.querySelector(".input-todo-name").value = "";
  document.querySelector(".js-date-input").value = "";
  todoAddHTML();
}
