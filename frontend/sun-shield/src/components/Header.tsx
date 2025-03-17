
import { useNavigate } from "react-router-dom";
import { TabList, Tab } from "@fluentui/react-components";
import React from "react";
import { WeatherSunnyLow24Color } from "@fluentui/react-icons";

const Header = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("home");

  // @ts-expect-error data type is not defined
  const handleTabSelect = (_, data) => {
    setSelectedValue(data.value);

    switch (data.value) {
      case "home":
        navigate("/");
        break;
      case "infoTab":
        navigate("/infoTab");
        break;
      case "protection":
        navigate("/protection");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <header style={{
      background: "#E8C33080",
      padding: "1rem",
      display: "flex", // Enables horizontal layout
      alignItems: "center", // Vertically align items
      justifyContent: "space-between", // Spreads items across the header
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>SunShield</h1>
        <WeatherSunnyLow24Color style={{ color: "orange", marginLeft: "8px" }} />
      </div>
    <TabList 
      selectedValue={selectedValue}
      onTabSelect={handleTabSelect}
    >
      <Tab value="home">Home</Tab>
      <Tab value="infoTab">Information</Tab>
      <Tab value="protection">Protection</Tab>
    </TabList>
    </header>
  );
};

export default Header;
