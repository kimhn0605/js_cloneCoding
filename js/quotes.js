// 랜덤으로 뽑아낼 '명언 (quote) / 저자 (author)' 를 객체 형식으로 지정해서 배열에 저장
const quotes = [
	{
		quote: "The way to get started is to quit talking and begin doing.",
		author: "Walt Disney",
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: "John Lennon",
	},
	{
		quote: "The world is a book and those who do not travel read only one page.",
		author: "Saint Augustine",
	},
	{
		quote: "Life is either a daring adventure or nothing at all.",
		author: "Helen Keller",
	},
	{
		quote: "To Travel is to Live",
		author: "Hans Christian Andersen",
	},
	{
		quote: "Only a life lived for others is a life worthwhile.",
		author: "Albert Einstein",
	},
	{
		quote: "You only live once, but if you do it right, once is enough.",
		author: "Mae West",
	},
	{
		quote: "Never go on trips with anyone you do not love.",
		author: "Hemmingway",
	},
	{
		quote: "We wander for distraction, but we travel for fulfilment.",
		author: "Hilaire Belloc",
	},
	{
		quote: "Travel expands the mind and fills the gap.",
		author: "Sheda Savage",
	},
];

const quote = document.querySelector("#quote div:nth-child(1)");
const author = document.querySelector("#quote div:nth-child(2)");

// 0 ~ quotes 배열 길이만큼 랜덤 인덱스 저장
// quotes 원소 개수가 10 개 이면 인덱스는 0 ~ 9 까지 존재하는데,
// 랜덤 숫자 결과 9.xxx 일 때 9 로 내리기 위해서 Math.round() 대신 Math.floor() 사용
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
