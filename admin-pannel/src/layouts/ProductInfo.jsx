import { Link } from "react-router-dom";
import Charts from "../components/Charts";
import { productData } from "../data/dummyData";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";

const ProductInfo = () => {
  return (
    <div className="w-4/5 p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-slate-700">Product</h1>
        <Link to="/newproduct">
          <button className="w-20 cursor-pointer rounded-md bg-emerald-400 p-2.5 text-emerald-700">
            Create
          </button>
        </Link>
      </div>
      {/* top */}
      <div className="flex">
        {/* left */}
        <div className="w-1/2">
          <Charts
            data={productData}
            dataKey1="Sales"
            title="Sales Performance"
          />
        </div>

        {/* right */}
        <div className="m-5 w-1/2 p-5 shadow-md">
          {/* rigth Top */}
          <div className="flex items-center ">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/1f893c7c14424f6f8f72a98101359ecb_9366/Zapatillas_Grand_Court_Blanco_F36483_01_standard.jpg"
              alt="product image"
              className="mr-5 h-14 w-14 rounded-full object-cover"
            />
            <span className="font-semibold">Adidas Grand Court</span>
          </div>

          {/* rigth bttm */}
          <div className="mt-5 flex flex-col ">
            <div className="flex w-36 justify-between">
              <span className="font-light">Id: </span>
              <span className="font-light">123</span>
            </div>
            <div className="flex w-36 justify-between">
              <span className="font-light">Sales: </span>
              <span className="font-light">4506</span>
            </div>
            <div className="flex w-36 justify-between">
              <span className="font-light">Active: </span>
              <span className="font-light">Yes</span>
            </div>
            <div className="flex w-36 justify-between">
              <span className="font-light">In stock: </span>
              <span className="font-light">No</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="m-5 p-5 shadow-md">
        <form className="flex justify-between">
          {/* left */}
          <div className="flex flex-col">
            <label className="mb-2.5 text-slate-600">Product Name</label>
            <input
              type="text"
              placeholder="Adidas Grand Court"
              className="mb-2.5 border-b border-purple-500 p-1.5 placeholder:italic focus:border-yellow-500  focus:outline-none"
            />
            <label className="mb-2.5 text-slate-600">In Stock</label>
            <select
              name="inStock"
              id="inStock"
              className="mb-2.5 focus:outline-purple-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-2.5 text-slate-600">Active</label>
            <select
              name="active"
              id="active"
              className="mb-2.5 focus:outline-purple-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* right */}
          <div className="flex flex-col justify-around">
            <div className="flex items-center">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/1f893c7c14424f6f8f72a98101359ecb_9366/Zapatillas_Grand_Court_Blanco_F36483_01_standard.jpg"
                alt="image"
                className="mr-5 h-24 w-24 rounded-xl object-cover"
              />
              <label for="file">
                <DriveFolderUploadRoundedIcon className="cursor-pointer" />
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
            <button className="rounded-md bg-purple-400 p-1.5 font-semibold text-purple-700 cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductInfo;
