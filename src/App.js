import React, { useState, useEffect } from "react";
import NewMovie from "./NewMovie";
import MovieList from "./MovieList";
import FilterByGenre from "./FilterByGenre";
import NewGenre from "./NewGenre";
import { Container } from 'react-bootstrap'

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([])
  const [filterGenre, setFilterGenre] = useState("Choose a Genre")

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/genres")
      .then((r) => r.json())
      .then((genres) => setGenres(genres))
  }, [])

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
  };

  function handleAddGenre(newGenre) {
    setGenres([...genres, newGenre]);
  };

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies)
  };

  function handleUpdateMovie(updatedMovieObj) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === updatedMovieObj.id) {
        return updatedMovieObj;
      } else {
        return movie;
      }
    })
    setMovies(updatedMovies)
  };

  const filteredMovies = movies.filter((movie) =>
    movie.genre.name === filterGenre
  )

  return (
    <Container>
      <h1 className="text-center mb-3">My Movie List</h1>
      <NewGenre onAddGenre={handleAddGenre} />
      <NewMovie genres={genres} onAddMovie={handleAddMovie} />
      <FilterByGenre genres={genres} onFilterChange={setFilterGenre} />
      <MovieList
        movies={filterGenre === "Choose a Genre" ? movies : filteredMovies}
        onMovieDelete={handleDeleteMovie}
        onUpdateMovie={handleUpdateMovie}
      />
    </Container>
  );
}

export default App;
