import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => ({
    options: (await fetchCities(inputValue)).data.map((city) => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    })),
  });

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={(enteredData) => {
        setSearchValue(enteredData);
        onSearchChange(enteredData);
      }}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
