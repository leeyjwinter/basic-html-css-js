const clock = document.querySelector("h2#clock");

clock.innerText = "Hello I'm Clock.";

function sayHello(){
    console.log("hello");
}

setInterval(sayHello,4000);//4000밀리초마다 호출

