// import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useAuth from "../hooks/useAuth";

import { useContext } from "react";
import useAdmin from "./useAdmin";
// import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const AdminRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext); 
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loader || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;