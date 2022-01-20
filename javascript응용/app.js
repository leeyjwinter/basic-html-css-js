//html의 form 사용
//preventDefault함수로 JS의 기본기능을 잠그면서 실행하기



const loginForm = document.querySelector("#login-form");

//loginForm id를 가진 태그의 요소들을 가져옴
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greetings = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";

//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");과 같음


// html에서도 이미 가능한 기능임
// function onLoginBtnClick(){
//     const InputValue = loginInput.value;
//     if(InputValue != ""){
//         if(InputValue.length>15)
//         alert("Name is Too Long")
//         else
//         console.log("Hello", InputValue);
//     }

//     else   
//         alert("Please Write a Name!")
    
    
//     console.log("click!");
    
// }

// loginButton.addEventListener("click",onLoginBtnClick);




//이는 jS에서 submit을 할 때 값을 전달하고 있으며 , 새로고침을 하면서 어떤 것들을
//실행함
//이를 막아줘야 함

function onLoginSubmitEvent(event){
    event.preventDefault();
	const username = loginInput.value; 
    console.log(loginInput.value);
	
	loginForm.classList.add("hidden");

//	greetings.innerText = "Hello " + username;
	greetings.innerText = `Hello ${username}`;
	greetings.classList.remove(HIDDEN_CLASSNAME);
	
	localStorage.setItem("username",username);

	
}
loginForm.addEventListener("submit",onLoginSubmitEvent);


const savedUsername = localStorage.getItem("username");

if(savedUsername===null){
	loginForm.classList.add("hidden");
}
