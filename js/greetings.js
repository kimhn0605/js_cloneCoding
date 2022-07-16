const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // id 가 login-form 인 곳에서 제일 처음 적힌 input 태그를 가져옴.
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	// event.preventDefault() : 해당 이벤트의 기본 동작 일어나지 않도록
	event.preventDefault(); // 여기서는 submit 이벤트가 발생될 때 새로고침되는 것을 방지
	loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인폼 사라지도록 클래스 삭제
	const username = loginInput.value; // input 의 입력값을 username 에 저장
	localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 키-값 형태로 username 저장
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`; // 로그인 된 유저는 문구 출력
	greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 의 클래스 목록 중 "hidden" 클래스 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 해당 KEY 에 맞는 유저 이름 가져오기

if (savedUsername === null) {
	// 로컬 스토리지에 유저 이름이 없다면
	loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인할 수 있도록 form 을 출력
	loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트 추가
} else {
	paintGreetings(savedUsername); // 로컬 스토리지에 유저 이름이 있다면 로그인 폼 대신 인사 문구 출력
}
