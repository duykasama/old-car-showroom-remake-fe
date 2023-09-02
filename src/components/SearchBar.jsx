import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  brands,
  models,
  bodyStyles,
  transmissions,
  fuelTypes,
} from "../data/carData.json";

function SearchBar() {
  const [searchData, setSearchData] = useState({ search: "" });
  const [filterData, setFilterData] = useState({
    brand: "",
    model: "",
    bodyStyle: "",
    transmission: "",
    fuelType: "",
  });

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchData);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    console.log(filterData);
  };

  const handleSearchDataChange = (event) => {
    setSearchData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilterDataChange = (event) => {
    setFilterData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="col-span-1 flex flex-col gap-8 p-4 bg-gray-300 rounded h-fit">
      <div>
        <h2 className="text-2xl font-bold mb-2">Search</h2>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleSearchDataChange}
            className="p-4 rounded border text-gray-600 w-full"
          />
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-1/3 right-5 cursor-pointer hover:scale-125"
            />
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Filter</h2>
        <form
          onSubmit={handleFilter}
          className="flex flex-col items-center gap-4"
        >
          <select
            name="brand"
            onChange={handleFilterDataChange}
            className="p-4 border w-full text-gray-600"
          >
            <option hidden>Brand</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <select
            name="model"
            onChange={handleFilterDataChange}
            className="p-4 border w-full text-gray-600"
          >
            <option hidden>Model</option>
            {models.map((model, idx) => (
              <option key={idx} value={model}>
                {model}
              </option>
            ))}
          </select>
          <select
            name="bodyStyle"
            onChange={handleFilterDataChange}
            className="p-4 border w-full text-gray-600"
          >
            <option hidden>Body style</option>
            {bodyStyles.map((style, idx) => (
              <option key={idx} value={style}>
                {style}
              </option>
            ))}
          </select>
          <select
            name="transmission"
            onChange={handleFilterDataChange}
            className="p-4 border w-full text-gray-600"
          >
            <option hidden>Transmission</option>
            {transmissions.map((transmission, idx) => (
              <option key={idx} value={transmission}>
                {transmission}
              </option>
            ))}
          </select>
          <select
            name="fuelType"
            onChange={handleFilterDataChange}
            className="p-4 border w-full text-gray-600"
          >
            <option hidden>Fuel type</option>
            {fuelTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div>Price: [ $0 - $1000000 ]</div>
          <input
            type="range"
            min={100}
            max={500}
            minLength={200}
            className="w-full"
          />
          <button className="py-2 px-4 rounded border w-fit bg-red-500 font-semibold text-white">
            See results
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
