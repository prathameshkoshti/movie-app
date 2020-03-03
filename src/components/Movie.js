import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <div className="movies_container">
                <div className="movie_details_grid">
                    <div className="poster">
                        <img src={this.props.movie.Poster} width="250px" alt={this.props.movie.Title} />
                        
                    </div>
                    <div className="movie_data">
                        <h2>
                            {this.props.movie.Title}
                            <em className="year">&nbsp;({this.props.movie.Year})&nbsp;</em>
                            <span className="rated">{this.props.movie.Rated}</span>
                        </h2>
                        <div className="dataset-1">
                            <span className="production">{this.props.movie.Production}</span><span>|</span> 
                            <span className="runtime">{this.props.movie.Runtime}</span><span>|</span>
                            <span className="genre">{this.props.movie.Genre}</span><span>|</span>
                            <span>{this.props.movie.Released} ({this.props.movie.Country})</span>
                        </div>
                        <span className="language">
                            <em>{this.props.movie.Language}</em>
                        </span>
                        <div className="plot">
                            {this.props.movie.Plot}
                        </div>
                        <div className="dataset-2">
                            <span>Director</span>
                            <strong className="director">{this.props.movie.Director}</strong>
                            <span>Stars</span>
                            <strong className="stars">{this.props.movie.Actors}</strong>
                            <span>Writers</span>
                            <span className="writers">{this.props.movie.Writer}</span>
                            <span>Box Office</span>
                            <strong className="box_office">{this.props.movie.BoxOffice}</strong>                            
                            <span>Awards</span>
                            <strong className="awards">{this.props.movie.Awards}</strong>
                            <span>
                                Ratings
                            </span>
                            <span className="ratings">
                                <span className="imdb">
                                    <i class="fab fa-imdb fa-lg"></i>&nbsp;
                                    <a href={`https://www.imdb.com/title/${this.props.movie.imdbID}/`} target="_blank">{this.props.movie.imdbRating}</a>&nbsp;
                                </span>
                                &nbsp;
                                <span>Metacritic:</span>
                                <span className="metaCritic">
                                    {this.props.movie.Metascore}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* {JSON.stringify(this.props.movie)} */}
            </div>
        )
    }
}
