import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import { AuthContext } from "./AuthProvider";
// import { AuthContext } from "./authprovider/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";

const PrivateRoute = ({children}) => {
    const {loader,user}  = useContext(AuthContext)
    // console.log(user);
    const location =useLocation()

    if (loader) {
        return   <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
          <div>
      render(<Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />)
      </div>
      </div>
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname || "/"} replace></Navigate>
      


   
};

export default PrivateRoute;