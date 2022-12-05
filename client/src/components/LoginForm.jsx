const LoginForm = () => {
  return (
    <div className="h-2/5 w-1/5 rounded-md bg-gradient-to-br from-slate-600 to-violet-600 p-5 text-center">
      <h1 className="text-5xl font-bold text-white ">Sing in</h1>
      <form className="flex flex-col items-center justify-center">
        <input
          placeholder="username"
          className="my-5 min-w-[40%] flex-1 rounded-md p-2"
        />

        <input
          placeholder="password"
          className="my-5 min-w-[40%] flex-1 rounded-md p-2"
        />

        <button className="w-2/5 rounded-md bg-black py-4 px-5 my-1 text-white">
          Login
        </button>

        <a className="my-2 cursor-pointer text-xs hover:text-white hover:underline hover:decoration-solid">
          Don't remember your password?
        </a>
        <a className="my-2 cursor-pointer text-xs hover:text-white hover:underline hover:decoration-solid">
          Create a new account
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
