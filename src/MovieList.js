import React from "react";

function MovieList({ movies, onMovieDelete, onUpdateMovie }) {
    return (
        <>
            <h1>Hello from Movie List!</h1>
            <ul>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        name={movie.id}
                        genre={movie.genre}
                        year={movie.year}
                        onMovieDelete={onMovieDelete}
                        onUpdateMovie={onUpdateMovie}
                    />
                ))}
            </ul>
        </>
    )
}

export default MovieList