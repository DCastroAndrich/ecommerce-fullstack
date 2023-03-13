import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

const PopularProduct = ({ item }) => {
  return (
    <div
      className="relative m-2 flex h-80 min-w-[280px] items-center justify-center drop-shadow-lg 2xl:min-w-[360px]"
      style={{ flex: 1 }}
    key={item._id}>
      <img src={item.image} className="h-full" />
      <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black opacity-0  duration-300 ease-out hover:opacity-80 2xl:h-full 2xl:w-3/4">
        <div className="m-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-out hover:scale-110 hover:bg-violet-700 hover:text-white">
          <AddShoppingCartIcon />
        </div>
        <div className="m-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-out hover:scale-110 hover:bg-violet-700 hover:text-white">
          <FavoriteBorderIcon />
        </div>
        <div className="m-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-out hover:scale-110 hover:bg-violet-700 hover:text-white">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
