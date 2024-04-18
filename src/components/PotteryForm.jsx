import { useState, useContext } from "react";



function PotteryForm({ setPots, pots }) {const [formData, setFormData] = useState({
    name: '',
    vesselType: '',
    clayBody: '',
    glaze1: '',
    glaze2: '',
    stage: '',
    comments: '',
    imgUrl: ''
});

const defaultImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWiBGsBpLmmAl-yaGwzepDwrbKxcWhdJFyQ&s";

function handleSubmit(event) {
    event.preventDefault();

    // Determine the next ID
    const nextId = pots.length > 0 ? Math.max(...pots.map(pot => parseInt(pot.id, 10))) + 1 : 1;

    const newPot = {
        ...formData,
        id: nextId,  // Set the next ID
        imgUrl: formData.imgUrl || defaultImageUrl  // Use default image if none provided
    };

        fetch('http://localhost:3000/pottery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newPot)
        })
        .then(res => res.json())
        .then(newPotObj => {
            setFormData({ // Reset the form
                name: '', vesselType: '', clayBody: '', glaze1: '', glaze2: '', stage: '', comments: '', imgUrl: ''
            });
            setPots(pots => [...pots, newPotObj]);  
            alert("Success: Pot added to the database!");
        })
        .catch(error => console.error('Error adding new pottery:', error));
    }


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
    <div className ="form-container">
        <form className='pottery-form' onSubmit={handleSubmit}>
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
        </div>
    );
}

export default PotteryForm;
