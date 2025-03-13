import React from "react";

const uvLevels = [
    { label: "Low", color: "#B7EB8F" }, // Light Green
    { label: "Moderate", color: "#FFF1B8" }, // Light Yellow
    { label: "High", color: "#FFD591" }, // Light Orange
    { label: "Very High", color: "#FFA39E" }, // Light Red
];

const UVIndexBar = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            border: "1px solid #ccc",
            width: "100%",
            maxWidth: "500px",
        }}>
            <div style={{ padding: "10px", background: "white", flex: "1" }}>UV Index</div>
            {uvLevels.map((level) => (
                <div key={level.label} style={{
                    flex: "1",
                    backgroundColor: level.color,
                    textAlign: "center",
                    padding: "10px"
                }}>
                    {level.label}
                </div>
            ))}
        </div>
    );
};

export default UVIndexBar;
