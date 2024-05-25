
import { useLoaderData } from "react-router-dom";
import Slide from "../component/Slide";

import TabCategory from "../component/TabCategory";
import Extrasec from "../component/Extrasec";
import Gallery from "../component/Gallery";
import Dashboard from "./Dashboard";
import NewsLetter from "../component/NewsLetter";
import TextAnimation from "../component/TextAnimation";









const Home = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <div>
     <Slide></Slide>
     <TextAnimation></TextAnimation>
     <TabCategory></TabCategory>
     <Extrasec></Extrasec>
     <NewsLetter></NewsLetter>
     <Gallery></Gallery>
   
    
        </div>
    );
};

export default Home;