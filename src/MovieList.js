import React from "react";
import Movie from "./Movie";

function MovieList({ movies, onMovieDelete, onUpdateMovie }) {
    return (
        <>
            <h1>Hello from Movie List!</h1>
            <ul>
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
            </ul>
        </>
    )
}

export default MovieList