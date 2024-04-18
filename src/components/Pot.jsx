import { useState } from "react";

function Pot({ pot, pots, setPots}) {
    const [flipped, setFlipped] = useState( true )

    function flipPot() {
        setFlipped(!flipped)
    }

    function handleDelete(event) {
        event.stopPropagation(

            fetch(`http://localhost:3001/pors/${pot.id}`), {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                const filteredPots = pots.filter(p=> p.is !== pot.id)
                setPots(filteredPots)
})
}
return (
<div className ="pot-item" onClick = {flipPot}>
    {
        flipped
        ?
        <img src ={pot.imgURL} alt ={pot.className} />
        :
        <>
        <h3>{pot.name}</h3>
        <h4>{pot.vesselType}</h4>
        <button onCLick={ handleDelete }>Remove</button>
        </>

    }

</div>

)
}

