import React, { useState } from "react";
import EditMovieComment from "./EditMovieComment";
import { Card, Button } from 'react-bootstrap';

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
        <Card className="text-center my-2 p-2" style={{ width: '18rem' }}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-1">{genre}</Card.Subtitle>
            <Card.Subtitle className='mb-2'>{year}</Card.Subtitle>
            {isEditing ? (
                <EditMovieComment
                    id={id}
                    comment={comment}
                    onUpdateMovie={handleUpdateComment}
                />
            ) : (
                <Card.Text>{comment}</Card.Text>
            )}
            <Button className="mb-1" variant="outline-dark" onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit Comment</Button>
            <Button variant="outline-dark" onClick={handleDeleteMovie}>Delete Movie</Button>
        </Card>
    )
}

export default Movie