import React, { useState } from "react";
import { GlobeSearch24Regular } from "@fluentui/react-icons";
import type { FieldProps } from "@fluentui/react-components";
import { Field, Input, SearchBox } from "@fluentui/react-components";
import type { SearchBoxProps } from "@fluentui/react-components";


export const LocationBox = (props: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState("Enter Location");

  return (
    <Field >
      <SearchBox {...props} value={inputValue} onFocus={() => {
        if (inputValue === "Enter Location") {
          setInputValue("");
        }
      }} />
    </Field>
  );
};

export default LocationBox;