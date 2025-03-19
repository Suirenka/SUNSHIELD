import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { WeatherSunnyLow24Color } from "@fluentui/react-icons";

const useStyles = makeStyles(() => ({
  header: {
    background: "#E8C33080",
    padding: "1rem",
    display: "flex", // Enables horizontal layout
    alignItems: "center", // Vertically align items
    justifyContent: "space-between", // Spreads items across the header
  },
  brand: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  title: {
    margin: 0,
  },
  icon: {
    color: "orange",
    marginLeft: "8px",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.brand} onClick={() => navigate("/")}>
        <h1 className={classes.title}>SunShield</h1>
        <WeatherSunnyLow24Color className={classes.icon} />
      </div>
    </header>
  );
};

export default Header;
