let quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    id: 1,
    author: "Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
  },
  {
    id: 2,
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    id: 3,
    author: "Walt Disney",
    quote: "All our dreams can come true, if we have the courage to pursue them."
  }
];

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    while (quote === currentQuote) {
        randomIndex = Math.floor(Math.random() * quotes.length);
        quote = quotes[randomIndex];
    }

    displayQuote(quote);
}

function filterQuotesByAutor(author) {
    let filteredQuores = quotes.filter(q => q.author === author);
    currentQuoteIndex = 0;
    let quoteSection = document.getElementById("quote-section");
    quoteSection.innerHTML = "";
    filteredQuores.forEach(q => {
        quoteSection.innerHTML += `<p>"${q.quote}"</p><p>- ${q.author}</p>`;

    displayQuote(filteredQuotes[currentQuoteIndex]);
    });
}

function displayNextQuote() {
 
  currentQuoteIndex++;
  if (currentQuoteIndex >= filteredQuotes.length) {
    currentQuoteIndex = 0; 
  }
  displayQuote(filteredQuotes[currentQuoteIndex]);
}

function displayPreviousQuote() {
 
  currentQuoteIndex--;
  if (currentQuoteIndex < 0) {
    currentQuoteIndex = filteredQuotes.length - 1; 
  }
  displayQuote(filteredQuotes[currentQuoteIndex]);
}

let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", event => {
  displayNextQuote();
});

let previousButton = document.getElementById("previous-button");
previousButton.addEventListener("click", event => {
  displayPreviousQuote();
});

let filterForm = document.getElementById("filter-form");
filterForm.addEventListener("submit", event => {
    event.preventDefault();

    let authorInput = document.getElementById("author-input");
    let author = authorInput.value.trim();

    filterQuotesByAutor(author);
})

let newQuote = {
  id: quotes.length,
  author: "Somebody",
  quote: "This is a new quote.",
};
quotes.push(newQuote);

let prevQuote = null;

function generateQuote() {
    let quote;
   
    do {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (quote === prevQuote);

    let quoteSection = document.getElementById("quote-section");
    quoteSection.innerHTML = `<p>"${quote.quote}"</p><p>- ${quote.autor}</p>`;

    prevQuote = quote;
    currentQuote = quote;
}

function countChars(includeSpaces) {
    if (!currentQuote) {
        return;
    }

    let quoteText = includeSpaces ? currentQuote.quote
    let charCount = quoteText.length

    alert(`Character count${includeSpaces ? " (including spaces" : " (excluding spaces)"}: ${charCount}`)
}

function countWords() {
    if (!currentQuote) {
        return
    }

    let wordCount = currentQuote.quote.split(" ").length;

    alert(`Word count: ${wordCount} words.`);
}

function likeQuote() {
  if (!currentQuote || likedQuotes.includes(currentQuote)) {
    return;
  }
  
  currentQuote.likes = (currentQuote.likes || 0) + 1;
  
  likedQuotes.push(currentQuote);
  
  console.log("Liked quote:", currentQuote);
}

let charCountBtn = document.getElementById("char-count-btn");
charCountBtn.addEventListener("click", countCharacters);

let charCountNoSpacesBtn = document.getElementById("char-count-no-spaces-btn");
charCountNoSpacesBtn.addEventListener("click", countCharactersNoSpaces);

let wordCountBtn = document.getElementById("word-count-btn");
wordCountBtn.addEventListener("click", countWords);

let likeBtn = document.getElementById("like-btn");
likeBtn.addEventListener("click", likeQuote);
function addQuote(event) {
    event.prevDefault();

    let quoteInput = document.getElementById("quote-input");
    let authorInput = document.getElementById("author-input");
    let quoteText = quoteInput.value;
    let authorText = quoteInput.value;

    let newQuote = {
        id: quotes.length,
        author: authorText,
        quote: quoteText
    };

    quotes.push(newQuote);

    quoteInput.value = "";
    quoteInput.value = "";

    console.log("Added new quote", newQuote);
}   

let addQuoteForm = document.getElementById("add-quote-form");
addQuoteForm.addEventListener("submit", addQuote);



let filteredQuores = [];
let currentQuoteIndex = 0;

