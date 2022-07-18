// getCurrentPosition(arg1, arg2)
// arg1 : 오류가 발생하지 않았을 때 실행될 함수
// arg2 : 오류 발생 시 실행될 함수

// https://openweathermap.org/api 접속해서 'Current Weather Data' api 사용
// 얻어낸 위/경도로부터 해당 위치의 날씨를 알려주는 API

// 고유 API KEY
const API_KEY = "f9840ddb8059685b48bb38f555bd3fac";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
			city.innerText = data.name;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
