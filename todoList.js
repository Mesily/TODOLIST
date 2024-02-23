
let tasks = [];

function addTask() {
    let taskInput = document.getElementById("myInput");
    let task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        displayTasks();
    } else {
        alert("Task cannot be empty!");
    }
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        displayTasks();
    }
}

function updateTask(index) {
    let newTask = prompt("Enter new task");
    if (newTask !== null) { 
        newTask = newTask.trim();
        if (newTask !== "") {
            tasks[index] = newTask;
            displayTasks();
        } else {
            alert("Task can not be empty!");
        }
    }
}

function displayTasks() {
    let addedTasks = document.getElementById("addedTasks");
    addedTasks.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let taskItem = document.createElement("li");
        taskItem.textContent = tasks[i];

        taskItem.style.fontFamily = "Arial, sans-serif";
        taskItem.style.fontSize = "20px";
        taskItem.style.fontWeight = "bold";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            deleteTask(i);
        };
        deleteBtn.style.backgroundColor = "black";
        deleteBtn.style.color = "white";
        deleteBtn.style.marginLeft = "15px";
        deleteBtn.style.marginRight = "5px";
        let updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.onclick = function () {
            updateTask(i);
        };
        updateBtn.style.color = "white";
        updateBtn.style.backgroundColor = "black";
        updateBtn.style.marginRight = "5px";
        taskItem.appendChild(deleteBtn);
        taskItem.appendChild(updateBtn);
        addedTasks.appendChild(taskItem);
    }
}