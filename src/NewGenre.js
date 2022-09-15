import React, { useState } from "react";

function NewGenre({ onAddGenre }) {

    const [formData, setFormData] = useState({
        name: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                onAddGenre(data);
                setFormData({
                    name: "",
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

    return (
        <>
            <h3>Create a New Genre:</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        className="form-control mb-1"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Add A New Genre"
                    />
                    <button className="btn btn-outline-dark" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default NewGenre