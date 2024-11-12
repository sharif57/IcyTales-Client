
const SubscriptionForm = () => {
    return (
        <div className="flex items-center justify-center  w-full bg-white mt-11">
            <img src="/Figure → relive-circle.png (1).png" alt="" />
            <div className=" lg:p-8  text-center">
                <div className=" lg:w-3/4 mx-auto">
                    <h1 className="lg:text-5xl text-3xl font-bold mb-2">
                        Sign up for <span className="text-pink-500">Exclusive Deals</span> and Updates
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Get 10% off your next order and stay updated with our latest offers.
                    </p>
                    <form className="flex flex-col items-center">
                        <div className="relative w-full mb-4">
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="w-full py-3 px-4 rounded-full shadow-sm border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-40 py-3 text-white font-semibold rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
                        >
                            Subscribe
                        </button>
                        <div className="mt-4 text-sm text-gray-500">
                            <input type="checkbox" className="mr-2" />
                            I agree to the{" "}
                            <a href="#" className="text-pink-500 underline">
                                Privacy Policy
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <img src="/relive-triangle.png.png" alt="" />
        </div>
    );
};

export default SubscriptionForm;
