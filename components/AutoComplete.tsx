'use client'
import React from "react";
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/autocomplete";
import { Providers } from "../app/providers";
// import {animals} from "./data";

const animals = [
    {label: "Germany", value: "germany"},
    {label: "United States", value: "united-states"},
    {label: "United Kingdom", value: "united-kingdom"},
    {label: "France", value: "france"},
    {label: "Denmark", value: "denmark"},
]

export default function AutocompleteElement() {
  return (
    <>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Autocomplete 
          label="Select Country" 
          className="w-full h-full"
          radius="none"
          color="default"
        >
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
    </>
  );
}
