import PopularProductsContainer from "../layouts/PopularProductsContainer";

const ProductsList = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="m-5 text-2xl font-semibold">Men Shoes</h2>
        <div className="m-5">
          <span className="text-lg font-medium">Filter Products:</span>
          <select className="mx-5 p-3">
            <option disabled selected>
              Genre
            </option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          <select>
            <option disabled selected>
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
          <select className="mx-5 p-3">
            <option disabled selected>
              Newest
            </option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
            <option>In Stock</option>
          </select>
        </div>
      </div>
      <PopularProductsContainer />
    </>
  );
};

export default ProductsList;
