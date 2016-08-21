import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions';

class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            term: ''
        };
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.getWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
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

// function mapStateToProps(state) {
//     return
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);