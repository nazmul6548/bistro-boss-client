import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


// import { useQuery } from "@tanstack/react-query";

// import useAxiosSecure from './useAxiosSecure';
import Latestblog from './Latestblog';
import { useLoaderData } from 'react-router-dom';

const TabCategory = () => {
    const i = useLoaderData()
    // console.log(i);
    // const {category} =i
//   const axiosSecure = useAxiosSecure()
  // const [jobs,setJobs] =useState([])
//   const {
//     data:jobs=[],
//     isLoading,
   
// }=useQuery({
//     queryFn:()=>getdata(),
//     queryKey:['bids'],
// })
// console.log(jobs);
// console.log(isLoading);
//     const getdata = async () => {
//       const {data} = await axiosSecure(`/jobs`)
//       return(data)
//     }
if (!i) {
    // Show a loading indicator or a fallback UI while the data is being fetched
    return <div>Loading...</div>;
}

    return (
        <Tabs>
      <div className=' bg-gradient-to-b pt-28   text-[#000000] p-10'>
        <h1 className='text-5xl font-bold font-lato text-center'>All Food Categories</h1>
        <p className='font-lato text-center w-full md:w-full lg:w-3/4 m-auto pt-6 pb-10'>An on-site job requires employees to work physically at a designated location, typically within a company's office or workplace. Employees commute to the office and perform their duties in a traditional office setting, collaborating closely with colleagues and supervisors in person. </p>
      <div className='flex items-center justify-center font-normal md:font-bold text-xs md:text-2xl font-lato'>
       <TabList>
          <Tab>salad</Tab>
          <Tab>soup</Tab>
          <Tab>offered</Tab>
          <Tab>pizza</Tab>
          <Tab>dessert</Tab>
          <Tab>popular</Tab>
        </TabList>
       </div>
    
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
          {
            i.filter(j => j.category==='salad').map(j =>(<Latestblog key={j._id} j={j}></Latestblog>))
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-5'>
        {
            i.filter(j => j.category==='soup').map(j =>(<Latestblog key={j._id} j={j}></Latestblog>))
          }
        </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-5'>
        {
            i.filter(j => j.category==='offered').map(j =>(<Latestblog key={j._id} j={j}></Latestblog>))
          }
        </div>
        </TabPanel>
        <TabPanel>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-5'>
       {
            i.filter(j => j.category==='pizza').map(j =>(<Latestblog key={j._id} j={j}></Latestblog>))
          }
       </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {
            i.filter(j => j.category==='dessert').map(j =>(<Latestblog key={j._id} j={j}></Latestblog>))
          }
        </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {
            i.filter(j => j.category==='popular').map(j =>(<Latestblog key={j._id} j={j}></Latestblog>))
          }
        </div>
        </TabPanel>
      </div>
      </Tabs>
    );
};

export default TabCategory;