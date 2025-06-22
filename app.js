let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("addTask").addEventListener("click", () => {
  const name = document.getElementById("taskName").value.trim();
  const category = document.getElementById("category").value.trim();
  const deadline = document.getElementById("deadline").value;
  const status = document.getElementById("status").value;

  if (!name || !category || !deadline) {
    alert("Please fill in all fields.");
    return;
  }

  const task = { name, category, deadline, status };
  tasks.push(task);
  saveTasks();
  renderTasks();


  document.getElementById("taskName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("deadline").value = "";
  document.getElementById("status").value = "In Progress";
});
  document.getElementById("taskList").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
      const index = e.target.dataset.index;
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }
  });
function renderTasks(statusFilter = "", categoryFilter = "") {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const today = new Date().toISOString().split("T")[0];

  tasks.forEach((task, index) => {
    if (task.status !== "Completed" && task.deadline < today) {
      task.status = "Overdue";
    }

    if ((statusFilter && task.status !== statusFilter) ||
      (categoryFilter && task.category.toLowerCase() !== categoryFilter.toLowerCase())) {
      return;
    }

    const col = document.createElement("div");
    col.className = "col";

    const card = document.createElement("div");
    card.className = `card p-3 task-card-item`;

    const content = `
      <h5>${task.name}</h5>
      <p><strong>Category:</strong> ${task.category}</p>
      <p><strong>Deadline:</strong> ${task.deadline}</p>
      <label>Status:
        <select data-index="${index}" class="form-select statusDropdown mt-1 mb-2">
          <option ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
          <option ${task.status === "Completed" ? "selected" : ""}>Completed</option>
          <option ${task.status === "Overdue" ? "selected" : ""}>Overdue</option>
        </select>
      </label>
        <div class="text-end">
    <button class="btn btn-danger btn-sm delete-task" data-index="${index}">Delete</button>
  </div>
`;

    card.innerHTML = content;
    col.appendChild(card);
    taskList.appendChild(col);
  });

  saveTasks();
}

document.getElementById("taskList").addEventListener("change", (e) => {
  if (e.target.classList.contains("statusDropdown")) {
    const index = e.target.dataset.index;
    tasks[index].status = e.target.value;
    saveTasks();
    renderTasks();
  }
});

document.getElementById("applyFilters").addEventListener("click", () => {
  const status = document.getElementById("filterStatus").value;
  const category = document.getElementById("filterCategory").value;
  renderTasks(status, category);
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = () => {
  renderTasks();
};
