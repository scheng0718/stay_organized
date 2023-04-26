// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const completedTodo = document.querySelector("#todo-completed");
// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
  reset();
}
function reset() {
  input.value = "";
}

// Create and prevent space-only input
addBtn.addEventListener("click", function () {
  // 可以直接用 input.value.trim()防止產生空白
  const inputValue = input.value;
  if (inputValue.length > 0 && inputValue.trim().length !== 0) {
    addItem(inputValue);
  }
});
// Feature 2: Create with keyup event
input.addEventListener("keyup", function (event) {
  const inputValue = input.value;
  if (
    event.key === "Enter" &&
    inputValue.length > 0 &&
    inputValue.trim().length !== 0
  ) {
    addItem(inputValue);
  }
});

// Delete and check
list.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    completedTodo.appendChild(parentElement);
  }
});
// Feature 3: Move checked todos back to todo section if needed
completedTodo.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;

  if (target.matches(".delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.remove("checked");
    list.appendChild(parentElement);
  }
});
