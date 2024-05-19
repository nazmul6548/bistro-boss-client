import { Outlet, useLocation } from "react-router-dom";

import Footer from "./component/Footer";
import { NavbarComponent } from "./component/NavbarComponent";

// import { Slider } from "./component/slider/Slider";


const Root = () => {
    const location = useLocation()
    console.log(location);
    const cancel =location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div>
            { cancel || <NavbarComponent></NavbarComponent>}
            {/* <Slider></Slider> */}
            
           
            <Outlet></Outlet>
            {cancel || <Footer></Footer>}
        </div>
    );
};

export default Root;