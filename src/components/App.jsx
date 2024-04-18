import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PotteryContainer from './PotteryContainer';
import PotteryForm from './PotteryForm';
import Home from './Home';
import StageFilter from './StageFilter'; // Assuming this component exists

function App() {
  const [pots, setPots] = useState([]);
  const [selectedStage, setSelectedStage] = useState("All");

  const stages = ["All", "To Throw", "To Trim", "To Bisque Fire", "To Glaze", "To Final Fire", "Finished"];

  useEffect(() => {
    fetch('http://localhost:3000/pottery')
      .then(res => res.json())
      .then(data => setPots(data));
  }, []);

  const updatePotStage = (id, newStage) => {
    const updatedPots = pots.map(pot => {
      if (pot.id === id) {
        return { ...pot, stage: newStage };
      }
      return pot;
    });

    setPots(updatedPots);

    fetch(`http://localhost:3000/pottery/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...updatedPots.find(pot => pot.id === id) }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Update successful", data);
      })
      .catch(error => console.error('Error updating pottery:', error));
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-pottery" element={
          <div className="grid with-sidebar">
            <StageFilter stages={stages} onStageChange={setSelectedStage} />
            <PotteryContainer pots={selectedStage === "All" ? pots : pots.filter(pot => pot.stage === selectedStage)} updatePotStage={updatePotStage} />
          </div>
        } />
        <Route path="/add-pottery" element={<PotteryForm pots = {pots} setPots={setPots} />} />
      </Routes>
    </div>
  );
}

export default App;
