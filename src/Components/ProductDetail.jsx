import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Star } from 'lucide-react';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const data = useLoaderData();

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const images = data.images || [
        "https://i.ibb.co/gw4khZ8/Figure-classic-image1-png.png",
        "https://i.ibb.co/FnvWxrB/Figure-classic-image2-png.png",
        "https://i.ibb.co/qndzFcM/Figure-classic-image3-png.png",
        "https://i.ibb.co/3s2b9XY/Figure-classic-image4-png.png",
    ];

    const [selectedImage, setSelectedImage] = useState(data.image || "https://i.ibb.co/gw4khZ8/Figure-classic-image1-png.png");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("Description");
    const [selectedColor, setSelectedColor] = useState("red");
    const [selectedSize, setSelectedSize] = useState("M");
    const [newReview, setNewReview] = useState({ comment: "", rating: 5 });
    const [reviews, setReviews] = useState(data.reviews || []);  // Assuming reviews are part of the product data

    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, { ...newReview, date: new Date().toLocaleDateString() }]);
        setNewReview({ comment: "", rating: 5 });
    };

    const renderContent = () => {
        if (activeTab === "Description") {
            return <div className="max-w-4xl">
                <p>{data.description}</p>
            </div>;
        }
        if (activeTab === "Additional Information") {
            return <p>This product is made from high-quality ingredients and has a smooth texture. Perfect for any occasion.</p>;
        }
        if (activeTab === "Reviews") {
            return (
                <div>
                    <div className="space-y-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="border-b pb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <p className="font-semibold">{review.reviewer}</p>
                                    <span className="text-gray-500 text-sm">{review.date}</span>
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                    {/* Review Form */}
                    <form onSubmit={handleReviewSubmit} className="mt-6 space-y-4">
                        <div className="flex items-center">
                            <span className="mr-2">Rating:</span>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <Star
                                        key={rating}
                                        className={`cursor-pointer ${newReview.rating >= rating ? "text-yellow-400" : "text-gray-300"}`}
                                        onClick={() => setNewReview({ ...newReview, rating })}
                                    />
                                ))}
                            </div>
                        </div>
                        <textarea
                            className="w-full p-2 border rounded-md"
                            placeholder="Write your review..."
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            rows="4"
                        />
                        <button type="submit" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">Submit Review</button>
                    </form>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div>
                    <img
                        src={selectedImage}
                        alt="Selected Product"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="flex space-x-4 mt-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 rounded-lg cursor-pointer ${selectedImage === image ? "border-2 border-pink-500" : ""}`}
                                onClick={() => setSelectedImage(image)} // Set the selected image when clicked
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div>
                    <h1 className="text-3xl font-semibold">{data.title}</h1>
                    <p className="text-yellow-500 mt-2">★★★★☆ ({data.rating}/5)</p>
                    <p className="text-2xl font-bold mt-2 text-pink-600">${data.price}</p>
                    <p className="text-gray-600 mt-4">{data.description}</p>

                    {/* Color Options */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-700">Color:</h3>
                        <div className="flex items-center mt-2 space-x-2">
                            {["red", "pink", "green", "brown"].map((color) => (
                                <span
                                    key={color}
                                    className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color ? "border-2 border-black" : ""}`}
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
                            {["S", "M", "L"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeSelect(size)}
                                    className={`px-4 py-2 text-gray-600 border rounded-md ${selectedSize === size ? "bg-pink-500 text-white" : ""}`}
                                >
                                    {size}
                                </button>
                            ))}
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
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-10">
                <div className="flex border-b space-x-4 text-gray-700">
                    {["Description", "Additional Information", "Reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 ${activeTab === tab ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"}`}
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
                        {
                            products.slice(0, 6).map(product => <SwiperSlide key={product._id}>
                                <div>
                                    <Link to={`/productDetail/${product._id}`} className="group relative block overflow-hidden bg-white rounded-lg">
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
                                            src={product.image}
                                            alt=""
                                            className="  rounded-lg p-4 bg-center w-[240px] mx-auto  group-hover:scale- sm:h-72"
                                        />

                                        <div className="relative border border-gray-100 bg-white p-6">
                                            <div className='flex  items-center justify-between'>
                                                <h3 className=" text-2xl font-semibold text-gray-900">{product.title.slice(0, 18)}</h3>

                                                <p className="text-gray-700 flex gap-1">
                                                    <Star className='text-yellow-400' />
                                                    {product.rating}/5
                                                </p>

                                            </div>

                                            <p className="mt-1.5 line-clamp-3 text-gray-700">
                                                {product.description}
                                            </p>

                                            <div className="mt-4 flex justify-between items-center">
                                                <p
                                                    className="text-2xl font-bold text-pink-500"
                                                >
                                                    ${product.price}
                                                </p>

                                                <button
                                                    type="button"
                                                    className=""
                                                >
                                                    <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                                </button>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;


