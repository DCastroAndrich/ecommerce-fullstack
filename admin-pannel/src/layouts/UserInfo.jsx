import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="w-4/5 p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit User</h1>
        <Link to="/newuser">
          <button className="w-20 cursor-pointer rounded-lg bg-emerald-400 p-1.5 text-base text-emerald-700">
            Create
          </button>
        </Link>
      </div>
      <div className="mt-5 flex ">
        <div className="mr-5 w-1/3 p-5 shadow-md">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
              alt="user avatar"
            />
            <div className=" ml-5 flex flex-col">
              <span className="font-semibold">Lando Landa</span>
              <span className="font-light">Web Developer</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-lg font-semibold text-gray-500">
              Account Details
            </span>
            <div className="my-5 flex items-center text-slate-600">
              <AccountCircleRoundedIcon fontSize="small" className="mr-4" />
              <span>landolanda2023</span>
            </div>
            <div className="my-5 flex items-center text-slate-600">
              <TodayRoundedIcon fontSize="small" className="mr-4" />
              <span>08-03-1986</span>
            </div>
            <span className="text-lg font-semibold text-gray-500">
              Contact Details
            </span>
            <div className="my-5 flex items-center text-slate-600">
              <CallRoundedIcon fontSize="small" className="mr-4" />
              <span>+549 221 234 8891</span>
            </div>
            <div className="my-5 flex items-center text-slate-600">
              <AlternateEmailRoundedIcon fontSize="small" className="mr-4" />
              <span>lando@landa.com</span>
            </div>
            <div className="my-5 flex items-center text-slate-600">
              <BusinessRoundedIcon fontSize="small" className="mr-4" />
              <span>Buenos Aires | Argentina</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="w-2/3 p-5 shadow-md">
          <span className="text-2xl font-semibold">Edit</span>
          <form className="mt-5 flex justify-between">
            {/* LEFT */}
            <div className="">
              {/* form item */}
              <div className="mt-2.5 flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-600">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="landolanda2023"
                  className="h-9 w-64 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
                />
              </div>
              {/* form item */}
              <div className="mt-2.5 flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-600">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Lando Landa"
                  className="h-9 w-64 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
                />
              </div>
              {/* form item */}
              <div className="mt-2.5 flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="lando@landa.com"
                  className="h-9 w-64 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none "
                />
              </div>
              {/* form item */}
              <div className="mt-2.5 flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-600">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+549 221 234 8891"
                  className="h-9 w-64 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
                />
              </div>
              {/* form item */}
              <div className="mt-2.5 flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-600">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Buenos Aires | Argentina"
                  className="h-9 w-64 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
                  alt="user avatar"
                  className="mr-5 h-28 w-28 rounded-md object-cover"
                />
                <label htmlFor="updateAvatar">
                  <DriveFolderUploadRoundedIcon className="cursor-pointer" />
                </label>
                <input type="file" id="updateAvatar" className="hidden" />
              </div>
              <button className="cursor-pointer rounded-md bg-purple-400 p-1.5 font-semibold text-purple-700">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
