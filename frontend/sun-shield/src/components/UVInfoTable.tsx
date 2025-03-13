import React from "react";
import { Table, TableRow, TableCell, TableHeader, TableHeaderCell, TableBody } from "@fluentui/react-components";

export const UVInfoTable = () => {
    return (
        <Table>

            <TableBody>
                <TableRow>
                    <TableCell>Row 1, Col 2</TableCell>
                    <TableCell>Row 1, Col 3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>Row 2, Col 2</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default UVInfoTable;
