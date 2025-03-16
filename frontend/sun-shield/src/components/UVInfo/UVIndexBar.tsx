import React from "react";

// Define props interface
interface UVIndexBarProps {
    uvIndex: number;
    location: string;
}

// UV levels with corresponding colors
const uvLevels = [
    { label: "Low", color: "#B7EB8F", range: [0, 2] }, // Light Green
    { label: "Moderate", color: "#FFF1B8", range: [3, 5] }, // Light Yellow
    { label: "High", color: "#FFD591", range: [6, 7] }, // Light Orange
    { label: "Very High", color: "#FFA39E", range: [8, 10] }, // Light Red
    { label: "Extreme", color: "#FF4D4F", range: [11, 20] }, // Dark Red
];

// Function to determine UV level category based on index
const getUVLevel = (uvIndex: number) => {
    return uvLevels.find(level => uvIndex >= level.range[0] && uvIndex <= level.range[1]) || uvLevels[0];
};

const UVIndexBar: React.FC<UVIndexBarProps> = ({ uvIndex, location }) => {
    const uvLevel = getUVLevel(uvIndex);

    return (
        <div style={{
            textAlign: "center",
            padding: "15px",
            maxWidth: "500px",
            margin: "auto",
            borderRadius: "8px",
            border: "2px solid #ccc",
            backgroundColor: uvLevel.color,
            transition: "background-color 0.3s ease-in-out"
        }}>
            <h3 style={{ margin: "0 0 10px", color: "#333" }}>UV Index for {location}</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
                {uvIndex} - {uvLevel.label}
            </p>
        </div>
    );
};

export default UVIndexBar;
