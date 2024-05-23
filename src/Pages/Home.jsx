
import { useLoaderData } from "react-router-dom";
import Slide from "../component/Slide";

import TabCategory from "../component/TabCategory";
import Extrasec from "../component/Extrasec";
import Gallery from "../component/Gallery";
import Dashboard from "./Dashboard";









const Home = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <div>
     <Slide></Slide>
     <TabCategory></TabCategory>
     <Extrasec></Extrasec>
     <Gallery></Gallery>
     <Dashboard></Dashboard>
    
        </div>
    );
};

export default Home;