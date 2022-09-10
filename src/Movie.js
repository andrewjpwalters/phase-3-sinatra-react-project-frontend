import React, { useState } from "react";
import EditMovieComment from "./EditMovieComment";

function Movie({ id, name, genre, year, comment, onMovieDelete, onUpdateMovie }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteMovie() {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE",
        });
        onMovieDelete(id)
    }

    function handleUpdateComment(updatedMovie) {
        setIsEditing(false);
        onUpdateMovie(updatedMovie)
    }

    return (
        <li>
            <span>{name}</span>
            <span>{genre}</span>
            <span>{year}</span>
            {isEditing ? (
                <EditMovieComment
                    id={id}
                    comment={comment}
                    onUpdateMovie={handleUpdateComment}
                />
            ) : (
                <p>{comment}</p>
            )}
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit Comment</button>
            <button onClick={handleDeleteMovie}>Delete Movie</button>
        </li>
    )
}

export default Movie