
//const & let 및 int,str,char데이터 타입 선언
//따로 형 선언 안함
console.log(454545);//콘솔로 데이터 전송
console.log("hello");

const a = 5;//바뀌지 않는 변수
const b = 2;
const myName = "lee";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + " " + myName);



let c = 5;//바뀌는 변수 
let d = 2;
let newName = "lee";
console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("hello" + " " + newName);

newName = "YoungJun";

console.log("hello" + " " + newName);


const amIFat = false;//boolean
console.log(amIFat);
const IFat = null;//null type
console.log(IFat);
let something;//undefined (메모리에는 존재하나 정의되지 않음)
console.log(something);

//array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thr";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon,tue,wed,thu,fri,sat];
const nonSense = [1,2,"hello",null,true];


console.log(daysOfWeek[0]);

//Get Item from Array

daysOfWeek.push("sun");//array의 마지막 index에 append하는것
console.log(nonSense);


//object(클래스, 구조체 같은 거)

const player = {
    name:"lee",
    points: 10,
    fat: true
};

console.log(player.name);
console.log(player["name"]);//위에랑 같음
player.name="notLee";
console.log(player.name);//const내의 요소는 바꿔도 됨
player.firstName="YoungJun";
player.points=player.points+15;
player.points++;
console.log(player);


