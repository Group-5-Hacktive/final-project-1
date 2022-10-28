// target element span untuk date
const dateHTML = document.querySelector("#date");
// dapatkan tanggal hari ini menggunakan object new Date()
const date = new Date().toUTCString().slice(5, 16);
// masukkan date ke dalam dateHTML
dateHTML.innerText = date;

// ### input
const todoInput = document.querySelector(".todo-input");
const btnInput = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

const KEY_TODOS = "Td_ft";

// event listener
btnInput.addEventListener("click", (event) => {
  const todoList = JSON.parse(localStorage.getItem(KEY_TODOS));

  let newTodo = [];
  event.preventDefault();

  // check jika inputnya kosong, maka beri alert
  if (todoInput.value === "") {
    alert("Input tidak boleh kosong");
  } else {
    newTodo = [...todos, input.value];
  }

  // membuat div
  const div = document.createElement("div");
  // menambahkan class ke div
  div.classList.add("todo");

  // membuat li
  const li = document.createElement("li");
  // manambahkan class ke li
  li.classList.add("todo-item");
  // masukkan todoInput ke li
  li.innerText = todoInput.value;

  // mebuat done btn
  const done = document.createElement("button");
  // menambahkan class ke button
  done.classList.add("done-btn");
  // menambahkan text Done ke button
  done.innerText = "Done";

  // membuat delete btn
  const del = document.createElement("button");
  // menambahkan class ke button
  del.classList.add("delete-btn");
  // menambahkan text Delete ke button
  del.innerText = "Delete";

  // masukkan li, done dan del ke dalam div
  div.append(li, done, del);

  // masukkan div ke dalam todoList
  todoList.append(div);

  // kosongkan input
  todoInput.value = "";

  localStorage.setItem(KEY_TODOS, JSON.stringify(newTodo));

  renderTodo();

  input.value = "";
});

// event untuk done dan delete
todoList.addEventListener("click", (event) => {
  // mendapatkan element yg di click
  const btn = event.target;

  // mendapatkan parent dari btn
  const todo = btn.parentElement;

  // check apakah yg diclick itu tombol done atau delete
  // 1. check jika dia tombol done
  if (btn.innerText === "Done") {
    todo.classList.add("done-todo");

    // hapus button done
    btn.remove();
  } else if (btn.innerText === "Delete") {
    todo.classList.add("remove");

    // hapus todo menggunakan transitionend
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
});
