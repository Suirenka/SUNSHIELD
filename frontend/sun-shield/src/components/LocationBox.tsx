import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import type { SearchBoxProps } from "@fluentui/react-components";
import { Field, SearchBox, Listbox, Option } from "@fluentui/react-components";

export const LocationBox = (props: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTimestamps, setSearchTimestamps] = useState<number[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/australian_postcodes.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        let cityList = jsonData
          .map((row: any) => row.Locality?.trim())
          .filter(Boolean);

        cityList = Array.from(new Set(cityList));

        setCities(cityList);
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleInputChange = (event: React.SyntheticEvent, data: { value: string }) => {
    const value = data.value;
//limited input
    if (/^[a-zA-Z0-9\s]*$/.test(value)) {
      const now = Date.now();
      const newTimestamps = searchTimestamps.filter(t => now - t < 10000);

      if (newTimestamps.length >= 3) {
        alert("You can only search 3 times within 10 seconds.");
        return;
      }

      newTimestamps.push(now);
      setSearchTimestamps(newTimestamps);

      setInputValue(value);

      if (value) {
        const filtered = cities.filter(city =>
          city.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    }
  };

  const handleCitySelect = (city: string) => {
    setInputValue(city);
    setShowDropdown(false);
  };

  return (
    <Field>
      <div style={{ position: "relative" }}>
        <SearchBox
          {...props}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          placeholder="Enter Location"
        />

        {showDropdown && (
          <Listbox style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            border: "1px solid #ccc",
            zIndex: 10
          }}>
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
