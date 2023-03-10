import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";

const ProductNew = () => {
  return (
    <div className="w-4/5 p-5">
      <div className="text-3xl font-semibold text-slate-700">New Product</div>
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
            <div className="flex flex-col justify-around my-5">
              <div className="flex mb-5 justify-between flex-col">
                
                <label for="file" className="mb-2.5 text-slate-600">
                  Product Image
                </label>
                <input type="file" id="file" />
              </div>
              <button className="mt-5 cursor-pointer rounded-md bg-purple-400 p-1.5 font-semibold text-purple-700">
                Create
              </button>
            </div>
          </div>

          {/* right */}
        </form>
      </div>
    </div>
  );
};

export default ProductNew;
