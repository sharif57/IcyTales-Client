import { useContext, useEffect, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Shop = () => {

    const { user } = useContext(AuthContext)

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const [items, setItems] = useState([]);

    // Fetch products
    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    // Filter items
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort items
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

    // Handlers
    const handlePageChange = (page) => setCurrentPage(page);
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleSortChange = (e) => setSortOption(e.target.value);


    const handlePost = (e, post) => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const title = post.title; // Get the title from the passed post object
        const category = post.category || "General"; // Assuming a default category if not provided
        const price = post.price;
        const currentTime = new Date();
        const photo = post.image || ""; // Assuming a default empty photo if not provided
        const description = post.description;
        const size = post.size || 'L';
        const quantity = post.quantity || 1;
        const color = post.quantity || 'white';

        const newPost = { name, email,size, image,quantity,color, title, category, price, currentTime, photo, description };
        console.log(newPost);

        fetch('http://localhost:3000/addCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post Bookmarked Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // e.target.reset();
                }
            });
    };



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
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-48 px-4 py-2 text-sm border rounded-full outline-none focus:ring focus:ring-pink-200"
                        onChange={handleSearch}
                    />
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
                        <h1 className="text-3xl font-semibold">Categories</h1>
                        <div className="mt-4 text-xl text-gray-500">
                            <input type="checkbox" className="mr-2" /> Canned Ice Cream(3)
                        </div>
                        <div className="mt-4 text-xl text-gray-500">
                            <input type="checkbox" className="mr-2" /> Frozen Yogurt(5)
                        </div>
                        {/* Other categories here */}
                        <hr className="border-x-8 mt-4" />

                        <div className="mt-7">
                            <h1 className="text-3xl font-semibold">Filter by Price</h1>
                            <h1 className="mt-4">Range: <span className="text-pink-500">5$ - 50$</span></h1>
                        </div>

                        <h1 className="text-3xl font-semibold mt-16">Featured Products</h1>
                        <div className="mt-8 flex gap-6">
                            <img src="/Figure (3).png" alt="Rocky Road" />
                            <div>
                                <h1 className="text-2xl font-bold">Rocky Road</h1>
                                <div className="flex gap-4 mt-3">
                                    <p className="line-through">$9.80</p>
                                    <p className="text-pink-500">$9.80</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Items Section */}
                    <div className="w-3/4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {currentItems.map((item, index) => (
                                <Link to={`/productDetail/${item._id}`} key={index} className="group shadow-md relative block overflow-hidden bg-white rounded-lg">
                                    <button className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                        <span className="sr-only">Wishlist</span>
                                    </button>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg p-4 mx-auto sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
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
                                            <button 
                                                type="button"
                                                className="" >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>

                                        </div>
                                    </div>
                                </Link>
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
