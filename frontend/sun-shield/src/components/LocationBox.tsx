import React, { useState } from "react";
import { GlobeSearch24Regular } from "@fluentui/react-icons";
import type { SearchBoxProps } from "@fluentui/react-components";
import { Field, SearchBox, Listbox, Option } from "@fluentui/react-components";

const australianCities = [
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Canberra", "Hobart", "Darwin", "Gold Coast", "Newcastle"
];

export const LocationBox = (props: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState(australianCities);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event: React.SyntheticEvent, data: { value: string }) => {
    const value = data.value;
    setInputValue(value);

    // Filter cities based on input
    if (value) {
      const filtered = australianCities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleCitySelect = (city: string) => {
    setInputValue(city);
    setShowDropdown(false);
  };

  return (
    <Field>
      <div style={{ position: "relative", width: "300px" }}>
        <SearchBox
          {...props}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay to allow click
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
