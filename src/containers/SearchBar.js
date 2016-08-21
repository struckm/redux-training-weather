import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            term: ''
        };
    }

    onInputChange = (event, value) => {

    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

export default SearchBar;