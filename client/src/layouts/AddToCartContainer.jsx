import Ammount from "../components/Ammount";

const AddToCartContainer = () => {
  return (
    <div className="flex w-1/2 items-center justify-between">
      <Ammount />
      <button className="rounded-md border border-violet-700 p-2 text-lg font-bold hover:bg-violet-700 hover:text-white">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartContainer;
