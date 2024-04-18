import { useState } from "react";

function PotteryForm( {setPots}) {

    const [formData, setFormData] = useState( {
        id: '',
        name: '',
        vesselType:'',
        clayBody: '',
        glaze1: '',
        glaze2: '',
        stage: '',
        comments: '',
        imgUrl: ''
    })

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:30001/pottery',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( formData )
        })
        .then(rest => rest.json())
        .then(newPotObj => {
            setFormData({  id: '', name: '', vesselType:'', clayBody: '', glaze1: '', glaze2: '', stage: '', comments: '', imgUrl: ''})
            setPots( pots => [...pots, newPotObj])
        })
    }


    return (
        <form className='pot-form' onSubmit = {handleSubmit}>
            <h2> Add new Pots</h2>

            <label htmlFor="imageUrl">Image URL:</label>
            <input name="imageUrl"
            value={ formData.imageURL}
            onChange ={ (event) => setFormData({...formData, imgUrl: event.target.value} ) }
            />

            <label htmlFor="name">Name:</label>
            <input name="name"
            value={ formData.name}
            onChange ={ (event) => setFormData({...formData, name: event.target.value} ) }
            />

            <label htmlFor="vesselType">Vessel Type: </label>
            <input name="vesselType"
            value={ formData.vesselType}
            onChange ={ (event) => setFormData({...formData, vesselType: event.target.value} ) }
            />

            <label htmlFor="clayBody">Clay Body:</label>
            <input name="clayBody"
            value={ formData.clayBody}
            onChange ={ (event) => setFormData({...formData, clayBody: event.target.value} ) }
            />

            <label htmlFor="glaze1">First Glaze:</label>
            <input name="glaze1"
            value={ formData.glaze1}
            onChange ={ (event) => setFormData({...formData, glaze1: event.target.value} ) }
            />

            <label htmlFor="glaze2">Second Glaze (top):</label>
            <input name="glaze2"
            value={ formData.glaze2}
            onChange ={ (event) => setFormData({...formData, glaze2: event.target.value} ) }
            />

            <label htmlFor="stage">Stage:</label>
            <input name="stage"
            value={ formData.stage}
            onChange ={ (event) => setFormData({...formData, stage: event.target.value} ) }
            />

            <label htmlFor="comments">Comments:</label>
            <input name="comments"
            value={ formData.comments}
            onChange ={ (event) => setFormData({...formData, comments: event.target.value} ) }
            />

            

            

        </form>
    )
}


export default PotteryForm