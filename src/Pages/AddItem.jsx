import { useForm } from "react-hook-form";
import useAxiosPublic from "../component/useAxiosPublic";
import useAxiosSecure from "../component/useAxiosSecure";
import Swal from "sweetalert2";
import { MdRestaurant } from "react-icons/md";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data)
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    console.log(res.data);
    if (res.data.success) {
        // now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        // 
        const menuRes = await axiosSecure.post('/items', menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log( 'with image url', res.data);
};
    return (
        <div className="m-0 h-screen bg-gray-200 flex items-center justify-center font-sans overflow-hidden">
        <div className="relative w-[500px] h-125 rounded-2xl p-10 bg-[#000000]  shadow-top-left-white">
          
          <div className="mt-2 text-3xl font-black text-blue-500 tracking-wide text-center">Add Items</div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left mt-7">
            <label className="block mb-1">Recipe Name</label>
            <input
              type="text"
              placeholder="type item name"
              {...register('name', { required: true })}
              required
              className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
              style={{ caretColor: 'red' }}
            />
          <div className="flex justify-between">
          <div className="w-1/2">
              <label className="block mt-3 mb-1">Category</label>
              <select
              defaultValue="default" {...register('category', { required: true })}
                className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
                style={{ caretColor: 'red' }}
              >
                <option  disabled value="default">Select category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
           <div>
           <label className="block mt-3 mb-1">Price</label>
            <input
              type="number"
              placeholder="Price"
              {...register('price', { required: true })}
              className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
              style={{ caretColor: 'red' }}
            />
           </div>
          </div>
          <div className="flex flex-col space-y-2">
      <label className="text-black text-sm mr-4">Message</label>
      <div className="w-full mb-6">
        <textarea
        {...register('recipe')}
          placeholder="Type Message"
          className="w-full bg-gray-200 p-2 pl-5 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
          rows="4"
        ></textarea>
        
      </div>
      <input type="file"
      {...register('image', { required: true })}
        className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />

    </div>
            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 text-white h-10 rounded-xl font-black shadow transition-shadow duration-500 hover:shadow-none"
            >
             <div className="flex items-center justify-center"><span className="mr-2">Submit</span><MdRestaurant/></div>
            </button>
          </div>
          </form>
       
        </div>
      </div>
    );
};

export default AddItem;