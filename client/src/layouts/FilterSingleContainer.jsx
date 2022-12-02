const FilterSingleContainer = () => {
  return (
    <div className="my-8 flex">
      <div className="flex w-1/2 items-center justify-between">
        <div className="flex">
          <span className="text-xl font-extralight">Color</span>
          <div
            className={`mx-1 h-8 w-8 cursor-pointer rounded-full border bg-white`}
          ></div>
          <div
            className={`mx-1 h-8 w-8 cursor-pointer rounded-full border bg-black`}
          ></div>
        </div>

        <div className="mx-1">
          <span>Size</span>
          <select className="mx-3 p-2">
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSingleContainer;
