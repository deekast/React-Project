// Your PotteryContainer component should ideally look something like this:
import React from "react";
import Pot from "./Pot";

function PotteryContainer({ pots, updatePotStage }) {
  return (
    <div className="pottery-grid">
      {pots.map(pot => (
        <div key={pot.id} className="pottery-item">
          <Pot pot={pot} updatePotStage={updatePotStage} />
        </div>
      ))}
    </div>
  );
}

export default PotteryContainer;
