import React from 'react';

class Movie extends React.Component {
    fetchMovieDetails = (movieId) => {
        let url = `https://www.omdbapi.com/?i=${movieId}&apikey=32b7125b`
        this.props.displayMovieDetails(url);
    }
    render = () => {
        return (
            <div className="movie" onClick={this.fetchMovieDetails.bind(this, this.props.movie.imdbID)}>
                <div className="poster">
                    <img width="250px" height="374px" src={this.props.movie.Poster} alt={this.props.movie.Title} />
                </div>
                <div className="movies_details">
                    <h4>{this.props.movie.Title}</h4>
                    <span className="year">{this.props.movie.Year}</span>
                </div>
            </div>
        )
    }
}

export default Movie;
