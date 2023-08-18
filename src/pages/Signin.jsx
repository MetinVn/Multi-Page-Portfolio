import React, { useEffect } from "react";
import { UserAuth } from "../context/Protect";
import {GoogleButton} from 'react-google-button'
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const { googleSignin,user } = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignin();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(()=>{
    if(user!=null){
      navigate('/account')
    }
  },[user])
  return (
    <div className="h-screen w-full min-w-[100px] flex flex-col items-center justify-center bg-[url('./images/bg.jpg')] bg-cover bg-center">
      <div className="border-2 max-w-[450px] w-[90%] p-5 sm:p-10 rounded-lg backdrop-blur-[1px] shadow-lg shadow-gray-500 flex flex-col items-center">
        <a href="/" className="border-2 border-white bg-transparent text-white rounded-md p-2 my-2 hover:bg-white hover:text-black duration-300">Go back</a>
        <h1 className="text-white my-5 text-xs">Sign in via Google</h1>
        <GoogleButton onClick={handleGoogleSignIn} label="Sign in"/>
      </div>
    </div>
  );
};

export default Signin;
