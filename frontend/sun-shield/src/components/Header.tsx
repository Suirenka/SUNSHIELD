import React from "react";
import { Link } from "react-router-dom";
import {
  Tab,
  TabList,
} from "@fluentui/react-components";
import { WeatherSunnyLow24Color } from "@fluentui/react-icons";

const Header = () => {
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

      <TabList defaultSelectedValue="home" style={{ display: "flex" }}>
        <Tab value="home">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </Tab>
        <Tab value="trends">
          <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
            UV Trends
          </Link>
        </Tab>
        <Tab value="protection">
          <Link to="/protection" style={{ textDecoration: "none", color: "inherit" }}>
            Protection
          </Link>
        </Tab>
      </TabList>
    </header>
  );
};

export default Header;
