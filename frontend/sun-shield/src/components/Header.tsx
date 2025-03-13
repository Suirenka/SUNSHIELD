import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  makeStyles,
  Option,
  shorthands,
  useId,
  DropdownProps,
} from "@fluentui/react-components";
import { observer } from "mobx-react-lite"

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    ...shorthands.gap("2px"),
    maxWidth: "400px",
  },
});

function Header() {
  return (
    <header style={{ background: '#eee', padding: '1rem' }}>
      <h1>SunShield</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/uvindex" style={{ marginRight: '1rem' }}>UV Index</Link>
        <Link to="/protection">Protection</Link>
      </nav>
    </header>
  );
}

export default Header;
