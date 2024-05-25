

const NewsLetter = () => {
    return (
        
        <div className="relative font-[sans-serif] mt-40 mb-40">
        {/* Fixed background section */}
        <div className="relative w-full h-[500px]">
            <img src="https://i.ibb.co/3pFdwv8/pexels-dana-tentis-118658-750073.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover object-bottom" />
            <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 py-10">
                <div className="max-w-3xl mx-auto">
                    <h3 className="md:text-5xl text-4xl font-extrabold">Subscribe to Our Newsletter</h3>
                    <p className="text-sm mt-6">Subscribe to our newsletter and stay up to date with the latest news,
                        updates, and exclusive offers. Get valuable insights. Join our community today!</p>
                    <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
                        <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent text-sm text-[#333] px-4 py-3" />
                        <button type='button' className="bg-[#333] hover:bg-[#222] transition-all text-white font-semibold text-sm rounded-full px-8 py-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};




export default NewsLetter;