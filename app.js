let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("add-btn");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let listItem = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    listItem.classList.toggle("completed");
  });

  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", () => {
    let input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent;
    input.addEventListener("blur", () => {
      taskSpan.textContent = input.value;
      taskSpan.style.display = "inline";
      input.remove();
    });
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") input.blur();
    });

    taskSpan.style.display = "none";
    listItem.insertBefore(input, taskSpan);
    input.focus();
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  taskInput.value = "";
});
