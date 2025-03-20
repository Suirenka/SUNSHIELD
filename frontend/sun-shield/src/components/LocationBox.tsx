/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import type { SearchBoxProps } from "@fluentui/react-components";
import {
  Field,
  SearchBox,
  Listbox,
  Option,
  Button,
} from "@fluentui/react-components";

// Define props interface
interface LocationBoxProps extends SearchBoxProps {
  onLocationChange?: (location: string) => void;
}

const LocationBox: React.FC<LocationBoxProps> = ({
  onLocationChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [lastSearchTime, setLastSearchTime] = useState<number | null>(null);
  const navigate = useNavigate();

  // Load city data from Excel file
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/australian_postcodes.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);
        const cityList = jsonData
          .map((row) => row.Locality?.trim())
          .filter(Boolean) as string[];
        setCities(Array.from(new Set(cityList)));
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    };
    fetchCities();
  }, []);

  // Handle user input change
  const handleInputChange = (
    event: React.SyntheticEvent,
    data: { value: string }
  ) => {
    const value = data.value.replace(/[^a-zA-Z0-9 ]/g, "");
    setInputValue(value);

    if (value) {
      setFilteredCities(
        cities.filter((city) =>
          city.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // Handle city selection
  const handleCitySelect = (city: string) => {
    setInputValue(city);
    setShowDropdown(false);

    // Notify parent component (Home.tsx) about location change
    if (onLocationChange) {
      onLocationChange(city);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (!inputValue.trim()) return;

    const now = Date.now();
    if (lastSearchTime && now - lastSearchTime > 10000) {
      setSearchCount(0);
    }

    if (searchCount >= 3) {
      alert("You can only search 3 times within 10 seconds.");
      return;
    }

    setSearchCount(searchCount + 1);
    setLastSearchTime(now);

    // Notify parent component (Home.tsx) about location change
    if (onLocationChange) {
      onLocationChange(inputValue);
    }

    navigate(`/trends?location=${encodeURIComponent(inputValue)}`);
  };

  return (
    <Field
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <SearchBox
          {...props}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          placeholder="Enter Location"
        />

        <Button
          style={{ backgroundColor: "orange", color: "white" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {showDropdown && (
        <Listbox
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            border: "1px solid #ccc",
            zIndex: 10,
          }}
        >
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <Option key={city} onClick={() => handleCitySelect(city)}>
                {city}
              </Option>
            ))
          ) : (
            <Option disabled>No cities found</Option>
          )}
        </Listbox>
      )}
    </Field>
  );
};

export default LocationBox;
