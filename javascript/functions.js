// 함수 만드는 법

function sayHello(nameOfPerson, age) {
    console.log("hello my name is " + nameOfPerson + "and I'm " + age);
    // console.log(nameOfPerson);
}

//alert();//경고메시지 출력
sayHello("Nico",10);


function plus(a,b){
    console.log(a+b);
}

function divide(a,b){
    console.log(a/b);
}

plus();//NaN 표시가 뜸 (Not a Number)
plus(3,5);
divide(3,5);
divide(11,3);


const player={
    name:"nico",
    sayHello:function(otherPersonsName){
        console.log("hello " + otherPersonsName);
    },
};

console.log(player.name);
player.sayHello("Lee");


function calculateKrAge(ageOfForeinger){
    return ageOfForeinger+2;
}

console.log(calculateKrAge(98));