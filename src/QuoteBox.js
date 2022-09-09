export default function QuoteBox({ text, author }) {
  return (
    // (User Story #1 - exists√, #11 - style: centered) The QuoteBox component will wrap the main components of the App 
    <div id='quote-box' style={{ alignItems: 'center' }}>

      {/* (User Story #2 - exists√, #6 - appears on load) The text component will call from the API and display the quote text */}
      <div id="text">{text}</div> 

      {/* (User Story #3 - exists√, #7 - appears on load) The author component will call from the API and display the quote author */}
      <div id="author">- {author}</div> 

    </div>
  );
}