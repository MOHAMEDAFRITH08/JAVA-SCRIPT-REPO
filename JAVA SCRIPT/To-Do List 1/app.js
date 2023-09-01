// function addTask() {
//     const newTaskInput = document.getElementById('newTask');
//     const taskList = document.getElementById('taskList');

//     if (newTaskInput.value.trim() !== '') {
//         const taskText = newTaskInput.value;
//         newTaskInput.value = '';

//         const li = document.createElement('li');
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';

//         const taskTextSpan = document.createElement('span');
//         taskTextSpan.textContent = taskText;

//         li.appendChild(checkbox);
//         li.appendChild(taskTextSpan);
//         taskList.appendChild(li);

//         checkbox.addEventListener('change', function () {
//             if (checkbox.checked) {
//                 taskTextSpan.style.textDecoration = 'line-through';
//             } else {
//                 taskTextSpan.style.textDecoration = 'none';
//             }
//         });
//     }
// }
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        
        taskInput.value = "";
        
        const deleteButton = li.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
}
