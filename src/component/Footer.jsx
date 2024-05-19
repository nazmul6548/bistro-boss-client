import { Link } from "react-router-dom";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black py-12 px-8 font-sans tracking-wide">
        <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <h2 className="lg:col-span-2 text-xl font-semibold text-gray-300">
            Join our newsletter to keep up to date with us!
            <br /> Enter your email Subscribe
          </h2>
          <div className="bg-transparent border border-gray-800 flex px-1 py-1 rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent pl-4 text-sm text-gray-300"
            />
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 transition-all text-gray-200 text-sm rounded-full px-5 py-2.5"
            >
              Subscribe
            </button>
          </div>
        </div>
  
        <hr className="my-12 border-gray-800" />
  
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
          <div className="lg:col-span-3 max-lg:col-span-full">
            <Link to="#">
              <img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" className="w-48" />
            </Link>
            <p className="text-gray-300 text-sm lg:max-w-sm mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, mi eu pulvinar
              cursus, sem elit interdum mauris.
            </p>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">About Us</h4>
            <ul className="space-y-4">
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Mission and Values
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
  
        <p className="text-sm text-gray-300 mt-8">
        Copyright © {currentYear}
        <Link to="https://readymadeui.com/" target="_blank" className="hover:underline mx-1">
          ReadymadeUI
        </Link>
        All Rights Reserved.
      </p>
      </footer>
    );
};

export default Footer;
