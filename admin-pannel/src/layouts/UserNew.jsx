const UserNew = () => {
  return (
    <div className="w-4/5">
      <h1>New User</h1>
      <form className="flex flex-wrap">
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Username
          </label>
          <input
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            type="text"
            placeholder="neo"
          />
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Full Name
          </label>
          <input
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            type="text"
            placeholder="John Anderson"
          />
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Email
          </label>
          <input
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            type="email"
            placeholder="john.anderson@gmail.com"
          />
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Password
          </label>
          <input
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Phone
          </label>
          <input
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            type="tel"
            placeholder="+549 221 888 9999"
          />
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Address
          </label>
          <input
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            type="text"
            placeholder="Buenos Aires | Argentina"
          />
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Gender
          </label>
          <div className="">
            <input
              className="mt-4 ml-5 "
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label className="m-5 text-lg text-slate-500" for="male">
              Male
            </label>
            <input
              className="mt-4 ml-5"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label className="m-5 text-lg text-slate-500" for="female">
              Female
            </label>
            <input
              className="mt-4 ml-5"
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label className="m-5 text-lg text-slate-500" for="other">
              Other
            </label>
          </div>
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <label className="mb-5 ml-5 font-semibold text-slate-500">
            Active
          </label>
          <select
            className="ml-5 h-10 border-b border-purple-400 shadow-sm placeholder:italic focus:border-yellow-500 focus:outline-none"
            name="active"
            id="active"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mt-3 mr-5 flex w-96 flex-col">
          <button className="cursor-pointer rounded-md bg-purple-400 py-1.5 px-2.5 font-semibold text-purple-700 m-5">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserNew;
