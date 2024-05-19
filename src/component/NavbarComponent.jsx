"use client";
import { Navbar, Tooltip } from "keep-react";
// import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  
  TwitterLogo,
} from "phosphor-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const NavbarComponent = () => {
  const {user,loader,logout,}= useContext(AuthContext)

  // const [theme,setTheme] = useState("light")

  // useEffect(()=>{
  //     localStorage.setItem("theme",theme);
  //     const item = localStorage.getItem("theme");
      
  //         document.querySelector("html").setAttribute("data-theme",item);
      
  //         },[theme])  


  // const handleTheme = e => {
     
  //     if (e.target.checked) {
  //         setTheme("dark")
  //     }else{
  //         setTheme("light")
  //     }
    
  // }
  return (
    <Navbar  className="bg-[#000000] fixed z-10 w-full max-w-screen-xl bg-opacity-30 text-yellow-50">
      <Navbar.Container className="flex items-center  justify-between">
        <Navbar.Brand>
          <img
            src="https://svgshare.com/i/15zq.svg"
            alt="keep"
            width="80"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Container className="flex items-center gap-6">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-4"
          >
           
            {/* <Navbar.Link
              icon={<FacebookLogo size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link */}
              {/* icon={<InstagramLogo size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<TwitterLogo size={20} color="#444" />}
              iconAnimation={false}
            /> */}
            <li>Home</li>
            
            {/* <li>LogIn</li> */}
            <NavLink to="/register">Register</NavLink>
            {/*  */}
            {user ? (
            <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-xl ">
                
                <a id="clickable"><img src={user?.photoURL || <p>user</p>} alt="" /></a>
                <Tooltip className='' anchorSelect="#clickable" clickable>
                <button> {user?.displayName || "not found"}</button>
                <div className="mt-2 rounded-md">
                <button onClick={logout} className="btn btn-sm text-white ">LogOut</button>
                </div>

                </Tooltip>
              </div>
            </label>
            {/*  */}
          
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm te  text-white ml-2 mr-2">Login</button>
          </Link>
          

        )}
        
        
        
      
            
          </Navbar.Container>
          <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
            {/* Menu */}
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-[#000000] p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link
              linkName="Home"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <NavLink to="/login">
                <Navbar.Link
              linkName="LogIn"

            //   icon={<CaretDown size={20} />}
            //   className="!py-0"
            />
            </NavLink>
            <NavLink to="/register">
                <Navbar.Link
              linkName="Register"

            //   icon={<CaretDown size={20} />}
            //   className="!py-0"
            />
            </NavLink>
            <div>
            <button onClick={logout} className="btn btn-sm bg-white">LogOut</button>
                </div>
            <Navbar.Link
              linkName="Register"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link linkName="About" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
}