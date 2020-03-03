import React, { Component } from 'react';
import Movie from './MovieItem';

class MoviesGrid extends Component {
    render() {

        let moviesGrid = Array.from(this.props.movies).map((movie, i) => {
            return <Movie key={i} movie={movie} displayMovieDetails={this.props.displayMovieDetails} />
        });

        return (
            <div className="movies_container">
                <span className="search_query">{this.props.results}<strong>{this.props.searchKey}</strong></span>
                <div className="movie_grid">
                    {moviesGrid}
                </div>
            </div>
        )
    }
}

export default MoviesGrid;