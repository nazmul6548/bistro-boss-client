import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
import useCart from "./useCart";
// import useAxiosSecure from "../../hooks/useAxiosSecure";


const Latestblog = ({j}) => {
  const { name, image, price, recipe, _id,category } = j;
  const {user} =useContext(AuthContext)
  const navigate =useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure();
  const [,refetch] =useCart()
  const handleButton = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      };

      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
        })
        .catch(error => {
          console.error('There was an error!', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });

   
    }else{
      Swal.fire({
        title: "Please login?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login koro!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          navigate('/login', { state: {from: location } })
          
        }
      });
    }
  }
  
    return (
        <div>
            <div className="bg-white font-[sans-serif]">
      <div className="">
        
        <div className=" gap-6 mt-16 max-md:max-w-lg mx-auto">
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src={image}
              alt="Blog Post 1"
              className="w-full h-96 object-cover overflow-hidden"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-slate-400 opacity-90">
              <span className="text-sm block text-gray-600 mb-2">{category}</span>
              <h3 className="text-xl font-bold text-[#333]">{name}</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-600 text-sm">
                  {recipe}
                </p>
               
              </div>
              <div className="font-[sans-serif] space-x-4 space-y-4 pt-4 text-center">
              <button onClick={handleButton} type="button"
    className="px-2 py-2.5 min-w-[140px] shadow-lg rounded-full text-black text-sm tracking-wider font-medium border-none outline-none bg-white active:shadow-inner">Add to Cart</button>
              </div>
            </div>
          </div>
         
    </div>
        </div>
        </div>
        </div>
    );
};

export default Latestblog;