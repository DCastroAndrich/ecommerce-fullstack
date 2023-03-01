import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const FeaturedInfo = () => {
  return (
    <div className="flex w-full justify-between ">
      <div className="mx-5 w-1/3 cursor-pointer rounded-lg p-8 shadow-md">
        <span className="text-2xl font-medium">Revanue</span>
        <div className="my-3 flex items-center">
          <span className="text-3xl font-semibold">$3850</span>
          <span className="ml-5 flex items-center">
            -9.8 <ExpandMoreRoundedIcon className="text-sm text-red-600" />
          </span>
        </div>
        <span className="text-sm text-gray-600">Compared to last month</span>
      </div>
      <div className="mx-5 w-1/3 cursor-pointer rounded-lg p-8 shadow-md">
        <span className="text-2xl font-medium">Sales</span>
        <div className="my-3 flex items-center">
          <span className="text-3xl font-semibold">$2330</span>
          <span className="ml-5 flex items-center">
            -2.8 <ExpandMoreRoundedIcon className="text-sm text-red-600" />
          </span>
        </div>
        <span className="text-sm text-gray-600">Compared to last month</span>
      </div>
      <div className="mx-5 w-1/3 cursor-pointer rounded-lg p-8 shadow-md">
        <span className="text-2xl font-medium">Cost</span>
        <div className="my-3 flex items-center">
          <span className="text-3xl font-semibold">$1792</span>
          <span className="ml-5 flex items-center">
            +1.8 <ExpandLessRoundedIcon className="text-sm text-green-600" />
          </span>
        </div>
        <span className="text-sm text-gray-600">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
