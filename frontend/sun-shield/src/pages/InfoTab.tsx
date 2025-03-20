/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import { read, utils } from "xlsx";
import Plot from "react-plotlyjs";
import type { Layout } from "plotly.js";

const InfoTab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button appearance="primary" onClick={() => navigate("/")}>
        ← Back to Home
      </Button>
      <ExcelChart />
      <InfoDataSourceFooter />
    </>
  );
};

function ExcelChart() {
  return <></>;
}

// --------------
// Footer Component
// --------------
function InfoDataSourceFooter() {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "0.8rem",
        color: "#666",
        marginTop: "2rem",
        padding: "1rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <p>
        <strong>Data Sources &amp; Attributions:</strong>
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          Incidence and mortality data from{" "}
          <a
            href="https://creativecommons.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons
          </a>{" "}
          and{" "}
          <a
            href="https://www.matthewproctor.com/australian_postcodes#downloadlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matthew Proctor
          </a>
          . Please see their{" "}
          <a
            href="https://creativecommons.org/licenses/by/3.0/au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms &amp; Conditions
          </a>{" "}
          for license details.
        </li>
      </ul>
    </div>
  );
}

export default InfoTab;
