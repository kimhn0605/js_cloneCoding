const images = ["0.png", "1.jpg", "2.jpg", "3.JPG"];

// 0 ~ images 길이만큼 랜덤 인덱스 지정
const chosenImage = images[Math.floor(Math.random() * images.length)];

// html 에서 img 태그 생성 대신
// js 파일에서 태그 생성하고 랜덤 이미지 띄우기
const bgImage = document.createElement("img");

// 이미지 경로 지정
bgImage.src = `img/${chosenImage}`;
const imageUrl = `url(${bgImage.src})`;

// body 배경색 지정 (url 형태로 지정해줄 것)
document.body.style.backgroundImage = imageUrl;
