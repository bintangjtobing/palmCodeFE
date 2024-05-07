'use client'
import React from "react";
import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";

const country = [
  { label: "Germany", value: "germany", flag: "🇩🇪", flagSrc: "https://flagcdn.com/de.svg" },
  { label: "United States", value: "united-states", flag: "🇺🇸", flagSrc: "https://flagcdn.com/us.svg" },
  { label: "United Kingdom", value: "united-kingdom", flag: "🇬🇧", flagSrc: "https://flagcdn.com/gb.svg" },
  { label: "France", value: "france", flag: "🇫🇷", flagSrc: "https://flagcdn.com/fr.svg" },
  { label: "Denmark", value: "denmark", flag: "🇩🇰", flagSrc: "https://flagcdn.com/dk.svg" },
];

export default function AutocompleteElement() {
  return (
    <>
        <div className="flex flex-wrap w-full gap-4 md:flex-nowrap">
        <Autocomplete 
          defaultItems={country}
          label="Select Country" 
          className="w-full h-full"
          radius="none"
          color="default"
        >
          {(country) => <AutocompleteItem key={country.value} startContent={<Avatar alt={country.label} className="w-6 h-6" src={country.flagSrc} />} value={country.value}>{country.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
    </>
  );
}
