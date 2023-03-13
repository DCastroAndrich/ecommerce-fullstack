import { useLocation } from "react-router-dom";
import PopularProductsContainer from "../layouts/PopularProductsContainer";
import { useState } from "react";

const ProductsList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });

  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="m-5 text-2xl font-semibold">Men Shoes</h2>
        <div className="m-5">
          <span className="text-lg font-medium">Filter Products:</span>
          <select
            defaultValue="defaultGenre"
            name="categories"
            onChange={handleFilters}
            className="mx-5 p-3"
          >
            <option value="defaultGenre" disabled>
              Genre
            </option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          <select
            defaultValue="defaultSize"
            name="size"
            onChange={handleFilters}
          >
            <option value="defaultSize" disabled>
              Size
            </option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div className="m-5">
          <span className="text-lg font-medium">Sort Products:</span>
          <select
            defaultValue="defaultNewest"
            className="mx-5 p-3"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest" >
              Newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <PopularProductsContainer cat={category} filters={filters} sort={sort} />
    </>
  );
};

export default ProductsList;
