import React from "react";
import { Table, TableRow, TableCell, TableHeader, TableHeaderCell, TableBody } from "@fluentui/react-components";
import LocationBox from "./LocationBox";
import UVIndexBar from "./UVInfo/UVIndexBar";
import UVInfoText from "./UVInfo/UVInfoText";

export const UVInfoTable = () => {
    const uvLevel = "UV Level - 9 (Very High)";
    const temperature = "Temp 30°, Cloudy";
    const protectionLevel = "Level of protection";
    const recommendation = "recomendation on going out or not";
    return (
        <Table style={{
            background: "#EBE89E69",
            padding: "10px",
            borderRadius: "8px",
        }}>

            <TableBody>

                <TableRow>
                    <TableCell>
                        <UVInfoText info={uvLevel} />
                    </TableCell>
                    <TableCell>
                        <UVInfoText info={temperature} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>
                        <UVInfoText info={protectionLevel} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>
                        <UVInfoText info={recommendation} />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default UVInfoTable;
