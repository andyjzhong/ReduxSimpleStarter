import React from 'react';
import ReactDOM from 'react-dom';


const API_KEY = process.env.YOUTUBE_API_KEY;

// Create a new component. This component should produce some HTML.

const App = () => {
  console.log(API_KEY);
  return <div>Hi!</div>
}

// Take this compnent's generated HTML and place it onto the page.
ReactDOM.render(<App />, document.querySelector('.container'));
