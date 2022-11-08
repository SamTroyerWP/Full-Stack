const btn = document.getElementById('btn');
btn.addEventListener("click", function() {
    getapi();
});

const quoteResult = document.getElementById("quoteResult");
const quote = document.getElementById("quote")
const person = document.getElementById("person")
const url = "https://motivational-quote-api.herokuapp.com/quotes/"

async function getapi() {
    let response = await fetch(url)
    let data = await response.json()
    let randomQuote = data[Math.floor(Math.random() * data.length)]
    quote.innerHTML = '"' + randomQuote.quote + '"'
    person.innerHTML = randomQuote.person
}