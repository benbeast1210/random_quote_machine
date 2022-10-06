import React, { useState, useEffect } from "react";
import './App.css';

export default function App() {

  
  const BASE_URL = "https://type.fit/api/quotes";

  // RNG
  const randInt = Math.floor(Math.random() * quotes.length);

  // initialize state and assign it a random quote
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  // Effect
  useEffect(() => setQuote(quotes[randInt]), [quotes, randInt])

  // fetch and process response as json
  
  // find a way to set the quote onLoad()

  return (
    <div className="App">
      <div id='quote-box' style={{ alignItems: 'center' }}>

        {/* (User Story #2 - exists√, #6 - appears on load) The text component will call from the API and display the quote text */}
        <div id="text">{quote.text}</div>

        {/* (User Story #3 - exists√, #7 - appears on load) The author component will call from the API and display the quote author */}
        <div id="author">- {quote.author}</div>

      </div>

      {/* (User Story #4 - exists√, #8 & #9 - functionality) This button will call the API and refresh the quote's Text and Author */}
      <button id='new-quote' onClick={}>New Quote</button>
      
      {/* (User Story #5 - exists√, #10 - functionality/path) This button is to tweet the quote */}
      <button>
        <a href="https://twitter.com/" id="tweet-quote" title="Tweet this quote!" target="_top">Tweet this quote!</a>
      </button>
    </div>
  );
}