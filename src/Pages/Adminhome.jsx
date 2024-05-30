import { useContext } from "react";
import { AuthContext } from "../component/AuthProvider";
import useAxiosSecure from "../component/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Adminhome = () => {

    const {user} = useContext(AuthContext)
    console.log(user);
    const axiosSecure =useAxiosSecure()
    const {data:state,isLoading} = useQuery({
        queryKey:["admin-state"],
        queryFn:async() => {
            const res = await axiosSecure.get('/admin-states')
            return res.data;
        }
    })
    if (isLoading) {
      return <p>Loading...</p>;
    }
    console.log(state);
    return (
        <div>
          <div>
                <h1>hi welcome my page </h1>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </div>
            <section className="bg-gray-800 text-white py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="text-center bg-gray-700 p-4 border-b-4 border-blue-600 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 512 512">
          <path d="M503.492 189.582 324.334 166.497 256 17.299l-68.334 149.198-179.158 23.085 133.105 115.146-39.434 173.77L256 392.845l153.82 108.928-39.434-173.77zm-173.15 142.834-74.34-52.647-74.34 52.646 19.094-84.128-64.509-55.768 85.145-10.973 34.61-75.556 34.61 75.556 85.144 10.973-64.508 55.768z" data-original="#000000" />
        </svg>
        <h3 className="text-2xl font-bold mt-5">{state.users}</h3>
        <p className="text-gray-300 mt-3">Awards Won</p>
      </div>
      <div className="text-center bg-gray-700 p-4 border-b-4 border-yellow-600 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-600 w-10 inline-block" viewBox="0 0 512 512">
          <path d="M646zm0 103.29c-20.2 0-36.646-16.445-36.646-36.646 0-20.2 16.445-36.646 36.646-36.646 20.2 0 36.646 16.445 36.646 36.646 0 20.2-16.446 36.646-36.646 36.646zM411.94 126.504c-36.749 0-66.646 29.897-66.646 66.646 0 36.749 29.897 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.896-66.646-66.646-66.646zm0 103.29c-20.2 0-36.646-16.445-36.646-36.646 0-20.2 16.445-36.646 36.646-36.646 20.2 0 36.646 16.445 36.646 36.646 0 20.2-16.445 36.646-36.646 36.646z" data-original="#000000" />
        </svg>
        <h3 className="text-2xl font-bold mt-5">{state.menuItems}</h3>
        <p className="text-gray-300 mt-3">Projects Completed</p>
      </div>
      <div className="text-center bg-gray-700 p-4 border-b-4 border-yellow-600 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-600 w-10 inline-block" viewBox="0 0 512 512">
          <path d="M181.333 405.333h-32c-11.782 0-21.333 9.551-21.333 21.333v32C128 470.549 137.551 480 149.333 480h32c11.782 0 21.333-9.551 21.333-21.333v-32c0-11.782-9.551-21.334-21.333-21.334zM192 448h-64v-64h64v64zM192 298.667h-64c-11.782 0-21.333 9.551-21.333 21.333v138.667C106.667 470.449 116.218 480 128 480h64c11.782 0 21.333-9.551 21.333-21.333V320c0-11.782-9.551-21.333-21.333-21.333zM192 448h-64V320h64v128zM362.667 341.333H330.67c-11.782 0-21.333 9.551-21.333 21.333v96C309.337 470.449 318.888 480 330.67 480h32c11.782 0 21.333-9.551 21.333-21.333v-96c0-11.782-9.551-21.334-21.333-21.334zM362.667 448h-32v-96h32v96zM362.667 192H330.67c-11.782 0-21.333 9.551-21.333 21.333v245.333c0 11.782 9.551 21.333 21.333 21.333h32c11.782 0 21.333-9.551 21.333-21.333V213.333c0-11.782-9.551-21.333-21.333-21.333zM362.667 448h-32V213.333h32V448zM533.333 234.667h-32c-11.782 0-21.333 9.551-21.333 21.333v202.667c0 11.782 9.551 21.333 21.333 21.333h32c11.782 0 21.333-9.551 21.333-21.333V256c0-11.782-9.551-21.333-21.333-21.333zM533.333 448h-32V256h32v192zM533.333 96h-32c-11.782 0-21.333 9.551-21.333 21.333v341.333c0 11.782 9.551 21.333 21.333 21.333h32c11.782 0 21.333-9.551 21.333-21.333V117.333c0-11.782-9.551-21.333-21.333-21.333zM533.333 448h-32V117.333h32V448zM298.667 362.667h-32c-11.782 0-21.333 9.551-21.333 21.333v74.667c0 11.782 9.551 21.333 21.333 21.333h32c11.782 0 21.333-9.551 21.333-21.333v-74.667c0-11.782-9.551-21.333-21.333-21.333zM298.667 448h-32v-74.667h32V448z" data-original="#000000" />
        </svg>
        <h3 className="text-2xl font-bold mt-5">{state.orders}</h3>
        <p className="text-gray-300 mt-3">Years of Experience</p>
      </div>
      <div className="text-center bg-gray-700 p-4 border-b-4 border-red-600 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-600 w-10 inline-block" viewBox="0 0 24 24">
          <path d="M12 4.354a.5.5 0 0 1 .832-.374l7.785 6.354H2.383L10.168 3.98a.5.5 0 0 1 .832.374zM20 12v8.616H4V12h16zM4.5 13h15v7.116h-15V13z" />
        </svg>
        <h3 className="text-2xl font-bold mt-5">{state.revenue}</h3>
        <p className="text-gray-300 mt-3">Happy Clients</p>
      </div>
     
    </div>
  </div>
</section>


        </div>
    );
};

export default Adminhome;