import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        // Initializes state for SearchBar
        this.state = { searchTerm: '' }
    }

    render() {
        // Returns an input that contains an event handler to set the state of Search Bar to the input value
        // Whenever the input is changed, display the input content by referencing it
        return(
            <div>
                <input onChange={(event) => this.setState({ searchTerm: event.target.value })} />
                <br />
                Value of input: {this.state.searchTerm}
            </div>
        );
    }
}

export default SearchBar;
