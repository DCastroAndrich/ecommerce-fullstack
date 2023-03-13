import { Link } from "react-router-dom";

const Categories = ({ item }) => {
  return (
    <div className="relative m-2" style={{ flex: 1, height: "100%" }}>
      <Link to={`products/${item.category}`}>
        <img src={item.img} className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
          <h3 className="m-6 text-3xl font-semibold text-amber-500">
            {item.title}{" "}
          </h3>
          <button
            type="button"
            className="bg-white p-2 font-semibold text-gray-600 shadow-sm transition-colors hover:bg-purple-600 hover:text-yellow-500"
          >
            Shop Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
