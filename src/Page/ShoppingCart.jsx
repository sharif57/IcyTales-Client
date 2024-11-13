
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ShoppingCart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [coupon, setCoupon] = useState("");
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);

    // Fetch cart items based on the user's email
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/addCart/${user.email}`)
                .then(res => setCartItems(res.data))
                .catch(error => console.error("Error fetching cart items:", error));
        }
    }, [user]);

    // Update item quantity for a specific item
    const handleQuantityChange = (_id, change) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item._id === _id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    // Calculate subtotal
    const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Apply 20% discount if the coupon is valid
    const discount = isDiscountApplied ? subTotal * 0.2 : 0;
    // const grandTotal = subTotal - discount + shippingCost;

    // Handle coupon code application
    const handleApplyCoupon = () => {
        if (coupon === "shopping20") {
            setIsDiscountApplied(true);
        } else {
            alert("Invalid coupon code");
        }
    };

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:3000/deleteItem/${_id}`)
                        .then(response => {
                            if (response.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your bookMark item has been deleted.",
                                    icon: "success"
                                });
                                setCartItems(prevBookmarks => prevBookmarks.filter(i => i._id !== _id));
                            }
                        })
                        .catch(error => {
                            console.error("Error deleting bookmark:", error);
                        });
                }
            });
    };

    return (
        <div>
            {/* Header Section */}
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-10 sm:py-20 lg:py-28">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Cart</h1>
                    <div className="mt-6 bg-white p-3 sm:p-4 w-full sm:w-3/4 lg:w-1/3 shadow-lg rounded-full mx-auto flex items-center justify-center space-x-2">
                        <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
                        <span>/</span>
                        <span className="text-gray-700">Cart</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto my-10 px-4 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center lg:text-left">Shopping Cart</h2>
                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="hidden sm:flex justify-between bg-gray-100 p-4 rounded-lg shadow-md font-semibold text-gray-600 text-xs sm:text-sm md:text-base">
                            <span>Product Details</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200 space-y-4 sm:space-y-0">
                                <div className="flex items-center space-x-4">
                                    <img src={item.photo} alt={item.name} className="w-16 h-16 rounded-lg" />
                                    <div className="text-center sm:text-left">
                                        <h3 className="font-semibold text-base md:text-lg">{item.title}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm">Color: {item.color}</p>
                                        <p className="text-gray-500 text-xs sm:text-sm">Size: {item.size}</p>
                                    </div>
                                </div>
                                <span className="font-semibold text-pink-600 text-sm md:text-base">${item.price.toFixed(2)}</span>
                                <div className="flex items-center space-x-2 border px-3 py-1 rounded-md">
                                    <button onClick={() => handleQuantityChange(item._id, -1)} className="text-gray-700 font-bold">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item._id, 1)} className="text-gray-700 font-bold">+</button>
                                </div>
                                <span className="font-semibold text-gray-800 text-sm md:text-base">${(item.price * item.quantity).toFixed(2)}</span>
                                <button onClick={() => handleDelete(item._id)} className="text-red-500 text-lg md:text-xl font-bold">×</button>
                            </div>
                        ))}

                        <button className="text-pink-500 mt-4 flex items-center justify-center sm:justify-start space-x-1 hover:underline">
                            <span>←</span> <Link to="/">Continue Shopping</Link>
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-purple-600">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center lg:text-left">Order Summary</h3>
                        <div className="flex items-center mb-4">
                            <input
                                type="text"
                                placeholder="Apply Coupons"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                className="flex-1 border border-gray-300 rounded-md p-2 text-xs sm:text-sm md:text-base"
                            />
                            <button onClick={handleApplyCoupon} className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-xs sm:text-sm md:text-base">Apply</button>
                        </div>
                        <div className="flex justify-between font-semibold text-sm md:text-lg mb-4">
                            <span>Coupon Code:</span>
                            <span className="text-pink-600">shopping20</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600 text-sm">Sub Total:</span>
                            <span className="font-semibold text-sm">
                                ${(subTotal - discount).toFixed(2)}
                            </span>
                        </div>
                        {isDiscountApplied && (
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600 text-sm">Discount (20%):</span>
                                <span className="font-semibold text-green-600 text-sm">-${discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600 text-sm">Shipping:</span>
                            <span className="font-semibold text-sm">                                ${(subTotal - discount).toFixed(2)}</span>
                        </div>

                        {/* <div className="flex justify-between font-semibold text-lg mb-4">
                            <span>Grand Total:</span>
                            <span className="text-pink-600">${grandTotal.toFixed(2)}</span>
                        </div> */}

                        <Link to={'/checkOut'}>
                            <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">Proceed to Checkout</button>
                        </Link>
                        <p className="text-gray-500 mt-4 text-center text-xs sm:text-sm">Safe and Secure Payments. Easy Returns. 100% Authentic Products.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShoppingCart;
