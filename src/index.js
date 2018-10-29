import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar_class';

const API_KEY = process.env.YOUTUBE_API_KEY;

// Create a new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );

}

// Take this compnent's generated HTML and place it onto the page.
ReactDOM.render(<App />, document.querySelector('.container'));
