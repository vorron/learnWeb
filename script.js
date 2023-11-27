let addMessage = document.querySelector(".message");
let addButton = document.querySelector(".add");
let todo = document.querySelector(".todo");
let delAllButton = document.querySelector(".delete");
// let editElement = document.querySelector(".edit");
let allTasks = document.querySelector(".result");

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

// старый код удаления задач
// delElementAll.addEventListener("click", function () {
//   todoList.forEach(function (item) {
//     todoList.splice(item);
//   });
//   displayMessages();
// });


// 
function allTask() { 
  let count = todoList.length;
  allTasks.textContent = `Всего задач: ${count}`;

}

// Удаление задач
delAllButton.addEventListener("click", function () {
  todoList.splice(0, todoList.length);
  allTasks.innerHTML = "Задач нет";
  displayMessages();
});
