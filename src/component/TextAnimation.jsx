

const TextAnimation = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 mt-16 animate-gradient-x text-white rounded-lg shadow-lg p-8 max-w-xl mx-auto font-[sans-serif]">
            <h2 className="text-2xl font-bold text-center">
                We're constantly evolving and innovating
            </h2>
            <marquee className="mt-4 text-base font-italic" behavior="scroll" direction="left" scrollamount="3">
                Always pushing boundaries, never settling, always creating the future.
            </marquee>
        </div>
    );
};

export default TextAnimation;