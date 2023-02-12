const listApp = document.getElementById("list_app");
const input = document.getElementById('input_app');
const addButton = document.getElementById("btn_app");

addButton.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeEnter);

function onClickAdd() {
   const li = createListItem(input.value);
   listApp.appendChild(li);
   input.value = "";
   addButton.disabled = true;
}

function onTypeEnter() {
   addButton.disabled = input.value.length === 0;
}

function createListItem(name) {
   const itemApp = document.createElement("li");
   const heading = document.createElement("span");
   heading.textContent = name;
   const deleteButton = document.createElement("button");

   itemApp.classList.add("item_app");
   deleteButton.textContent = "X";
   deleteButton.classList.add("delete_btn");
   deleteButton.addEventListener("click", onClickDelete);

   itemApp.appendChild(heading);
   itemApp.appendChild(deleteButton);

   return itemApp;

}

function onClickDelete() {
   this.parentNode.remove();
}