//javascript에서 html의 정보들을 변경하거나 확인할 수 있다
//js 와 html은 연결되어있다!

// document.title="not momentum";  제목을 바꿈



// const title = document.getElementById("title"); //id가 title인 html 태그를 가져옴
// console.dir(title);  // console.log보다 요소를 더 자세히 보여줌

//title.innerText="Got ya!";//태그의 속한 grab me를 바꿈



const hellos = document.getElementsByClassName("hello");
//class명으로 찾으며 여러개인 경우에 array값으로 반환함
console.log(hellos);

let title = document.getElementsByTagName("h1");
//tag로 찾으며 여러개인 경우 arrat값으로 반환함
console.log(title);

title = document.querySelector(".hi h1");//CSS 선택자를 이용
//hi class의 h1불러올 수 있음
//해당되는 것이 많으면 첫번 째 1개만 가져옴
console.log(title);

title = document.querySelector("#hello");
//getelementbyId 와 동일함



//CSS처럼 style을 javascript에서 변경 가능
console.dir(title);
title.style.color="red"; 
