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
import { searchPosts } from "../lib/api/fetchPosts";
import axios from "../lib/api/axios";
import endPoints from "../data/endPoints.json";

function SearchBar({ changePosts, changeLoadingStatus }) {
  const [searchKeyword, setsearchKeyword] = useState("");
  const [price, setPrice] = useState(0);
  const [filterData, setFilterData] = useState({
    brand: "",
    model: "",
    bodyStyle: "",
    transmission: "",
    fuelType: "",
  });

  const handleSearch = (event) => {
    event.preventDefault();
    changeLoadingStatus(true);
    const searchPosts = async () => {
      try {
        const response = await axios.get(endPoints.SEARCH_POSTS, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { pageSize: 12, offset: 1, keyword: searchKeyword },
          withCredentials: true,
        });
        changePosts(response.data);
        await new Promise((r) => setTimeout(r, 300));
        changeLoadingStatus(false);
      } catch {
        console.log("an error occurred");
      }
    };
    searchPosts();
  };

  const handleFilter = (event) => {
    event.preventDefault();
    changeLoadingStatus(true);
    const filterPosts = async () => {
      try {
        const response = await axios.get(endPoints.FILTER_POSTS, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { ...filterData, minPrice: Math.max(0, price) },
          withCredentials: true,
        });
        changePosts(response.data);
        await new Promise((r) => setTimeout(r, 300));
        changeLoadingStatus(false);
      } catch {
        console.log("an error occurred");
      }
    };
    filterPosts();
  };

  const handlesearchKeywordChange = (event) => {
    setsearchKeyword(event.target.value);
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
            required
            onChange={handlesearchKeywordChange}
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
          <div>Price: [ ${price} - $1000000 ]</div>
          <input
            type="range"
            min={0}
            max={1000000}
            step={1000}
            minLength={200}
            onChange={(event) => setPrice(event.target.value)}
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
