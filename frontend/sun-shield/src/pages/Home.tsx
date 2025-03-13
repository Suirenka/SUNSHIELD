import React from "react";
import UVIndexBar from "../components/UVInfo/UVIndexBar";
import { Button, ButtonProps, makeStyles, ToggleButton, Tooltip, TooltipProps } from "@fluentui/react-components";
import {
  bundleIcon,
  ServiceBellFilled,
  ServiceBellRegular,
} from "@fluentui/react-icons";
import LocationBox from "../components/LocationBox";
import UVInfoTable from "../components/UVInfoTable";

const ServiceBell = bundleIcon(ServiceBellFilled, ServiceBellRegular);

function Home(props: Partial<TooltipProps>) {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const toggleChecked = React.useCallback(
    (buttonIndex: number) => {
      switch (buttonIndex) {
        case 1:
          setChecked1(!checked1);
          break;
        case 2:
          setChecked2(!checked2);
          break;
      }
    },
    [checked1, checked2]
  );
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <LocationBox />
        <SearchButton />
      </div>
      <UVIndexBar />
      <UVInfoTable />
      <Tooltip content="Turn On/Off Reminder for Going Out" relationship="label" {...props}>
        <ToggleButton
          appearance="outline"
          icon={<ServiceBell />}
          onClick={() => toggleChecked(3)}
        >
          Reminder
        </ToggleButton>
      </Tooltip>
    </>
  );
}

export const SearchButton = (props: ButtonProps) => (
  <Button {...props}>Search</Button>
);

export default Home;
