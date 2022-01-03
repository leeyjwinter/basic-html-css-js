

const age = prompt("How old are you?")//scanf 처럼 input을 받는 것
//요즘에는 html ,css를 활용해서 물음


console.log(age);
console.log(typeof age);//string으로 받게 됨


//parseInt를 통해 정수형으로 바꿀 수 있음
console.log(typeof parseInt(age));
console.log(age, parseInt(age));

//isNaN으로 수인지 아닌지 받을 수 잇음
const age2 = parseInt(prompt("How old are you?"));
console.log(isNaN(age));

if(isNaN(age)){
    console.log("Please Write a number");
}
else{
    console.log("Thank you")
}


//if 문 구조

let a = parseInt(prompt("write number"));
let b = parseInt(prompt("write number"));

if(a===10 && b===20){
    console.log(a+b); 
}
//=== 뺴고 나머지는 c언어와 사용 구조 같음
