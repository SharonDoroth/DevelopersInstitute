const tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";

    const listTasks = document.querySelector(".listTasks");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-times-circle delete-btn";
    deleteBtn.addEventListener("click", () => {
      deleteTask(taskText);
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (event) => {
      toggleTaskCompletion(event.target.checked, taskText);
    });

    const label = document.createElement("label");
    label.textContent = taskText;

    taskDiv.appendChild(deleteBtn);
    taskDiv
}
}