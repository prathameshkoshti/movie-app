import React, { Component } from 'react'

class Searchbar extends Component {

    constructor() {
        super();
        this.generateURL = this.generateURL.bind(this);
    }

    generateURL() {
        let searchKey = document.getElementById('search_input').value.trim();
        let url = `https://www.omdbapi.com/?s=${searchKey}&apikey=32b7125b&type=movie`;
        this.props.search(url, searchKey);
    }

    render() {
        let lists = Array.from(this.props.searchHistory).map((history, i) => {
            return <option key={i}>{history}</option>
        })
        return (
            <div className="search_container">
                <input type='search' id="search_input" list="search_history" />
                <button onClick={this.generateURL}>Search</button>
                <datalist id="search_history">
                    {lists}
                </datalist>
            </div>
        )
    }
}

export default Searchbar;
