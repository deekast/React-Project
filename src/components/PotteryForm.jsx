import { useState } from "react";

// Default form data for easy resets
const defaultFormData = {
    id: '',
    name: '',
    vesselType: '',
    clayBody: '',
    glaze1: '',
    glaze2: '',
    stage: '',
    comments: '',
    imgUrl: ''
};

function PotteryForm({ setPots }) {
    const [formData, setFormData] = useState(defaultFormData);

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/pottery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newPotObj => {
            setFormData(defaultFormData); // Reset form
            setPots(pots => [...pots, newPotObj]); // Update pots list
        })
        .catch(error => console.error('Error adding new pottery:', error));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <form className='pot-form' onSubmit={handleSubmit}>
            <h2>Add New Pots</h2>

            <label htmlFor="imgUrl">Image URL:</label>
            <input name="imgUrl"
                   value={formData.imgUrl}
                   onChange={handleInputChange} />

            <label htmlFor="name">Name:</label>
            <input name="name"
                   value={formData.name}
                   onChange={handleInputChange} />

            <label htmlFor="vesselType">Vessel Type:</label>
            <input name="vesselType"
                   value={formData.vesselType}
                   onChange={handleInputChange} />

            <label htmlFor="clayBody">Clay Body:</label>
            <input name="clayBody"
                   value={formData.clayBody}
                   onChange={handleInputChange} />

            <label htmlFor="glaze1">First Glaze:</label>
            <input name="glaze1"
                   value={formData.glaze1}
                   onChange={handleInputChange} />

            <label htmlFor="glaze2">Second Glaze (top):</label>
            <input name="glaze2"
                   value={formData.glaze2}
                   onChange={handleInputChange} />

            <label htmlFor="stage">Stage:</label>
            <input name="stage"
                   value={formData.stage}
                   onChange={handleInputChange} />

            <label htmlFor="comments">Comments:</label>
            <input name="comments"
                   value={formData.comments}
                   onChange={handleInputChange} />

            <button type="submit">Add Pot</button>
        </form>
    );
}

export default PotteryForm;
