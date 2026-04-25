
// select input field
let inputTask = document.querySelector(".input-task");

// select add button
let addBtn = document.querySelector(".add-btn");

// select task list (ul)
let taskList = document.querySelector(".task-list");
let ul=document.querySelector("ul");
// save data in local storage
// let work=inputTask.value;
// console.dir(work);

let list=inputTask.value;
addBtn.addEventListener("click",function(){
    let list=document.createElement("li");
    list.classList.add("task-item");
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    let text=document.createElement("span");
    text.classList.add("task-text");
    text.textContent=inputTask.value;
    checkbox.classList.add("complete-checkbox");
    let editbtn=document.createElement("button");
    editbtn.classList.add("edit-btn");
    editbtn.textContent="Edit";
    let dellbtn=document.createElement("button");
    dellbtn.classList.add("delete-btn");
    dellbtn.textContent="Delete";


    taskList.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(text);
    list.appendChild(editbtn);
    list.appendChild(dellbtn);
    inputTask.value="";
 
});


function savelocalstorage(){
localStorage.setItem("tasks",inputTask.value);

}

