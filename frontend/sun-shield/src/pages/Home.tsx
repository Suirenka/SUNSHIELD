import React from "react";
import UVIndexBar from "../components/UVInfo/UVIndexBar";
import { ToggleButton, Tooltip, TooltipProps } from "@fluentui/react-components";
import { bundleIcon, ServiceBellFilled, ServiceBellRegular } from "@fluentui/react-icons";
import LocationBox from "../components/LocationBox";
import UVInfoTable from "../components/UVInfoTable";


function Home(props: Partial<TooltipProps>) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <LocationBox />
      </div>
    </>
  );
}

export default Home;
