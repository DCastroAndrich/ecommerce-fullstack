import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <input
        className="mb-5 border-b border-purple-400 p-2.5 focus:outline-none"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="mb-5 border-b border-purple-400 p-2.5 focus:outline-none"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-20 rounded-md bg-purple-400 p-2.5 text-purple-700 shadow-md"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
