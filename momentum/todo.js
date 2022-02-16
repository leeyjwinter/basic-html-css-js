const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos"

function deleteTodo(event){
    clickedList = event.target.parentElement.innerText;
    const li = event.target.parentElement;
    //toDos 리스트를 업데이트 해줌(방금 클릭된 아이디 제외한 것만 남겨두는 필터함수)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(toDos);
    li.remove();
}

function paintToDo(object){

    //li를 만들고 그 안에 span넣고 싶음
    const li = document.createElement("li");
    li.id = object.id;
    const span = document.createElement("span");
    span.innerText = object.text;
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
    //toDOs의 값들을 string으로 저장해줌
    localStorage.setItem("todos",JSON.stringify(a));
}

function onTodoSubmitEvent(event){
    event.preventDefault();
    myTodo = toDoInput.value;
    // 폼 안의 내용 비워줌
    
    const myTodoObj={
        text: myTodo,
        id: Date.now(),
    };
    toDos.push(myTodoObj);
    saveToDos(toDos);

    //입력 칸 지우기
    toDoInput.value = ""
    paintToDo(myTodoObj);

    // newTodo =  localStorage.getItem("myTodo");
    // toDoList.innerText = newTodo;
}

toDoForm.addEventListener("submit",onTodoSubmitEvent);

const savedToDos = localStorage.getItem(TODOS_KEY);
//실제 배열이 아닌 단순히 텍스트 값을 가져옴


if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //텍스트 값을 배열 오브젝트로 바꿔줌
    parsedToDos.forEach(paintLocal);
    //parsedToDos의 각각의 요소에 대하여 함수실행하도록

}

function paintLocal(item){//paintLocal의 각각의 item들에 대해 사용한다는 의미의 매개변수
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = item.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}





//localStorage 요소 지우기


//[1,2,3,4].filter(sexyFilter) 은
//배열 요소마다 sexyFilter을 실행하고 sexyFilter(1) true가 아니면 없앰





