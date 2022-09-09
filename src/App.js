import React, { useState, useEffect } from "react";
import './App.css';
import Tweet from './Tweet';

export default function App() {

  // RNG
  const randInt = Math.floor(Math.random() * 1643);

  // initialize state and assign it a random quote
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  fetch("https://type.fit/api/quotes")
    .then(function (response) { return response.json })
    .then(function (data) { setQuotes(data) })
  
  //find a way to set the quote

  return (
    <div className="App">
      <div id='quote-box' style={{ alignItems: 'center' }}>

        {/* (User Story #2 - exists√, #6 - appears on load) The text component will call from the API and display the quote text */}
        <div id="text">{quote.text}</div> 

        {/* (User Story #3 - exists√, #7 - appears on load) The author component will call from the API and display the quote author */}
        <div id="author">- {quote.author}</div> 

      </div>

      {/* (User Story #4 - exists√, #8 & #9 - functionality) This button will call the API and refresh the quote's Text and Author */}
      <button id='new-quote' onClick={useEffect(() => setQuote(quotes[randInt]), [quotes, randInt])}>New Quote</button>
      
      {/* (User Story #5 - exists√, #10 - functionality/path) This button is to tweet the quote */}
      <Tweet />
    </div>
  );
}