import * as React from "react";
import { Text } from "@fluentui/react-components";

interface UVLevelProps {
    info: string;
}

export const UVInfoText: React.FC<UVLevelProps> = ({ info }) => (
    <Text>{info}</Text>
);

export default UVInfoText;