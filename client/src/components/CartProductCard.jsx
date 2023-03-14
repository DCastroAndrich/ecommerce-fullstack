import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartProductCard = ({ item }) => {
  return (
    <>
      <div className="my-3 flex justify-between ">
        {/* DETAILS product card */}
        <div className="flex" style={{ flex: 2 }}>
          {/* cardImage */}
          <img className="w-52" src={item.image} />
          {/* cardDetails */}
          <div className="flex flex-col justify-around p-5">
            <span>
              <b>Name: </b>
              {item.title}
            </span>
            <span>
              {" "}
              <b>ID: </b>
              {item._id}{" "}
            </span>
            <div className="mx-1 h-5 w-5 rounded-full border bg-white"></div>
            <span>
              <b>Size: </b> {item.size}
            </span>
          </div>
        </div>

        {/* price */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ flex: 1 }}
        >
          <div className="mb-5 flex items-center ">
            <div className="flex items-center font-bold">
              <button className=" text-violet-400 hover:text-violet-700">
                <RemoveIcon fontSize="large" />
              </button>
              <span className="mx-2 flex h-8 w-8 items-center justify-center rounded-md border border-violet-700">
                {item.quantity}
              </span>
              <button className="text-violet-400 hover:text-violet-700">
                <AddIcon fontSize="large" />
              </button>
            </div>
          </div>
          <div className="text-xl font-medium">
            $ {item.price * item.quantity}
          </div>
        </div>
      </div>
      <hr className="mt-[0.1px] h-[0.5px] border-none bg-violet-600 " />
    </>
  );
};

export default CartProductCard;
