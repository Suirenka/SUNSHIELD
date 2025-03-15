import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import type { SearchBoxProps } from "@fluentui/react-components";
import { Field, SearchBox, Listbox, Option, Button } from "@fluentui/react-components";

const LocationBox = (props: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [lastSearchTime, setLastSearchTime] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/australian_postcodes.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);
        const cityList = jsonData.map((row) => row.Locality?.trim()).filter(Boolean) as string[];
        setCities(Array.from(new Set(cityList)));
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    };
    fetchCities();
  }, []);

  const handleInputChange = (event: React.SyntheticEvent, data: { value: string }) => {
    const value = data.value.replace(/[^a-zA-Z0-9 ]/g, ""); 
    setInputValue(value);

    if (value) {
      setFilteredCities(cities.filter((city) => city.toLowerCase().includes(value.toLowerCase())));
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleCitySelect = (city: string) => {
    setInputValue(city);
    setShowDropdown(false);
  };

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
    navigate(`/trends?location=${encodeURIComponent(inputValue)}`);
  };

  return (
    <Field>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", position: "relative" }}>
        <SearchBox
          {...props}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          placeholder="Enter Location"
        />

        <Button onClick={handleSearch}>Search</Button>

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
      </div>
    </Field>
  );
};

export default LocationBox;
