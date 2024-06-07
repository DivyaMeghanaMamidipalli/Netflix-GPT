import React from 'react';
import {useState} from 'react';
import Header from './Header';
import {BG_URL} from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="absolute bg-black w-full h-full bg-opacity-50 "></div>
      <form className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder="Name" className="p-4 m-2 w-full bg-slate-700 border border-gray-500 rounded-md bg-opacity-20"/>)}
        <input type="text" placeholder="Email" className="p-4 m-2 w-full bg-slate-700 border border-gray-500 rounded-md bg-opacity-20"/>
        <input type="password" placeholder="Password" className="p-4 m-2 w-full bg-slate-700 border border-gray-500 rounded-md bg-opacity-20"/>
        <button className="p-2 m-2 w-full bg-red-600 text-white rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="mx-2 my-4 text-slate-400">{isSignInForm ? "New to Netflix?" : "Already a User?"} <a className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in now."}</a> </p>
        <p className="p-2 text-xs text-slate-400">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

      </form>

    </div>
  )
}

export default Login
