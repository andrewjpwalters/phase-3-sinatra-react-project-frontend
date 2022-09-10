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
        <>
            <h1>Hello from New Movie!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="title"
                />
                <select
                    id="genre_id"
                    value={formData.genre_id}
                    onChange={handleChange}
                >
                    <option value="null">Choose a Genre</option>
                    {genreData}
                </select>
                <input
                    type="text"
                    id="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="year"
                />
                <input
                    type="text"
                    id="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="comment"
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default NewMovie