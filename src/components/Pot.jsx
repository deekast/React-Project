import React from 'react';

function Pot({ pot, updatePotStage }) {

    
  return (
    <div>
      <img src={pot.imgUrl} alt={pot.name} style={{ width: "100px", height: "100px" }} />
      <h2>{pot.name}</h2>
      <select value={pot.stage} onChange={(e) => updatePotStage(pot.id, e.target.value)}>
        <option value="To Throw">To Throw</option>
        <option value="To Trim">To Trim</option>
        <option value="To Bisque Fire">To Bisque Fire</option>
        <option value="To Glaze">To Glaze</option>
        <option value="To Final Fire">To Final Fire</option>
        <option value="Finished">Finished</option>
      </select>
      <p>{pot.comments}</p>
    </div>
  );
}

export default Pot;
