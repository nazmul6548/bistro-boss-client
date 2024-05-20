import { useLoaderData } from "react-router-dom";
import Slide from "../component/Slide";
import Latestblog from "../component/Latestblog";









const Home = () => {
    const item = useLoaderData()
    console.log(item);
    return (
        <div>
     <Slide></Slide>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     {
        item.map(i =><Latestblog key={item._id} i={i}></Latestblog>)
     }
     </div>
        </div>
    );
};

export default Home;