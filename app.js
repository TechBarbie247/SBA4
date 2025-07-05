
const taskInput = document.getElementById("input-box");
const taskCategory = document.getElementById("task-taskCategory");
const taskDeadline = document.getElementById("task-D");
const taskList = document.getElementById("list");
const statusFilter = document.getElementById("statusFilter");
const categoryFilter = document.getElementById("categoryFilter");


let taskArray = JSON.parse(localStorage.getItem("taskArray")) || [];

function saveMyTasks() {
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

function fillCategoryDropdown() {
  const categories = ["All", ...new Set(taskArray.map(task => task.taskCategory))];
  categoryFilter.innerHTML = "";

  for (let category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  }
}

function showTasks() {
  taskList.innerHTML = "";

  const currentStatus = statusFilter.value;
  const currentCategory = categoryFilter.value;
  const today = new Date();

  taskArray.forEach((task, index) => {
    const dueDate = new Date(task.deadline);
    const isOverdue = dueDate < today && task.status !== "Completed";

    if (isOverdue) {
      task.status = "Overdue";
    }

    const statusMatch =
      currentStatus === "All" ||
      task.status === currentStatus ||
      (currentStatus === "Overdue" && isOverdue);

    const categoryMatch =
      currentCategory === "All" || task.taskCategory === currentCategory;

    if (statusMatch && categoryMatch) {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${task.name}</strong>
        <div class="details">
          Category: ${task.taskCategory} <br>
          Deadline: ${task.deadline} <br>
          Status: ${task.status}
        </div>
      `;

      const span = document.createElement("span");
      span.innerHTML = "\u00D7";
      span.setAttribute("data-index", index);
      li.appendChild(span);

      if (task.status === "Completed") {
        li.classList.add("select");
      }

      taskList.appendChild(li);
    }
  });

  fillCategoryDropdown();
}

function addTask() {
  const name = taskInput.value.trim();
  const cat = taskCategory.value.trim();
  const due = taskDeadline.value;

  if (!name || !cat || !due) {
    alert("Please fill out all fields to add your task.");
    return;
  }

  const newTask = {
    name: name,
    taskCategory: cat,
    deadline: due,
    status: "In Progress"
  };

  taskArray.push(newTask);
  saveMyTasks();
  showTasks();

  taskInput.value = '';
  taskCategory.value = '';
  taskDeadline.value = '';
  console.log("Task added:", newTask);
}


taskList.addEventListener("click", function (e) {
  const index = e.target.getAttribute("data-index");

  if (e.target.tagName === "SPAN" && index !== null) {
    taskArray.splice(index, 1);
    saveMyTasks();
    showTasks();
  } else if (e.target.tagName === "LI" || e.target.closest("li")) {
    const li = e.target.closest("li");
    const taskIndex = Array.from(taskList.children).indexOf(li);

    if (taskArray[taskIndex].status === "Completed") {
      taskArray[taskIndex].status = "In Progress";
    } else {
      taskArray[taskIndex].status = "Completed";
    }

    saveMyTasks();
    showTasks();
  }
});

statusFilter.addEventListener("change", showTasks);
categoryFilter.addEventListener("change", showTasks);


showTasks();
