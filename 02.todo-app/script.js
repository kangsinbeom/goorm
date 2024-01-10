const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");
console.log("hello");
const todos = [];

createBtn.addEventListener("click", () => createNewTodo());

const createNewTodo = () => {
  const item = { id: 1, text: "밥먹기", complete: false };
  todos.unshift(item);

  const { itemEl, inputEl, editBtnEl, removeBtnEl } = creaeteTodoElemet(item);
  list.prepend(itemEl);
  inputEl.removeAttribute("disabled");
  inputEl.focus();
};

const creaeteTodoElemet = (item) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  const checkEl = document.createElement("input");
  checkEl.type = "checkbox";

  if (item.complete) {
    itemEl.classList.add("complete");
  }

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.innerText = item.text;
  inputEl.setAttribute("disabled", "");
  const contentEl = document.createElement("div");
  contentEl.classList.add("contents");
  const actionsEl = document.createElement("div");
  actionsEl.classList.add("actions");

  const editBtnEl = document.createElement("button");
  editBtnEl.classList.add("material-icons");
  editBtnEl.innerText = "edit";

  const removeBtnEl = document.createElement("button");
  removeBtnEl.classList.add("material-icons", "remove-btn");
  removeBtnEl.innerText = "remove_circle";

  contentEl.append(checkEl);
  contentEl.append(inputEl);

  actionsEl.append(editBtnEl);
  actionsEl.append(removeBtnEl);

  itemEl.append(contentEl);
  itemEl.append(actionsEl);

  return { itemEl, inputEl, editBtnEl, removeBtnEl };
};
