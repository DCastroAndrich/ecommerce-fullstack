const WidgetBtn = ({ type }) => {
  switch (type) {
    case "Approved":
      return (
        <button className="flex cursor-pointer items-center rounded-2xl bg-green-400 py-1 px-2 text-xs text-emerald-600">
          {type}{" "}
        </button>
      );
    case "Declined":
      return (
        <button className="flex cursor-pointer items-center rounded-2xl bg-red-400 py-2 px-3 text-xs text-rose-700">
          {type}{" "}
        </button>
      );

    default:
      return (
        <button className="flex cursor-pointer items-center rounded-2xl bg-amber-300 py-2 px-3 text-xs text-amber-600">
          Pending
        </button>
      );
  }
};

export default WidgetBtn;
