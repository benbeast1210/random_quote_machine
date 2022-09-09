import React, { useState, useEffect } from "react";
import './App.css';
import QuoteBox from './QuoteBox';
import Tweet from './Tweet';

export default function App() {

  // RNG
  const randomInt = Math.floor(Math.random() * 1643);

  // initialize state and assign it a random quote
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

  fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setQuotes(data);
  })
  .catch((error) => {
    //error.preventDefault();
  });

  // build refresh button to setText and setAuthor to random quotes
  function refreshQuote() {
    setQuote(quotes[randomInt]);
  }

  return (
    <div className="App">
      <QuoteBox quote={quote} />

      {/* (User Story #4 - exists√, #8 & #9 - functionality) This button will call the API and refresh the quote's Text and Author */}
      <button id='new-quote' onClick={refreshQuote()}></button>
      
      {/* (User Story #5 - exists√, #10 - functionality/path) This button is to tweet the quote */}
      <Tweet />

    </div>
  );
}