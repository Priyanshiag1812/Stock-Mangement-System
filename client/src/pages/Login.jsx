import React from 'react'

function Login() {
  return (
<>
       <h1 className="m-auto my-10 text-4xl text-blue-900 text-center"></h1>
    <div className="wrapper my-10 bg-blue-100 shadow-2xl rounded-2xl text-center w-1/2 h-9/10 m-auto px-10 py-8">
        <div
            className="profile_icon text-4xl bg-blue-300 m-auto my-3 rounded-full w-20 h-20 flex justify-center items-center ">
            <i class="fa-solid fa-user text-blue-950"></i></div>
        <h1 className="text-2xl text-blue-950  py-3"> Inventory Mangement System</h1>
        <form>
            <input type="text" id="user_name" placeholder="User ID"
                className="bg-blue-200   px-4 w-60 py-3 mx-8 my-3 text-left text-black"></input>
            <input type="password" id="user_password" placeholder="Password"
                className="bg-blue-200 px-4  w-60 py-3 mx-8 my-3 text-left"></input>
            
            <div className="flex justify-between items-center px-40">
                <div className="flex items-center"><input type="checkbox" id="remember_me" class="mx-1 my-1"></input>
                    <label for="remember_me" className="text-xs text-blue-950">Remember Me</label>
                </div>
                <p className="text-xs text-blue-800 my-1"><a href="#">Forgot Password?</a></p>
            </div>
            
            <input type="submit" value="Login"
                className="bg-blue-400 text-amber-50 px-15 w-60 rounded-3xl py-3 mx-8 my-1 text-center"></input>
            <p class="text-xs text-blue-800 my-1">Don't have an account? <a href="sign_up.html">Sign Up</a></p>

        </form>
    
    </div>
    </>
  )
}

export default Login
