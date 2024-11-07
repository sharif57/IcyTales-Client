import { useState } from "react";

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
        </div>
    );
};

export default ProductDetail;
