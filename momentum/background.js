const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

//javascript에서 이미지 객체를 만들고 chosenImage라고 source를 지정해줌
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`

console.log(bgImage);

//document의 body안에 넣어줌
document.body.appendChild(bgImage);








