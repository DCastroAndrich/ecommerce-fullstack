import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddToCartContainer = () => {
  return (
    <div className="flex w-1/2 items-center justify-between">
      <div className="flex items-center font-bold">
        <button className="text-violet-400 hover:text-violet-700">
          <RemoveCircleOutlineIcon fontSize="large" />
        </button>
        <span className="mx-2 flex h-8 w-8 items-center justify-center rounded-md border border-violet-700">
          1
        </span>
        <button className="text-violet-400 hover:text-violet-700">
          <AddCircleOutlineIcon fontSize="large" />
        </button>
      </div>
      <button className="rounded-md border border-violet-700 p-2 text-lg font-bold hover:bg-violet-700 hover:text-white">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartContainer;
