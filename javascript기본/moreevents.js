const title = document.querySelector("div.hello:first-child");


//resize 창 크기 변경할때
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
window.addEventListener("resize",handleWindowResize);


//복사할때
function handleWIndowCopy(){
    alert("copier!");
}
window.addEventListener("copy",handleWIndowCopy);


//connection events (네트워크가 연결됐을 떄, 끊겼을 때)


function handleWIndowOffline(){
    alert("SOS! OFFline!"); 
}

function handleWIndowOnline(){
    alert("Network Good!"); 
}
window.addEventListener("offline",handleWIndowOffline);
window.addEventListener("online",handleWIndowOnline);
