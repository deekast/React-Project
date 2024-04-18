// src/components/PotteryContainer.jsx
import React from "react";
import Pot from "./Pot";


function PotteryContainer({ pots, updatePotStage }) {
  const mappedPots = pots.map(pot => (
    <Pot key={pot.id} pot={pot} updatePotStage={updatePotStage} />
  ));

  return (
    <>
      {mappedPots}
    </>
  );
}

export default PotteryContainer;
