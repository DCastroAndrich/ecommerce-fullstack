import { useLocation } from "react-router-dom";
//import AddToCartContainer from "../layouts/AddToCartContainer";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods.js";
//import FilterSingleContainer from "../layouts/FilterSingleContainer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addProduct } from "../redux/cartRedux.js";
import { useDispatch } from "react-redux";

const ProductSingle = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === "minus") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, size }));
  };

  return (
    <div>
      <div className="flex p-14">
        {/* IMG AND INFO CONTAINER */}
        <div className="flex-1">
          <img className="h-11/12 w-full" src={product.image} />
        </div>
        <div className="flex-1 px-14">
          <h2 className="text-4xl font-extralight">{product.title}</h2>
          <p className="my-5">{product.description}</p>
          <span className="text-4xl font-thin">$ {product.price}</span>

          <div className="my-8 flex">
            <div className="flex w-1/2 items-center justify-between">
              <div className="flex">
                <span className="text-xl font-extralight">Color</span>
                <div className="mx-1 h-8 w-8 cursor-pointer rounded-full border bg-white"></div>
                <div className="mx-1 h-8 w-8 cursor-pointer rounded-full border bg-black"></div>
              </div>
              <div className="mx-1">
                <span>Size</span>
                <select
                  className="mx-3 p-2"
                  onChange={(e) => setSize(e.target.value)}
                >
                  {product.size?.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 items-center justify-between">
            <div className="flex items-center font-bold">
              <button
                className=" text-violet-400 hover:text-violet-700"
                onClick={() => handleQuantity("minus")}
              >
                <RemoveIcon fontSize="large" />
              </button>
              <span className="mx-2 flex h-8 w-8 items-center justify-center rounded-md border border-violet-700">
                {quantity}
              </span>
              <button
                className="text-violet-400 hover:text-violet-700"
                onClick={() => handleQuantity("plus")}
              >
                <AddIcon fontSize="large" />
              </button>
            </div>
            <button
              className="rounded-md border border-violet-700 p-2 text-lg font-bold hover:bg-violet-700 hover:text-white"
              onClick={handleClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
