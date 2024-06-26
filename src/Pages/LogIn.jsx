// import { useContext, useState } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../component/authprovider/AuthProvider";
import swal from "sweetalert";
import { AuthContext } from "../component/AuthProvider";
// import { motion, useScroll } from "framer-motion"
// import axios from "axios";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../component/useAxiosSecure";
// import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha,  } from 'react-simple-captcha'
import { set } from "firebase/database";
import Swal from "sweetalert2";
import Socialgoogle from "../component/Socialgoogle";
// import { AuthContext } from "../component/AuthProvider";
const LogIn = () => {
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[]) 
    const inputRef = useRef(null)
    const [disabled,setDisabled] =useState(true)
    // const { scrollYProgress } = useScroll();
    const {login} = useContext(AuthContext)
    // console.log(googlelogin);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
 
    console.log('state in the location login page', location.state)
    const handleLogin =(e) => {
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;
        const res ={email, password};
        console.log(res);
        login(email, password)
        .then(result => {
            if (result) {
                navigate(from, { replace: true });
                // console.log(result.user);
            }
            // const user =  result.user;
            // console.log(user);
        })
        // .then(() => {
        //     swal({
        //       title: "LogIn successful",
        //       // text: "You clicked the button!",
        //       icon: "success",
        //       // button: "Aww yiss!",
              
              
        //     });
        // })
        .catch(error => {
            setErrorMessage(error.message);
            console.log(error.message)

        });

    }
  

    const handlevalidetcaptcha = () => {
const value = inputRef.current.value;
console.log(value);
if (validateCaptcha(value)==true) {
    setDisabled(false)
}

else {
    setDisabled(true)
}
    }
    return (
        
        <div className="font-sans text-[#333]   ">
            <div className="grid lg:grid-cols-2 gap-4 bg-gradient-to-r from-[#0b0e37] to-blue-700 sm:p-8 p-4 h-[320px]">
                <div>
                    <img src="https://www.reshot.com/preview-assets/icons/WPDHRFL9Z5/job-rotation-WPDHRFL9Z5.svg" alt="" className="w-[10%]" />
                    <div className="max-w-lg mt-16 px-6 max-lg:hidden">
                        <h3 className="text-3xl font-bold text-white">Log in</h3>
                        <p className="text-sm mt-4 text-white">The login section provides users with the opportunity to sign in to their accounts,
    unlocking a realm of possibilities and opportunities that await them.</p>
                    </div>
                </div>
                <div className="bg-white my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full 
                
                 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <form onSubmit={handleLogin}>
                        <div className="mb-10">
                            <h3 className="text-3xl text-[#0b0e37] font-extrabold">Log in</h3>
                        </div>
                    <div className="py-6">
                    <Socialgoogle></Socialgoogle>
                    </div>
                        <div>
                            <label className="text-sm mb-2 block">User name</label>
                            <div className="relative flex items-center">
                                <input name="email" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                    {/* Add eye icon SVG here */}
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                    {/* Add eye icon SVG here */}
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6">
                        <LoadCanvasTemplate />
                            <div className="relative flex items-center flex-col">
                                <input name="text" type="text" ref={inputRef } required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter Capthca code" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                    {/* Add eye icon SVG here */}
                                    
                                </svg>
                                <div className="font-[sans-serif w-full mt-4 space-x-4 space-y-4 text-center">
                                    <button onClick={handlevalidetcaptcha} type="button"
    className="px-6 py-2 rounded text-black text-sm tracking-wider w-full  font-medium outline-none border-2 border-[#333] hover:bg-[#222] hover:text-white transition-all duration-300">Validate</button>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-4 text-right">
                            <a href="#" className="text-[#0b0e37] text-sm font-semibold hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                        <div className="mt-10">
                            <input disabled={disabled} type="submit" value="Log In" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-slate-900 focus:outline-none" />
                        </div>
                        {errorMessage && <p className="text-red-500 mb-4">{"you provide right email and password"}</p>} 
                        <p className="text-sm mt-6 text-center">Don't have an account <Link to="/register" className="text-[#0b0e37] font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                    </form>
                </div>
            </div>
            {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
        </div>
    );
};

export default LogIn;