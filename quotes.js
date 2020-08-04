let quotes = [];
let numberOfQuotes = 50;
let data = downloadQuote().then(copyQuotes);
let button = document.querySelector('button');
let divContent = document.querySelector('.content');
let divContainer = document.querySelector('.container');
let body = document.body;

async function downloadQuote() {
  let response = await fetch ('https://type.fit/api/quotes');
  let data = await response.json();
  return data;
}
function copyQuotes (response) {
  for (let i = 0; i < numberOfQuotes; i++) {
    quotes.push(response[i]);
  }
  writeQuote();
}
function randomNum(x) {
  return Math.floor(Math.random() * x)
}
function randomColor() {
  let num = () => Math.floor(Math.random() * (255-100) + 100);
  let rgb = `rgb(${num()},${num()},${num()})`;
  return rgb;
}
function getQuote () {
  let length = quotes.length;
  let number = randomNum(length);
  let quote = quotes[number]
  return quote;
}
function writeQuote() {
  let content = getQuote();
  let background = randomColor();
  if (content.author === null) content.author = '';
  body.style.background = background;
  divContainer.style.background = background;
  divContent.style.background = background;
  divContent.innerHTML = `<h3>${content.text}</h3><h2>${content.author}</h2>`;
}

button.addEventListener('click', writeQuote);
divContent.addEventListener('click', writeQuote);
