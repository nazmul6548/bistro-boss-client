"use client";
import { Navbar, Tooltip } from "keep-react";
import { MdAddShoppingCart } from "react-icons/md";
import { Toggle } from "keep-react";

import {
  CaretDown,
  
} from "phosphor-react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import useCart from "./useCart";


export const NavbarComponent = () => {
  const {user,logout,}= useContext(AuthContext)
  const [toggle, setToggle] = useState(false)
  const [cart] = useCart();
//   const setToggle = e => {
       
//     if (e.target.checked) {
//         setToggle("dark")
//     }else{
//         setToggle("light")
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
            <div className="relative mr-3">
            <MdAddShoppingCart className="font-bold text-2xl"/>
    <span
      className="bg-red-500 text-[10px] px-1.5 font-semibold min-w-[20px] h-5 flex items-center justify-center text-white rounded-full absolute -top-2 left-[60%]">{cart.length}+</span>
  </div>
        
        <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} onChange={setToggle} />
            <li>Home</li>
           
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

         
            />
            </NavLink>
            <NavLink to="/register">
                <Navbar.Link
              linkName="Register"

           
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
            <div className="relative flex ">
            <MdAddShoppingCart className="font-bold text-2xl"/>
    <span
      className="bg-red-500 text-[10px] px-1.5 font-semibold min-w-[20px] h-5 flex items-start justify-start text-white rounded-full absolute -top-2 left-[10%]">{cart.length}+</span>
  </div>
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
}