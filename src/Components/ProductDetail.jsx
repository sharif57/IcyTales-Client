import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { ShoppingCart, Star } from 'lucide-react';

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState("https://i.ibb.co/gw4khZ8/Figure-classic-image1-png.png");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("Description");
    const [selectedColor, setSelectedColor] = useState("red");

    const images = [
        "https://i.ibb.co/gw4khZ8/Figure-classic-image1-png.png",
        "https://i.ibb.co/FnvWxrB/Figure-classic-image2-png.png",
        "https://i.ibb.co/qndzFcM/Figure-classic-image3-png.png",
        "https://i.ibb.co/3s2b9XY/Figure-classic-image4-png.png",
    ];

    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const renderContent = () => {
        if (activeTab === "Description") {
            return <div className="max-w-4xl">
                <p>Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur.
                </p>
                <p className="mt-4"> Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolore
                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptate ruis aute irure dolor in reprehenderit.</p>
            </div>;
        }
        if (activeTab === "Additional Information") {
            return <p>This product is made from high-quality ingredients and has a smooth texture. Perfect for any occasion.</p>;
        }
        if (activeTab === "Reviews") {
            return <p>★★★★☆ Based on 120 reviews. Customers say this is the best classic vanilla ice cream they've had!</p>;
        }
    };

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div>
                    <img
                        src={selectedImage}
                        alt="Selected Ice Cream"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="flex space-x-4 mt-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 rounded-lg cursor-pointer ${selectedImage === image ? "border-2 border-pink-500" : ""}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div>
                    <h1 className="text-3xl font-semibold">Classic Vanilla Ice Cream</h1>
                    <p className="text-yellow-500 mt-2">★★★★☆ (4.8/5)</p>
                    <p className="text-2xl font-bold mt-2 text-pink-600">$5.99</p>
                    <p className="text-gray-600 mt-4">
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </p>

                    {/* Color Options */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-700">Color:</h3>
                        <div className="flex items-center mt-2 space-x-2">
                            {["red", "pink", "green", "brown"].map((color) => (
                                <span
                                    key={color}
                                    className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color ? "border-2 border-black" : ""
                                        }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></span>
                            ))}
                        </div>
                    </div>

                    {/* Size Options */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-700">Size:</h3>
                        <div className="flex items-center mt-2 space-x-3">
                            <button className="px-4 py-2 text-gray-600 border rounded-md">L</button>
                            <button className="px-4 py-2 text-gray-600 border rounded-md">M</button>
                            <button className="px-4 py-2 text-gray-600 border rounded-md">S</button>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="mt-6 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 border px-3 py-1 rounded-md">
                            <button onClick={() => handleQuantityChange(-1)} className="text-gray-700 font-bold">-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)} className="text-gray-700 font-bold">+</button>
                        </div>
                        <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">Add to Cart</button>
                    </div>

                    <div className="flex items-center space-x-4 mt-6 text-gray-600">
                        <button className="hover:underline">Add to wishlist</button>
                        <button className="hover:underline">Compare</button>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-10">
                <div className="flex border-b space-x-4 text-gray-700">
                    {["Description", "Additional Information", "Reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 ${activeTab === tab ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="mt-4 text-gray-600">
                    {renderContent()}
                </div>
            </div>

            <div className="py-14 mt-10 ">

                <h1 className="text-5xl font-semibold pb-4 text-center">Related    <span className="text-pink-500">Products</span></h1>
                <p className='text-center'>Choose from some of related products</p>


                <div className='flex '>
                    <div className='max-w-4xl mx-auto mt-12'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <a href="#" className="group relative block overflow-hidden bg-white rounded-lg">
                                    <button
                                        className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                    >
                                        <span className="sr-only">Wishlist</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                        alt=""
                                        className="h-64 w-full rounded-lg p-4 object-cover  group-hover:scale- sm:h-72"
                                    />

                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className='flex  items-center justify-between'>
                                            <h3 className=" text-2xl font-semibold text-gray-900">Wireless Headphones</h3>

                                            <p className="text-gray-700 flex gap-1">
                                                <Star className='text-yellow-400' />
                                                4.9/5
                                            </p>

                                        </div>

                                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                            Officiis qui, enim cupiditate aliquam corporis iste.
                                        </p>

                                        <form className="mt-4 flex justify-between items-center">
                                            <p
                                                className="text-2xl font-bold text-pink-500"
                                            >
                                                $5.49
                                            </p>

                                            <button
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </form>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="group relative block overflow-hidden bg-white rounded-lg">
                                    <button
                                        className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                    >
                                        <span className="sr-only">Wishlist</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                        alt=""
                                        className="h-64 w-full rounded-lg p-4 object-cover  group-hover:scale- sm:h-72"
                                    />

                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className='flex  items-center justify-between'>
                                            <h3 className=" text-2xl font-semibold text-gray-900">Wireless Headphones</h3>

                                            <p className="text-gray-700 flex gap-1">
                                                <Star className='text-yellow-400' />
                                                4.9/5
                                            </p>

                                        </div>

                                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                            Officiis qui, enim cupiditate aliquam corporis iste.
                                        </p>

                                        <form className="mt-4 flex justify-between items-center">
                                            <p
                                                className="text-2xl font-bold text-pink-500"
                                            >
                                                $5.49
                                            </p>

                                            <button
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </form>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="group relative block overflow-hidden bg-white rounded-lg">
                                    <button
                                        className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                    >
                                        <span className="sr-only">Wishlist</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                        alt=""
                                        className="h-64 w-full rounded-lg p-4 object-cover  group-hover:scale- sm:h-72"
                                    />

                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className='flex  items-center justify-between'>
                                            <h3 className=" text-2xl font-semibold text-gray-900">Wireless Headphones</h3>

                                            <p className="text-gray-700 flex gap-1">
                                                <Star className='text-yellow-400' />
                                                4.9/5
                                            </p>

                                        </div>

                                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                            Officiis qui, enim cupiditate aliquam corporis iste.
                                        </p>

                                        <form className="mt-4 flex justify-between items-center">
                                            <p
                                                className="text-2xl font-bold text-pink-500"
                                            >
                                                $5.49
                                            </p>

                                            <button
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </form>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="group relative block overflow-hidden bg-white rounded-lg">
                                    <button
                                        className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                    >
                                        <span className="sr-only">Wishlist</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                        alt=""
                                        className="h-64 w-full rounded-lg p-4 object-cover  group-hover:scale- sm:h-72"
                                    />

                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className='flex  items-center justify-between'>
                                            <h3 className=" text-2xl font-semibold text-gray-900">Wireless Headphones</h3>

                                            <p className="text-gray-700 flex gap-1">
                                                <Star className='text-yellow-400' />
                                                4.9/5
                                            </p>

                                        </div>

                                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                            Officiis qui, enim cupiditate aliquam corporis iste.
                                        </p>

                                        <form className="mt-4 flex justify-between items-center">
                                            <p
                                                className="text-2xl font-bold text-pink-500"
                                            >
                                                $5.49
                                            </p>

                                            <button
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </form>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="group relative block overflow-hidden bg-white rounded-lg">
                                    <button
                                        className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                    >
                                        <span className="sr-only">Wishlist</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                        alt=""
                                        className="h-64 w-full rounded-lg p-4 object-cover  group-hover:scale- sm:h-72"
                                    />

                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className='flex  items-center justify-between'>
                                            <h3 className=" text-2xl font-semibold text-gray-900">Wireless Headphones</h3>

                                            <p className="text-gray-700 flex gap-1">
                                                <Star className='text-yellow-400' />
                                                4.9/5
                                            </p>

                                        </div>

                                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                            Officiis qui, enim cupiditate aliquam corporis iste.
                                        </p>

                                        <form className="mt-4 flex justify-between items-center">
                                            <p
                                                className="text-2xl font-bold text-pink-500"
                                            >
                                                $5.49
                                            </p>

                                            <button
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </form>
                                    </div>
                                </a>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
