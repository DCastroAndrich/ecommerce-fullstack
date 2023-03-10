import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productsInfo as rows } from "../data/dummyData.js";
import { useState } from "react";

const ProductList = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="mr-3 h-12 w-12 rounded-full object-cover"
              src={params.row.img}
              alt="avatar"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={"/productlist/product/" + params.row.id}>
              <button className="mr-3 rounded-xl bg-cyan-500 px-3 py-1 text-cyan-700">
                Edit
              </button>
            </Link>
            <DeleteForeverRoundedIcon
              className="cursor-pointer text-rose-700"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-4/5">
      <DataGrid
        className="mx-5 shadow-md"
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
