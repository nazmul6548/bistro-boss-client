
import { useLoaderData } from "react-router-dom";
import Slide from "../component/Slide";

import TabCategory from "../component/TabCategory";









const Home = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <div>
     <Slide></Slide>
     <TabCategory></TabCategory>
    
        </div>
    );
};

export default Home;