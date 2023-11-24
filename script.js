let addMessage = document.querySelector(".message");
let addButton = document.querySelector(".add");
let todo = document.querySelector(".todo");
let delElement = document.querySelector(".delete");
// let editElement = document.querySelector(".edit");

let todoList = []; // массив данных списка

addButton.addEventListener("click", function () {
  // Добавление задач в список по кнопке
  if (!addMessage.value) return alert("Введите текст!!!"); // Ограничение пустого ввода
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };
  todoList.push(newTodo);

  displayMessages();
  addMessage.value = "";
});

function displayMessages() {
  let displayMessage = "";
  if (todoList.length === 0) todo.innerHTML = "";
  todoList.forEach(function (item, i) {
    // Формирование списка
    displayMessage += `  
    <li>
     <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
     <label for="item_${i}">${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}

delElement.addEventListener("click", function () {
  // Удаление данных из списка
  todoList.forEach(function (item) {
    todoList.splice(item);
  });
  displayMessages();
});
