const RegistrationForm = () => {
  return (
    <div className="w-2/5 bg-gradient-to-br from-slate-600 to-violet-600 p-5 rounded-md">
      <h1 className="text-5xl font-bold text-white ">Create an account</h1>
      <form className="flex flex-wrap">
        <input
          placeholder="name"
          className="my-5 mx-3 min-w-[40%] flex-1 p-3 rounded-md"
        />
        <input
          placeholder="last name"
          className="my-5 mx-3 min-w-[40%] flex-1 p-3 rounded-md"
        />
        <input
          placeholder="username"
          className="my-5 mx-3 min-w-[40%] flex-1 p-3 rounded-md"
        />
        <input
          placeholder="email"
          className="my-5 mx-3 min-w-[40%] flex-1 p-3 rounded-md"
        />
        <input
          placeholder="password"
          className="my-5 mx-3 min-w-[40%] flex-1 p-3 rounded-md"
        />
        <input
          placeholder="confirm password"
          className="my-5 mx-3 min-w-[40%] flex-1 p-3 rounded-md"
        />
        <span className="my-5 text-xs text-white">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </span>
        
        <button className="w-2/5 bg-black py-4 px-5 text-white rounded-md">Create</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
