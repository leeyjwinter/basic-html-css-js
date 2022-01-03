const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(h1.className === clickedClass)
//         h1.className = "";//클래스명을 변경함
//     else
//         h1.className=clickedClass;
// }


//classList

//javascript가 css가 설정한 클래스명을 바꾸지 않도록 단순히 클래스를 추가,추가한 
//클래스 삭제의 과정 거침 
function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass))//h1의 클래스에 clickedClass가 있으면
        h1.classList.remove(clickedClass);//클래스명을 변경함
    else
        h1.classList.add(clickedClass);
}
h1.addEventListener("click",handleTitleClick);



//toggle을 통해 끄고 키는 기능 단순화 가능

// function handleTitleClick(){
//     h1.classList.toggle("clicked");
    
// }