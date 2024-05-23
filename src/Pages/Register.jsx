import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import swal from "sweetalert";
import { AuthContext } from "../component/AuthProvider";
import useAxiosPublic from "../component/useAxiosPublic";
import Socialgoogle from "../component/Socialgoogle";


const Register = () => {
    const axiosPublic = useAxiosPublic()
    const {createUser,userUpdateProfile,setReload} = useContext(AuthContext)


    const navigate = useNavigate()
    const div ='/';


    const handleRegister =async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const res = {name,email,password,photo}
        console.log(res);
        createUser(email,password)
        .then(() => {
            userUpdateProfile(name,photo)
            // navigate(div)
            .then(()=>{
                const userInfo = {
                    name: name,
                    email :email
                }
                const response = axiosPublic.post('/users',userInfo)
                if (response.data.insertId) {
                    console.log("Saved to the database");
            
                    
            
                    
                  }
                } 
            )
         
                

            swal({
                title: "Good job!",
                text: "You Successfully Registered!",
                icon: "success",
                button: "Done!",
              });
               
              navigate(div, { replace: true });
              setReload(true);
    })
}
    return (
        <div className="font-sans text-gray-900 relative ">
        <div className="h-240 font-sans">
            <img src="https://i.ibb.co/tQYJ252/pexels-a-darmel-7862517.jpg" alt="Banner Image" className="w-full h-[300px] object-cover" />
        </div>
        <div className="relative -mt-40 m-4">
            <form onSubmit={handleRegister} className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
                <div className="mb-12">
                    <h3 className="text-3xl text-[#0b0e37] font-extrabold text-center">Create an account</h3>
                </div>
                <div>
                    <label className="text-xs block mb-2">Full Name</label>
                    <div className="relative flex items-center">
                        <input name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter name" />
                        
                    </div>
                </div>
                <div className="mt-10">
                    <label className="text-xs block mb-2">Email</label>
                    <div className="relative flex items-center">
                        <input name="email" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter email" />
                     
                    </div>
                </div>

                <div className="mt-10">
                    <label className="text-xs block mb-2">Photo URL</label>
                    <div className="relative flex items-center">
                        <input name="photo" type="photo" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Photo url" />
                     
                    </div>
                </div>


                <div className="mt-10">
                    <label className="text-xs block mb-2">Password</label>
                    <div className="relative flex items-center">
                        <input name="password" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                        
                    </div>
                </div>
                <div className="flex items-center mt-8">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded" />
                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                        I accept the <a href="#" className="text-[#0b0e37] font-semibold hover:underline ml-1">Terms and Conditions</a>
                    </label>
                </div>
                <div className="mt-6 text-center">
                <Socialgoogle></Socialgoogle>
                </div>
                <div className="mt-12">
                    <input type="submit" value="Register" className="w-full shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md text-white bg-[#0b0e37] hover:bg-blue-700 focus:outline-none transition-all" />
                    <p className="text-sm mt-8 text-center">Already have an account? <Link to="/login" className="text-[#0b0e37] font-semibold hover:underline ml-1">Login here</Link></p>
                </div>
                
            </form>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Register;