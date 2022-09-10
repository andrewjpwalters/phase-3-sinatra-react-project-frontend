import React from "react";

function GenreList({ name, id }) {
    return (
        <option value={id}>{name}</option>
    )
}

export default GenreList