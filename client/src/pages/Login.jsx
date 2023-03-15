import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-login bg-cover ">
      <div className="h-2/5 w-1/5 rounded-md bg-gradient-to-br from-slate-600 to-violet-600 p-5 text-center">
        <h1 className="text-5xl font-bold text-white ">Sing in</h1>
        <form className="flex flex-col items-center justify-center">
          <input
            placeholder="username"
            className="my-5 min-w-[40%] flex-1 rounded-md p-2"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            placeholder="password"
            type="password"
            className="my-5 min-w-[40%] flex-1 rounded-md p-2"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="my-1 w-2/5 rounded-md bg-black py-4 px-5 text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-black"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Login
          </button>
          {error && (
            <span className="text-red-600 mt-2 font-medium text-lg shadow-black drop-shadow-lg">
              Oops... Something went wrong...
            </span>
          )}

          <a className="my-2 cursor-pointer text-xs hover:text-white hover:underline hover:decoration-solid">
            Don't remember your password?
          </a>
          <a className="my-2 cursor-pointer text-xs hover:text-white hover:underline hover:decoration-solid">
            Create a new account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
