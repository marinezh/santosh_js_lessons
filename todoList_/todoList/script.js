const todo = document.querySelector(".input__todo");
const addBtn = document.querySelector(".btn__add");
const list = document.querySelector("ul");
let twoButtons = document.createElement("div");

let todoList = [];
console.log(todoList);

console.log(list);
twoButtons.innerHTML = ''
console.log(twoButtons.innerHTML);
const addNewTask = () => {
  
  // creation li elements with new tasks
  let ul = document.querySelector(".todo");
  let newTodo = document.createElement("li");
  newTodo.className = "new__todo";

  newTodo.innerHTML = `<input type='checkbox' class='checkbox'><span>${todo.value}</span><button class='delete'>❌</button>`;
  ul.prepend(newTodo);
  todoList.push(newTodo)

  console.log(todoList);
    console.log(newTodo);
  console.log('length', newTodo.innerHTML.length);

  if (newTodo.innerHTML.length > 0) {
    document.querySelector(".two__buttons").style.display = "flex";
  }

  // delete done tasks
  let deleteButton = document.querySelector(".delete");
  let checkedItem = document.querySelector(".checkbox");
  let doneItem = document.querySelector("span");

  // if task checked add new style
  const cheacked = () => {
    doneItem.classList.toggle("mystyle");
  };
  checkedItem.addEventListener("click", cheacked);

  // delete task if it is done
  const deleteFunc = () => {
    if (doneItem.classList.contains("mystyle")) {
      newTodo.remove();
    }
  };
  deleteButton.addEventListener("click", deleteFunc);

  const deleteDone = document.querySelector(".delete__done");
  const deleteAllBtn = document.querySelector(".delete__all");

  const deletionAllfunc = () => {
    newTodo.remove();
      document.querySelector(".two__buttons").style.display = "none";
      console.log('length', newTodo.innerHTML.length);
      console.log('new', newTodo);
  };

  deleteDone.addEventListener("click", deleteFunc);
  deleteAllBtn.addEventListener("click", deletionAllfunc);
};
addBtn.addEventListener("click", addNewTask);

// delete_buttons creation
todoWrap = document.querySelector(".todo__wrap");
console.log(todoWrap);

twoButtons.className = "two__buttons";
twoButtons.innerHTML = `<button class = "delete__done"> Delete Done </button> <button class = "delete__all"> Delete All </button>`;
todoWrap.append(twoButtons);

// twoButtons.innerHTML = ""
// if (todoList.length > 0) {
  
//   document.querySelector(".two__buttons").style.display = "flex";
// }