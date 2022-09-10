import React, { useState, useEffect } from "react";
import NewMovie from "./NewMovie";
import MovieList from "./MovieList";
import Search from "./Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/genres")
      .then((r) => r.json())
      .then((genres) => setGenres(genres))
  })

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
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


  const displayedMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1> Hello from App!</h1>
      <NewMovie onAddMovie={handleAddMovie} />
      <Search search={search} onSearchChange={setSearch} />
      <MovieList
        movies={displayedMovies}
        onMovieDelete={handleDeleteMovie}
        onUpdateMovie={handleUpdateMovie}
      />
    </div>
  );
}

export default App;
