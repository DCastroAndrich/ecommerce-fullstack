
const LoginForm = () => {
  return (
    <div className="w-1/5 h-2/5 bg-gradient-to-br from-slate-600 to-violet-600 p-5 rounded-md text-center">
    <h1 className="text-5xl font-bold text-white ">Sing in</h1>
    <form className="flex flex-col items-center justify-center">
      
      <input
        placeholder="username"
        className="my-5 min-w-[40%] flex-1 p-3 rounded-md"
      />
      
      <input
        placeholder="password"
        className="my-5 min-w-[40%] flex-1 p-3 rounded-md"
      />
      
      
      <button className="w-2/5 bg-black py-4 px-5 text-white rounded-md">Login</button>

      <a>Don't remember your password?</a>
      <a>Create a new account</a>
    </form>
    
  </div>
  )
}

export default LoginForm