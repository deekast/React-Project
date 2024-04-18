import React, { useState } from "react";

function StageFilter({ stages, onStageChange }) {
    const [selectedStage, setSelectedStage] = useState("All");

    const handleStageClick = (stage) => {
        setSelectedStage(stage); // Set local state
        onStageChange(stage); // Notify parent component
    };

    return (
        <div className="stages">
            <h5>Stage Filter</h5>
            {stages.map((stage) => (
                <button
                    key={stage}
                    className={selectedStage === stage ? "selected" : ""}
                    onClick={() => handleStageClick(stage)}
                >
                    {stage}
                </button>
            ))}
        </div>
    );
}

export default StageFilter;
