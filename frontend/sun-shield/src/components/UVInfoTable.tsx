import React from "react";
import { Table, TableRow, TableCell, TableBody } from "@fluentui/react-components";
import UVInfoText from "./UVInfo/UVInfoText";

// Define props interface
interface UVInfoTableProps {
  location: string;
  uvIndex: number | null;
}

const UVInfoTable: React.FC<UVInfoTableProps> = ({ location, uvIndex }) => {
  // Determine UV Level Text
  const getUVLevelText = (index: number | null) => {
    if (index === null) return "Loading...";
    if (index <= 2) return `UV Level - ${index} (Low)`;
    if (index <= 5) return `UV Level - ${index} (Moderate)`;
    if (index <= 7) return `UV Level - ${index} (High)`;
    if (index <= 10) return `UV Level - ${index} (Very High)`;
    return `UV Level - ${index} (Extreme)`;
  };

  // Determine Sun Protection Recommendation
  const getProtectionLevel = (index: number | null) => {
    if (index === null) return "Loading...";
    if (index <= 2) return "Minimal protection required.";
    if (index <= 5) return "Wear sunglasses and use SPF 30+ sunscreen.";
    if (index <= 7) return "Wear a hat, SPF 50+ sunscreen, and stay in the shade.";
    if (index <= 10) return "Avoid outdoor activities, use full protection.";
    return "Stay indoors if possible! Very dangerous UV exposure.";
  };

  // Determine Recommendation on Going Out
  const getRecommendation = (index: number | null) => {
    if (index === null) return "Loading...";
    if (index <= 2) return "Safe to go outside without sun protection.";
    if (index <= 5) return "You can go outside, but use sunscreen.";
    if (index <= 7) return "Limit outdoor activities during peak sun hours.";
    if (index <= 10) return "Avoid going outside for prolonged periods.";
    return "Highly dangerous UV levels. Stay indoors!";
  };

  return (
    <Table
      style={{
        background: "#EBE89E69",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell>
            <UVInfoText info={getUVLevelText(uvIndex)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <UVInfoText info={getProtectionLevel(uvIndex)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <UVInfoText info={getRecommendation(uvIndex)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <UVInfoText info={`Location: ${location}`} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UVInfoTable;
