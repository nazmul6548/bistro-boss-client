

const Latestblog = ({i}) => {
    return (
        <div>
            <div className="bg-white font-[sans-serif]">
      <div className="">
        
        <div className=" gap-6 mt-16 max-md:max-w-lg mx-auto">
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src={i.image}
              alt="Blog Post 1"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span className="text-sm block text-gray-600 mb-2">10 FEB 2023 | BY JOHN DOE</span>
              <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
         
    </div>
        </div>
        </div>
        </div>
    );
};

export default Latestblog;