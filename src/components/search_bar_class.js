import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        // Initializes state for SearchBar
        this.state = { searchTerm: 'Placeholder Value' }
    }

    render() {
        // Returns an input that contains an event handler to set the state of Search Bar to the input value
        // Whenever the input is changed, display the input content by referencing it
        // When we tell the input that the value is provided by this.state.term, this makes it a controlled component
        // Its value only changes when the state changes
        // When the user types something, it doesn't change the value, it just triggers an event
        return(
            <div>
                <input
                    value={this.state.searchTerm}
                    onChange={(event) => this.setState({ searchTerm: event.target.value })} />
                <br />
                Value of input: {this.state.searchTerm}
            </div>
        );
    }
}

export default SearchBar;
