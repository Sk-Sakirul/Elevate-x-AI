let todos = [];

let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  let value = todoInput.value.trim();

  if (value == "") {
    alert("Please enter a todo.");
    return;
  }

  let todo = {
    id: Date.now(),
    text: value,
  };

  todos.push(todo);

//   console.log(todo);
  renderTodos();
  todoInput.value = "";
});

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = todo.text;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", () => {
      const updatedText = prompt("Updated todo", todo.text);

      if (updatedText !== null && updatedText.trim() !== "") {
        todo.text = updatedText;
        renderTodos();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((item) => {
        return item.id !== todo.id;
      });

      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}
