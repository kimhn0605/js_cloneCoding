const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date(); // 현재 시간 가져오기

	// 문자열로 변환 후 시간이 한 자리면 앞에 0 이 붙을 수 있도록 padStart() 적용
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${hours}:${minutes}:${seconds}`; // `` 이용해서 출력될 형태 지정
}

getClock(); // 1초 뒤부터 getClock() 반복 실행되니까 처음에도 한 번 실행시켜주는 것
setInterval(getClock, 1000);
