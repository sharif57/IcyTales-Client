import { ArrowRight } from "lucide-react";

const Banner = () => {
    return <div>
        {/* <div className="bg-no-repeat" style={{ backgroundImage: `url('/Figure → banner-lefttopimage.png.png')` }}>
            <div className="flex items-center justify-between container mx-auto">
                <div className="space-y-2">
                    <p className="text-2xl font-semibold ">Welcome to The</p>
                    <h1 className="text-6xl font-bold ">Discover <span className="text-pink-500">Sweet</span> Delights!</h1>
                    <p>Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.</p>
                    <button className="btn btn-outline">Browse Our Classic Flavors <ArrowRight /></button>
                </div>
                <div
                    className=" bg-no-repeat bg-gray-200 rounded-full"
                >
                    <img className="size-[600px] p-4" src="/banner-image.png.png" alt="" />
                </div>
            </div>
        </div> */}
        <div className="bg-no-repeat" style={{ backgroundImage: `url('/Figure → banner-lefttopimage.png.png')` }}>
            <div className="bg-gradient-to-r from-pink-100 via-white to-pink-100 min-h-screen flex items-center justify-center ">
                <div className="container mx-auto px-6 py-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="lg:w-1/2">
                        <p className="text-lg font-semibold text-purple-700 mb-2">Welcome to The</p>
                        <h1 className="text-5xl font-extrabold text-gray-900">
                            Discover <span className="text-pink-500">Sweet</span> Delights!
                        </h1>
                        <p className="text-gray-600 mt-4 mb-8">
                            Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
                        >
                            Browse Our Classic Flavors →
                        </a>
                    </div>
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src="/banner-image.png.png" // Replace with the actual image URL
                                alt="Ice cream cone with colorful toppings"
                                className="w-full lg:max-w-md rounded-lg "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <div className="mt-14 flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
                <img src="/Figure → relive-circle.png.png" alt="" />
                <img src="/relive-image.png.png" alt="" />
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold ">Relive the Sweet
                        Memories of Classic
                        <span className="text-pink-500"> Ice Creams</span></h1>
                    <p>From rich chocolate fudge to creamy vanilla sundaes,
                        discover our menu of classic ice cream creations.</p>
                    <button className="btn btn-outline">Explore Our Menu <ArrowRight /></button>
                </div>
                <img src="/Figure → relive-triangle.png.png" alt="" />
            </div>
            <img className="chat-image" src="/Figure → relive-rightbottomimage.png.png" alt="" />
        </div> */}

        <div className="mt-14 flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-12">
                {/* Left Image */}
                <img src="/Figure → relive-circle.png.png" alt="" className="w-20 h-20 md:w-28 md:h-28 lg:w-auto lg:h-auto" />

                {/* Main Image */}
                <img src="/relive-image.png.png" alt="" className="size-[300px] md:w-48 md:h-48 lg:w-auto lg:h-auto" />

                {/* Text Content */}
                <div className="space-y-3 text-center lg:text-left max-w-xs md:max-w-md lg:max-w-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Relive the Sweet Memories of Classic
                        <span className="text-pink-500"> Ice Creams</span>
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">
                        From rich chocolate fudge to creamy vanilla sundaes, discover our menu of classic ice cream creations.
                    </p>
                    <button className="btn btn-outline flex items-center justify-center mx-auto lg:mx-0">
                        Explore Our Menu <ArrowRight className="ml-2" />
                    </button>
                </div>

                {/* Triangle Image */}
                <img src="/Figure → relive-triangle.png.png" alt="" className="w-16 h-16 md:w-24 md:h-24 lg:w-auto lg:h-auto hidden lg:block" />
            </div>

            {/* Bottom Image for Smaller Screens */}
            <img className="mt-8 lg:mt-0 chat-image w-24 h-24 md:w-32 md:h-32 lg:w-auto lg:h-auto" src="/Figure → relive-rightbottomimage.png.png" alt="" />
        </div>

    </div>;
};
export default Banner;