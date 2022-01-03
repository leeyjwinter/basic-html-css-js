const title = document.querySelector("div.hello:first-child");




//event 주기
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";
}

//click 이벤트가 발생하면 handleTitleClick 함수 실행
title.addEventListener("click", handleTitleClick);

//요소의 이벤트들이 어떤것들이 가능한지 보기
console.dir(title);
//on이 붙어있는 것들이 이벤트임  ex) onabort

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";

}
title.addEventListener("mouseenter",handleMouseEnter);
//title.onmouseenter = handleMouseEnter; 위와 같은 기능임
title.addEventListener("mouseleave",handleMouseLeave);

