//href로 링크가 가능 것을 막아보자

const myLink = document.querySelector("a");
function blockLink(event){

    console.log(event);//mouseEvent
    event.preventDefault();

}

myLink.addEventListener("click",blockLink);

