import React from "react";
import GenreList from "./GenreList";

function FilterByGenre({ genres, onFilterChange }) {

    const genreData = genres.map((genreObj) => {
        return <GenreList
            key={genreObj.id}
            value={genreObj.id}
            name={genreObj.name}
        />
    })


    return (
        <div className="mt-4">
            <h3>Filter Movies by Genre</h3>
            <form>
                <select
                    id="genre"
                    className="form-control"
                    onChange={e => onFilterChange(e.target.value)}
                >
                    <option>Choose a Genre</option>
                    {genreData}
                </select>
            </form>
        </div>
    )
}

export default FilterByGenre