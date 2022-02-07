const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const toDos = [];

function deleteTodo(event){
    clickedList = event.target.parentElement.innerText;
    const li = event.target.parentElement;
    //console.log(clickedList);
    li.remove();
    
    
}

function paintToDo(myTodo){

    //li를 만들고 그 안에 span넣고 싶음
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = myTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    // localStorage.setItem(`myTodo${listCount}`,myTodo);
    // listCount++;

}
function saveToDos(a){
    localStorage.setItem("todos",a);
}

function onTodoSubmitEvent(event){
    event.preventDefault();
    myTodo = toDoInput.value;
    // 폼 안의 내용 비워줌
    toDos.push(myTodo);
    saveToDos(toDos);
    toDoInput.value = ""
    paintToDo(myTodo);

    // newTodo =  localStorage.getItem("myTodo");
    // toDoList.innerText = newTodo;
}

toDoForm.addEventListener("submit",onTodoSubmitEvent);


for(i=0; i<toDos.length;i++){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = toDos[i];
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
}