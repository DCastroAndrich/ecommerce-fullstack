import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Ammount = () => {
  return (
    <>
      <div className="flex items-center font-bold">
        <button className=" text-violet-400 hover:text-violet-700">
          <RemoveIcon fontSize="large" />
        </button>
        <span className="mx-2 flex h-8 w-8 items-center justify-center rounded-md border border-violet-700">
          1
        </span>
        <button className="text-violet-400 hover:text-violet-700">
          <AddIcon fontSize="large" />
        </button>
      </div>
    </>
  );
};

export default Ammount;
