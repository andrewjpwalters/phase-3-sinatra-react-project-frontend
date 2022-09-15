import React, { useState } from "react";
import GenreList from "./GenreList";


function NewMovie({ genres, onAddMovie }) {

    const [formData, setFormData] = useState({
        name: "",
        genre_id: "",
        year: "",
        comment: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                onAddMovie(data);
                setFormData({
                    name: "",
                    genre_id: "",
                    year: "",
                    comment: ""
                })
                console.log("Success", data);
            })
            .catch((error) => {
                console.error("Error", error);
            })
    }

    function handleChange(event) {
        const key = event.target.id
        const value = event.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const genreData = genres.map((genreObj) => {
        return <GenreList
            key={genreObj.id}
            id={genreObj.id}
            name={genreObj.name}
        />
    })

    return (
        <div className="mt-4">
            <h3>Add a New Movie</h3>
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
                <div className="form-group gap-2">
                    <div className="col-auto">
                        <input
                            type="text"
                            id="name"
                            className="form-control mb-1"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Title"
                        />
                    </div>
                    <div className="col-auto">
                        <select
                            id="genre_id"
                            className="form-select mb-1"
                            value={formData.genre_id}
                            onChange={handleChange}
                        >
                            <option value="null">Choose a Genre</option>
                            {genreData}
                        </select>
                    </div>
                    <div className="col-auto">
                        <input
                            type="text"
                            id="year"
                            className="form-control mb-1"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="Year"
                        />
                    </div>
                    <div className="col-auto">
                        <input
                            type="text"
                            id="comment"
                            className="form-control mb-1"
                            value={formData.comment}
                            onChange={handleChange}
                            placeholder="Write a Comment..."
                        />
                    </div>
                    <div className="col-auto">
                        <input className="btn btn-outline-dark" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewMovie