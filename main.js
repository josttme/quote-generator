import './style.css'
const API = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')
let resApiQuote = []

function showLoadingSpinner() {
	loader.hidden = false
	quoteContainer.hidden = true
}
function removeLoadingSpinner() {
	quoteContainer.hidden = false
	loader.hidden = true
}
function showNewQuote() {
	showLoadingSpinner()
	const quoteRandom = resApiQuote[Math.floor(Math.random() * resApiQuote.length)]
	// Check if Author field is blanck and it withe
	if (!quoteRandom.author) {
		authorText.textContent = 'Unknown'
	} else {
		authorText.textContent = quoteRandom.author
	}
	quoteText.textContent = quoteRandom.text
	removeLoadingSpinner()
}
async function getQuotesFromApi() {
	try {
		const res = await fetch(API)
		resApiQuote = await res.json()
		showNewQuote()
	} catch (error) {
		console.log(error)
	}
}
function tweetQuote() {
	const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
	window.open(twitterURL, '_blank')
}
// Event Listeners
newQuoteBtn.addEventListener('click', showNewQuote)
twitterBtn.addEventListener('click', tweetQuote)
// On Load
getQuotesFromApi()
