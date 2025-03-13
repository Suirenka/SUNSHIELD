import React from "react";
import UVIndexBar from "../components/UVIndexBar";
import { makeStyles, ToggleButton } from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";
import LocationBox from "../components/LocationBox";
import UVInfoTable from "../components/UVInfoTable";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

function Home() {
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
      <LocationBox />
      <UVIndexBar />
      <UVInfoTable />
      <ToggleButton
        appearance="outline"
        icon={<CalendarMonth />}
        onClick={() => toggleChecked(3)}
      >
        Reminder
      </ToggleButton>
    </>
  );
}

export default Home;
