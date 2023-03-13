import { useEffect, useState } from "react";
import PopularProduct from "../components/PopularProduct";
/* import { popular } from "../data/data.js"; */
import axios from "axios";

const PopularProductsContainer = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products/?category=${cat}`
            : "http://localhost:5000/api/products/"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      filters &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(filters);
  console.log(sort);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="flex flex-wrap justify-between p-7">
      {filteredProducts.map((item) => (
        <PopularProduct item={item} key={item._id} />
      ))}
    </div>
  );
};

export default PopularProductsContainer;
