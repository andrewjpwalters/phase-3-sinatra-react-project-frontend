import React, { useState } from "react";

function EditMovieComment({ id, comment, onUpdateMovie }) {
    const [commentBody, setCommentBody] = useState(comment)

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: commentBody,
            }),
        })
            .then((r) => r.json())
            .then((updatedMovie) => onUpdateMovie(updatedMovie))
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control mb-1"
                    name="comment"
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                />
                <button className="text-center btn btn-outline-dark mb-1" type="submit" value="Save">Save</button>
            </div>
        </form>
    )
}

export default EditMovieComment