const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(){

}


function onTodoSubmitEvent(event){
    event.preventDefault();
    mytodo = toDoInput.value;
    // 폼 안의 내용 비워줌
    toDoInput.value = ""
    // localStorage.setItem("mytodo",mytodo);
    // newTodo =  localStorage.getItem("mytodo");
    // toDoList.innerText = newTodo;
}

toDoForm.addEventListener("submit",onTodoSubmitEvent);

