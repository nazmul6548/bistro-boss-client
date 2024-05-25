// import { Button, Icon, Input, Label, Textarea } from "keep-react";
// import { Envelope } from "phosphor-react";


const AddItem = () => {
    return (
        <div className="m-0 h-screen bg-gray-200 flex items-center justify-center font-sans overflow-hidden">
        <div className="relative w-[500px] h-125 rounded-2xl p-10 bg-gray-200 shadow-md">
          {/* <div
            className="h-25 w-36 bg-cover bg-center mx-auto rounded-full shadow-inner"
            style={{ backgroundImage: 'url("https://img.icons8.com/color/100/000000/twitter--v2.png")' }}
          ></div> */}
          <div className="mt-2 text-3xl font-black text-blue-500 tracking-wide text-center">Add Items</div>
          <div className="text-left mt-7">
            <label className="block mb-1">Recipe Name</label>
            <input
              type="text"
              placeholder="type item name"
              className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
              style={{ caretColor: 'red' }}
            />
          <div className="flex justify-between">
          <div className="w-1/2">
              <label className="block mt-3 mb-1">Category</label>
              <select
                className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm rounded-md shadow-inner focus:outline-none"
                style={{ caretColor: 'red' }}
              >
                <option value="" disabled selected>Select category</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="dairy">Dairy</option>
                <option value="meat">Meat</option>
              </select>
            </div>
           <div>
           <label className="block mt-3 mb-1">Price</label>
            <input
              type="password"
              placeholder="Min 6 characters long"
              className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm rounded-md shadow-inner focus:outline-none"
              style={{ caretColor: 'red' }}
            />
           </div>
          </div>
          <div className="flex flex-col space-y-2">
      <label className="text-black text-sm mr-4">Message</label>
      <div className="w-full mb-6">
        <textarea
          placeholder="Type Message"
          className="p-4 bg-gray-200 w-full shadow-inner focus:outline-none text-sm border rounded  outline-blue-500 font-sans"
          rows="4"
        ></textarea>
        <p className="text-xs text-green-500 mt-1">This is a success message</p>
      </div>
      <input type="file"
        className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />

    </div>
            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 text-white h-10 rounded-xl font-black shadow transition-shadow duration-500 hover:shadow-none"
            >
              LOGIN
            </button>
          </div>
       
        </div>
      </div>
    );
};

export default AddItem;