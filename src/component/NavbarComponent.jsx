"use client";
import { Navbar } from "keep-react";
// import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  
  TwitterLogo,
} from "phosphor-react";
import { NavLink } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-[#000000]  top-0 text-yellow-50">
      <Navbar.Container className="flex items-center  justify-between">
        <Navbar.Brand>
          <img
            src="/images/keep.svg"
            alt="keep"
            width="100"
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
            <NavLink to="/login">LogIn</NavLink>
            {/* <li>LogIn</li> */}
            <li>Register</li>
            <li>about</li>
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