const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// const 대신 변경 가능한 let 으로 선언하고,
// 로컬 스토리지에 todo 리스트가 이미 존재한다면 toDos 를 덮어씌워준 다음 새로운 todo 추가
let toDos = [];

function saveToDos() {
	// 로컬 스토리지에는 오직 텍스트만 저장 가능 (배열 x)
	// 그래서 객체이든 배열이든 무조건 문자열로 변환해주는 JSON.stringify() 사용한 것
	// localStorage.setItem("todos", todos); => KEY : todos, VALUE : a, b, c
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	// 클릭된 button 이 어떤 todo 에 관련된 건지 알아내기 위해 event 객체 이용

	// event.target : 클릭된 HTML element
	// parentElement : 클릭된 element 의 부모 요소
	const li = event.target.parentElement; // 삭제하고 싶은 부모 li 요소
	li.remove(); // 해당 li 를 삭제한 다음 saveToDos() 호출해야 함 !!

	//// toDos 배열 갱신
	// item.id => number 타입, li.id => string 타입이라서 parseInt() 사용
	toDos = toDos.filter((item) => item.id !== parseInt(li.id));
	saveToDos(); // 로컬 스토리지에 toDos 배열 갱신

	// console.dir(event.target);  =>  클릭된 버튼의 상세 정보 출력
	// console.dir(event.target.parentElement);  =>  클릭된 버튼의 부모 li 상세 정보 출력
}

function paintToDo(newTodoObj) {
	// <ul> 태그는 이미 html 상에 존재하고, todo 입력값이 들어올 때마다 <li> 태그 추가
	const li = document.createElement("li");
	li.id = newTodoObj.id;

	const span = document.createElement("span");
	span.className = "todoFont";
	span.innerText = newTodoObj.text;

	const button = document.createElement("button");
	button.className = "DeleteBtn";
	button.innerText = "❌";

	// 버튼 클릭 시 해당 todo 가 삭제될 수 있도록 이벤트 등록
	button.addEventListener("click", deleteToDo);

	// 부모 객체에 자식 객체 추가
	// li 태그에 span 태그와 button 태그 추가
	li.appendChild(span);
	li.appendChild(button);

	// 부모 객체 todoList 에 자식 객체 li 추가
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault(); // 현재 form 태그는 submit 이벤트를 가지기 때문에 preventDefault() 적용해서 새로고침 방지
	const newTodo = toDoInput.value; // 입력한 todo 저장
	toDoInput.value = ""; // todo 입력창 다시 비우기

	const newTodoObj = {
		id: Date.now(), // 고유 id 를 만들어주기 위해 Date 객체 사용
		text: newTodo,
	};

	toDos.push(newTodoObj); // 투두리스트에 새롭게 입력된 todo 추가
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	// savedTodos 가 존재하면
	// JSON.parse() : JSON 문자열의 구문을 분석하고, 그 결과에 담긴 값이나 객체를 생성
	const parsedToDos = JSON.parse(savedToDos);
	// ex) savedTodos => 문자열 ["a", "b", "c"]
	//     parsedTodos => 배열 ["a", "b", "c"]

	toDos = parsedToDos; // 새로고침 시 이전에 저장됐던 todo 리스트 가져오기
	// savedToDos 가 아니라 parsedToDos !!!

	parsedToDos.forEach(paintToDo); // 배열 요소 하나씩 paintTodo() 함수 인자로 넘겨줌.
}
