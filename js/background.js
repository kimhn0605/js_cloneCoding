const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

// 0 ~ images 길이만큼 랜덤 인덱스 지정
const chosenImage = images[Math.floor(Math.random() * images.length)];

// html 에서 img 태그 생성 대신
// js 파일에서 태그 생성하고 랜덤 이미지 띄우기
const bgImage = document.createElement("img");

// 이미지 경로 지정
bgImage.src = `img/${chosenImage}`;

// appendChild() : 부모 객체 아래에 자식 객체 추가
// append 대신 prepend 사용하면 맨 앞에 추가
document.body.appendChild(bgImage);
