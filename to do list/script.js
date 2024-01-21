const taskInput = document.getElementById("taskInput");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    pendingTasks.appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.add("completed");
    completedTasks.appendChild(li);
    button.remove();
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
