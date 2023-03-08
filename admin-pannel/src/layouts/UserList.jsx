import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Link } from "react-router-dom";
import { usersData as rows } from "../data/dummyData.js";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="mr-3 h-8 w-8 rounded-full object-cover"
              src={params.row.avatar}
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={"/userlist/user/" + params.row.id}>
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

export default UserList;
