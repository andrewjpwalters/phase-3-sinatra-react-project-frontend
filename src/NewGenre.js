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
            <h1>Hello from New Genre!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="new genre"
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default NewGenre