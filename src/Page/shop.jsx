

import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Shop = () => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("default");

    const items = [
        // Canned Ice Cream
        {
            image: 'https://i.ibb.co/gw4khZ8/Figure-classic-image1-png.png',
            title: 'Classic Vanilla Ice Cream',
            category: 'Canned Ice Cream',
            description: 'Creamy vanilla ice cream topped with cherry.',
            price: 56.6
        },
        {
            image: 'https://i.ibb.co/FnvWxrB/Figure-classic-image2-png.png',
            title: 'Chocolate Chip Ice Cream',
            category: 'Canned Ice Cream',
            description: 'Rich chocolate ice cream with chocolate chips.',
            price: 60.0
        },
        {
            image: 'https://i.ibb.co/XYZ123/Figure-strawberry-png.png',
            title: 'Strawberry Ice Cream',
            category: 'Canned Ice Cream',
            description: 'Fresh strawberry ice cream with a fruity twist.',
            price: 58.5
        },
    
        // Frozen Yogurt
        {
            image: 'https://i.ibb.co/ABC456/Figure-plain-yogurt-png.png',
            title: 'Plain Frozen Yogurt',
            category: 'Frozen Yogurt',
            description: 'Smooth and creamy plain frozen yogurt.',
            price: 42.0
        },
        {
            image: 'https://i.ibb.co/DEF789/Figure-blueberry-yogurt-png.png',
            title: 'Blueberry Frozen Yogurt',
            category: 'Frozen Yogurt',
            description: 'Frozen yogurt with fresh blueberry flavor.',
            price: 45.0
        },
        {
            image: 'https://i.ibb.co/GHI123/Figure-mango-yogurt-png.png',
            title: 'Mango Frozen Yogurt',
            category: 'Frozen Yogurt',
            description: 'Sweet and tangy mango frozen yogurt.',
            price: 46.5
        },
        {
            image: 'https://i.ibb.co/JKL456/Figure-strawberry-yogurt-png.png',
            title: 'Strawberry Frozen Yogurt',
            category: 'Frozen Yogurt',
            description: 'Delicious strawberry frozen yogurt with real berries.',
            price: 48.0
        },
        {
            image: 'https://i.ibb.co/MNO789/Figure-chocolate-yogurt-png.png',
            title: 'Chocolate Frozen Yogurt',
            category: 'Frozen Yogurt',
            description: 'Rich chocolate frozen yogurt for dessert lovers.',
            price: 50.0
        },
    
        // Ice Cream Cakes
        {
            image: 'https://i.ibb.co/PQR123/Figure-chocolate-cake-png.png',
            title: 'Chocolate Ice Cream Cake',
            category: 'Ice Cream Cakes',
            description: 'Chocolate ice cream cake with chocolate layers.',
            price: 85.0
        },
        {
            image: 'https://i.ibb.co/STU456/Figure-vanilla-cake-png.png',
            title: 'Vanilla Ice Cream Cake',
            category: 'Ice Cream Cakes',
            description: 'Classic vanilla ice cream cake with vanilla layers.',
            price: 82.0
        },
        {
            image: 'https://i.ibb.co/VWX789/Figure-mixed-fruit-cake-png.png',
            title: 'Mixed Fruit Ice Cream Cake',
            category: 'Ice Cream Cakes',
            description: 'Fruity ice cream cake with a mix of berries and cream.',
            price: 90.0
        },
    
        // Milkshakes
        {
            image: 'https://i.ibb.co/YZA123/Figure-vanilla-milkshake-png.png',
            title: 'Vanilla Milkshake',
            category: 'Milkshakes',
            description: 'Classic vanilla milkshake with whipped cream.',
            price: 25.0
        },
        {
            image: 'https://i.ibb.co/BCD456/Figure-chocolate-milkshake-png.png',
            title: 'Chocolate Milkshake',
            category: 'Milkshakes',
            description: 'Rich and creamy chocolate milkshake.',
            price: 27.5
        },
        {
            image: 'https://i.ibb.co/EFG789/Figure-strawberry-milkshake-png.png',
            title: 'Strawberry Milkshake',
            category: 'Milkshakes',
            description: 'Sweet strawberry milkshake with fresh strawberries.',
            price: 26.0
        },
        {
            image: 'https://i.ibb.co/HIJ123/Figure-banana-milkshake-png.png',
            title: 'Banana Milkshake',
            category: 'Milkshakes',
            description: 'Smooth banana milkshake with honey.',
            price: 24.5
        },
        {
            image: 'https://i.ibb.co/KLM456/Figure-oreo-milkshake-png.png',
            title: 'Oreo Milkshake',
            category: 'Milkshakes',
            description: 'Oreo-flavored milkshake with crushed cookies.',
            price: 28.0
        },
        {
            image: 'https://i.ibb.co/NOP789/Figure-mango-milkshake-png.png',
            title: 'Mango Milkshake',
            category: 'Milkshakes',
            description: 'Tropical mango milkshake for a refreshing treat.',
            price: 26.5
        },
    
        // Popsicles
        {
            image: 'https://i.ibb.co/QRS123/Figure-lemon-popsicle-png.png',
            title: 'Lemon Popsicle',
            category: 'Popsicles',
            description: 'Refreshing lemon-flavored popsicle.',
            price: 15.0
        },
        {
            image: 'https://i.ibb.co/TUV456/Figure-orange-popsicle-png.png',
            title: 'Orange Popsicle',
            category: 'Popsicles',
            description: 'Citrus orange popsicle for a refreshing taste.',
            price: 15.5
        },
        {
            image: 'https://i.ibb.co/WXY789/Figure-grape-popsicle-png.png',
            title: 'Grape Popsicle',
            category: 'Popsicles',
            description: 'Sweet grape popsicle with real fruit flavor.',
            price: 16.0
        },
        {
            image: 'https://i.ibb.co/ZA1234/Figure-strawberry-popsicle-png.png',
            title: 'Strawberry Popsicle',
            category: 'Popsicles',
            description: 'Classic strawberry popsicle with a fruity punch.',
            price: 16.5
        },
    
        // Sundaes
        {
            image: 'https://i.ibb.co/BC1234/Figure-hot-fudge-sundae-png.png',
            title: 'Hot Fudge Sundae',
            category: 'Sundaes',
            description: 'Sundae with rich hot fudge and whipped cream.',
            price: 55.0
        },
        {
            image: 'https://i.ibb.co/DE5678/Figure-caramel-sundae-png.png',
            title: 'Caramel Sundae',
            category: 'Sundaes',
            description: 'Creamy sundae topped with caramel sauce.',
            price: 54.5
        },
        {
            image: 'https://i.ibb.co/FG6789/Figure-chocolate-sundae-png.png',
            title: 'Chocolate Sundae',
            category: 'Sundaes',
            description: 'Classic chocolate sundae with chocolate syrup.',
            price: 56.0
        },
        {
            image: 'https://i.ibb.co/HI1234/Figure-berry-sundae-png.png',
            title: 'Berry Sundae',
            category: 'Sundaes',
            description: 'Refreshing sundae with mixed berries and cream.',
            price: 57.5
        },
        {
            image: 'https://i.ibb.co/JK4567/Figure-nutty-sundae-png.png',
            title: 'Nutty Sundae',
            category: 'Sundaes',
            description: 'Sundae topped with nuts and chocolate drizzle.',
            price: 59.0
        }
    ];
    
    // Filter items based on search term
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort items based on selected option
    const sortedItems = [...filteredItems].sort((a, b) => {
        if (sortOption === "priceLow") return a.price - b.price;
        if (sortOption === "priceHigh") return b.price - a.price;
        return 0; // Default order
    });

    // Paginate items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = sortedItems.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleSortChange = (e) => setSortOption(e.target.value);

    return (
        <div className="bg-[#fcfcfc]">
            {/* Header Section */}
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
                <h1 className="text-center text-6xl font-bold">Shop</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to="/">Home</Link>/<Link to="/blogs/shop">Shop</Link>
                </div>
            </div>

            <div className="container mx-auto mt-8">
                {/* Search and Sort Section */}
                <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-48 px-4 py-2 text-sm border rounded-full outline-none focus:ring focus:ring-pink-200"
                            onChange={handleSearch}
                        />
                        <button className="p-2 bg-pink-500 rounded-md hover:bg-pink-600">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 6h16V4H4v2zm0 5h16V9H4v2zm0 5h16v-2H4v2zm0 5h16v-2H4v2z" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-sm text-gray-500">
                        Showing {startIndex + 1}–{endIndex} of {sortedItems.length} results
                    </div>

                    <select
                        className="px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring focus:ring-pink-200"
                        onChange={handleSortChange}
                    >
                        <option value="default">Default Sorting</option>
                        <option value="priceLow">Sort by Price: Low to High</option>
                        <option value="priceHigh">Sort by Price: High to Low</option>
                    </select>
                </div>

                <div className="flex gap-5 p-4 mt-16">
                    {/* Sidebar Section */}
                    <div className="w-1/4">
                        {/* Add more category checkboxes as needed */}
                        <div className="  ">
                            <div>
                                <h1 className="text-3xl font-semibold">Categories</h1>
                                <div className="mt-4 text-xl text-gray-500">
                                    <input type="checkbox" className="mr-2 size-4" />
                                    Canned Ice Cream(3)
                                </div>
                                <div className="mt-4 text-xl text-gray-500">
                                    <input type="checkbox" className="mr-2 size-4" />
                                    Frozen Yogurt(5)
                                </div>
                                <div className="mt-4 text-xl text-gray-500">
                                    <input type="checkbox" className="mr-2 size-4" />
                                    Ice Cream Cakes(3)
                                </div>
                                <div className="mt-4 text-xl text-gray-500">
                                    <input type="checkbox" className="mr-2 size-4" />
                                    Milkshakes(6)
                                </div>
                                <div className="mt-4 text-xl text-gray-500">
                                    <input type="checkbox" className="mr-2 size-4" />
                                    Popsicles(4)
                                </div>
                                <div className="mt-4 text-xl text-gray-500">
                                    <input type="checkbox" className="mr-2 size-4" />
                                    Sundaes(5)
                                </div>
                                <hr className="border-x-8 mt-4" />

                                <div className="mt-7">
                                    <h1 className="text-3xl font-semibold">Filter by Price</h1>
                                    <div className="mt-4">
                                        <h1>Range: <span className="text-pink-500">5$ - 50$</span></h1>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h1 className="text-3xl font-semibold">Featured Products</h1>
                                    <div className="mt-8 flex gap-6">
                                        <img src="/Figure (3).png" alt="" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Rocky Road</h1>
                                            <div className="flex gap-4 mt-3">
                                                <p className="line-through">$9.80</p>
                                                <p className="text-pink-500">$9.80</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex gap-6">
                                        <img src="/Figure (3).png" alt="" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Rocky Road</h1>
                                            <div className="flex gap-4 mt-3">
                                                <p className="line-through">$9.80</p>
                                                <p className="text-pink-500">$9.80</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex gap-6">
                                        <img src="/Figure (3).png" alt="" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Rocky Road</h1>
                                            <div className="flex gap-4 mt-3">
                                                <p className="line-through">$9.80</p>
                                                <p className="text-pink-500">$9.80</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex gap-6">
                                        <img src="/Figure (3).png" alt="" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Rocky Road</h1>
                                            <div className="flex gap-4 mt-3">
                                                <p className="line-through">$9.80</p>
                                                <p className="text-pink-500">$9.80</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex gap-6">
                                        <img src="/Figure (3).png" alt="" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Rocky Road</h1>
                                            <div className="flex gap-4 mt-3">
                                                <p className="line-through">$9.80</p>
                                                <p className="text-pink-500">$9.80</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Product Items Section */}
                    <div className="w-3/4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {currentItems.map((item, index) => (
                                <div key={index} className="group shadow-md relative block overflow-hidden bg-white rounded-lg">
                                    <button className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                        <span className="sr-only">Wishlist</span>
                                    </button>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rounded-lg  p-4 mx-auto sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-700 flex gap-1">
                                                <Star className="text-yellow-400" />4.9/5
                                            </p>
                                        </div>
                                        <p className="mt-1.5 line-clamp-3 text-gray-700">{item.description}</p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <p className="text-2xl font-bold text-pink-500">${item.price.toFixed(2)}</p>
                                            <button type="button">
                                                <ShoppingCart className="bg-[#683292] p-3 rounded-full text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="mt-8 flex justify-center items-center gap-4">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 rounded-full ${currentPage === index + 1
                                        ? "bg-pink-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
