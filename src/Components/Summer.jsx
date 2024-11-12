const Summer = () => {
    return (
        <div className="mt-14 bg-indigo-500">
            <div
                className="bg-inherit bg-no-repeat bg-bottom bg-right bg-indigo-500 p-4"
                style={{ backgroundImage: `url('/Image (30).png')` }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-around gap-6 lg:gap-0">
                        {/* Left Image Column */}
                        <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-14">
                            <img
                                className="w-8 h-8 hidden sm:block lg:w-12 lg:h-12"
                                src="/Figure → relive-triangle.png.png"
                                alt=""
                            />
                            <img
                                className="w-10 h-10 hidden sm:block lg:w-16 lg:h-16"
                                src="/Figure → special-doted.png.png"
                                alt=""
                            />
                        </div>

                        {/* Text and Button Content */}
                        <div className="space-y-4 text-white text-center lg:text-left max-w-xs md:max-w-md lg:max-w-lg">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                                Summer Special!
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Buy One Sundae, Get One 50% Off!
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-2 pt-4">
                                <button className="btn btn-outline text-white">
                                    Get This Deal
                                </button>
                                <p className="text-xs md:text-sm lg:text-base">
                                    Use code: SUMMER50 at checkout.
                                </p>
                            </div>
                        </div>

                        {/* Right Image Column */}
                        <div>
                            <img
                                className="size-[300px] md:w-48 md:h-48 lg:w-auto lg:h-auto"
                                src="/Figure → special-image.png.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summer;
