import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {   //onSearchChange, a prop function provided by the parent component.
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {  //loadOptions is defined as an arrow function that takes one parameter, 
    return fetch(                        //inputValue. This parameter represents the current value entered by the user in the search input.
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,  //using geo Api for search suggestion as the user type.
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate     //The <AsyncPaginate> component from react-select-async-paginate is used to create a search input that dynamically loads options as the user types.
      placeholder="Search for city"
      debounceTimeout={600}   //This prop sets a delay (in milliseconds) before the search query is sent to fetch options.
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}  //loadOptions is a function that fetches the options from a server or another source based on the user's input.
    />
  );
};

export default Search;