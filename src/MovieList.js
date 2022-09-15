import React from "react";
import Movie from "./Movie";

function MovieList({ movies, onMovieDelete, onUpdateMovie }) {
    return (
        <div className="mt-4">
            <h3>Movie List</h3>
            <div>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        name={movie.name}
                        genre={movie.genre.name}
                        year={movie.year}
                        comment={movie.comment}
                        onMovieDelete={onMovieDelete}
                        onUpdateMovie={onUpdateMovie}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieList