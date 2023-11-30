const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");
const delAllButton = document.querySelector(".delete");
// let editElement = document.querySelector(".edit");
let allTasks = document.querySelector(".result");

// массив данных списка
let todoList = [  {
    todo: 'Добавить кнопку "Удалить все"',
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "27.11.23",
  },
  {
    todo: 'Добавить кнопку "Удалить одну задачу"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Добавить переключатель "Отображать/скрывать исполненные поручения"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Выводить информацию "Задач всего, из них исполнено"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: "Важные задачи (important) выделять визуально (или стилем текста или фоном или границей или др.)",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: "Обеспечить возможность пометки задачи как важной",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Добавить кнопку "Редактировать", позволяющую изменить текст, важность и прочие параметры задачи',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Добавить поля "Дата постановки задачи", "Дата исполнения", отображать их, обеспечить заполнение при создании, при исполнении, чистку при снятии с исполнения',
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Увеличить ширину отображения задач",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Обеспечить отображение задач при запуске сайта",
    checked: true,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Добавить параметр ТрудоёмкостьЗадачи, оценивать её по пятибальной системе",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Реализовать вывод стат.отчёта, сколько задач в день закрывалось за отчетный период",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },    
    {
    todo: "Вывести список задач в отдельный модуль, импортировать его из основного скрипта",
    checked: false,
    important:true ,
    assignmentDate: "28.11.23",
    performDate: "",
  },
                {
    todo: "Добавить параметр 'Рег. номер задачи', сделать её автозаполняемым, обеспечить его отображение",
    checked: false,
    important:true ,
    assignmentDate: "29.11.23",
    performDate: "",
  },
{
    todo: "Спрофилировать сайт для работы на десктопе: сделать что бы высота списка умещалась на экране, при превышении появлялась прокрутка",
    checked: false,
    important: false ,
    assignmentDate: "29.11.23",
    performDate: "",
  }

]; 

displayMessages();
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
     <label for="item_${i}" class='${item.important ? "important" : ""}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
    allTask();
}

// старый код удаления задач
// delElementAll.addEventListener("click", function () {
//   todoList.forEach(function (item) {
//     todoList.splice(item);
//   });
//   displayMessages();
// });

// При нажатии на элемент правой кнопкой мышки, помечается Важным
todo.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  todoList.forEach(function (item) {
    if (item.todo === event.target.innerHTML) {
      item.important = !item.important;
      displayMessages();
    }
  });
});

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
