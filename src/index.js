import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.

const App = () => {
  return <div>Hi!</div>
}

// Take this compnent's generated HTML and place it onto the page.
ReactDOM.render(<App />, document.querySelector('.container'));
