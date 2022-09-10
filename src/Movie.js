import React, { useState } from "react";
import EditMovieComment from "./EditMovieComment";

function Movie({ name, genre, year, comment, onMovieDelete, onUpdateMovie }) {
    return (
        <li>
            <span>{name}</span>
            <span>{genre}</span>
            <span>{year}</span>
            <p>{comment}</p>
            <button onClick={onUpdateMovie}>Edit Comment</button>
            <button onClick={onMovieDelete}>Delete Movie</button>
        </li>
    )
}

export default Movie