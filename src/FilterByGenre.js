import React from "react";
import GenreList from "./GenreList";

function FilterByGenre({ genres, onFilterChange }) {

    const genreData = genres.map((genreObj) => {
        return <GenreList
            key={genreObj.id}
            name={genreObj.name}
        />
    })


    return (
        <nav>
            <select
                id="genre"
                value={genreData.name}
                onChange={e => onFilterChange(e.target.value)}
            >
                <option>Choose a Genre</option>
                {genreData}
            </select>
        </nav>
    )
}

export default FilterByGenre