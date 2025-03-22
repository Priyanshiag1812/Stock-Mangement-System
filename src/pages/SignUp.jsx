import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import Instance from '../../AxiosConfig';
import { useState } from "react";


function SignUp() {


  const [message, setMessage] = useState("");
  const [formData, setformData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Instance.post("/auth/register",formData);

      setMessage(response.data.message);
      setformData({ fname: "", lname: "", email: "", password: "" });
    } catch (error) {
      console.log("Registration Failed", error);
    }
  };



  return (
    <div>
      
      <h1 className="m-auto my-10 text-4xl text-blue-900 text-center"></h1>
    <div className="wrapper my-10 bg-blue-100 shadow-2xl rounded-2xl text-center w-1/2 h-9/10 m-auto px-10 py-8">
        <div
            className="profile_icon text-4xl bg-blue-300 m-auto my-3 rounded-full w-20 h-20 flex justify-center items-center ">
           <FaUser/></div>
        <h1 className="text-2xl text-blue-950  py-3"> Inventory Mangement System</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            id="user_firstName"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First Name"
            className="bg-blue-200 px-4 w-60 py-3 mx-8 my-3 text-left text-black"
          />


<input
            type="text"
            name="lname"
            value={formData.lname}
            id="user_lastName"
            onChange={handleChange}
            placeholder="Last Name"
            className="bg-blue-200 px-4 w-60 py-3 mx-8 my-3 text-left text-black"
          />
         
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="user_email"
            placeholder="User Email ID"
            className="bg-blue-200 px-4 w-60 py-3 mx-8 my-3 text-left text-black"
          />
         
          <input
            type="password"
            name="password"
            value={formData.password}
            id="user_password"
            onChange={handleChange}
            placeholder="Password"
            className="bg-blue-200 px-4 w-60 py-3 mx-8 my-3 text-left"
          />
            
            
            <button type="submit" value="Sign Up"
                className="bg-blue-400 text-amber-50 px-15 w-60 rounded-3xl py-3 mx-8 my-1 text-center">Sign Up</button>

        </form>
    </div>
    </div>
  )
}

export default SignUp
