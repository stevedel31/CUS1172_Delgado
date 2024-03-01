document.addEventListener('DOMContentLoaded', function(){
const taskList = [];

document.getElementById("new_task").addEventListener("submit", function(event){
    

    const taskTitle = document.getElementById("task").value;
    const taskPriority = document.getElementById("task_Priority").value;
    const taskStatus = document.querySelector('input[name="taskStatus"]:checked').value;

    const task = {
        name: taskTitle,
        priority: taskPriority,
        status: taskStatus
    };

    taskList.push(task);

    const li = document.createElement('li');
    li.innerHTML = `
        ${task.name} | Priority: ${task.priority}, Status: ${task.status}
        <button class="remove">Remove</button>
        <button class="complete">Complete</button>
    `;
    document.getElementById("tasks_list").appendChild(li);
    
    event.preventDefault();
    
    
});

document.addEventListener('click', function(event){
    element = event.target;
    if(element.className ==='remove'){
        const liObject = element.parentElement;
        const taskObject = liObject.parentElement;
        const index = Array.from(taskObject.children).indexOf(liObject);
        taskList.splice(index,1);
        element.parentElement.remove();
    }
    else if(element.className ==='complete'){
        event.preventDefault();
        element.parentElement.style.textDecoration = 'line-through';

    }
    
    
})




})