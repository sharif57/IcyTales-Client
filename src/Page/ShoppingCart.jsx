// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import axios from "axios";

// const ShoppingCart = () => {

//     const {user} = useContext(AuthContext)

//     const [cartItems, setCartItems] = useState([
//         // { id: 1, name: "Classic Vanilla", color: "White", size: "L", price: 4.99, quantity: 3, image: "https://i.ibb.co/gw4khZ8/Figure-classic-image1-png.png" },
//         // { id: 2, name: "Chocolate Brownie", color: "Brown", size: "S", price: 5.49, quantity: 8, image: "https://i.ibb.co/FnvWxrB/Figure-classic-image2-png.png" },
//         // { id: 3, name: "Strawberry Cake", color: "Red", size: "M", price: 5.29, quantity: 4, image: "https://i.ibb.co/qndzFcM/Figure-classic-image3-png.png" },
//         // { id: 4, name: "Mint Chocolate", color: "Green", size: "L", price: 3.99, quantity: 2, image: "https://i.ibb.co/3s2b9XY/Figure-classic-image4-png.png" },
//     ]);
//     // const [bookMarks, setBookMarks] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             axios(`http://localhost:3000/addCart/${user.email}`)
//                 .then(res => {
//                     setCartItems(res.data);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching bookmarks:", error);
//                 });
//         }
//     }, [user]);

//     const [coupon, setCoupon] = useState("");
//     const shippingCost = 20.0;

//     const handleQuantityChange = (_id, change) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item._id === _id
//                     ? { ...item, quantity: Math.max(1, item.quantity + change) }
//                     : item
//             )
//         );
//     };

//     // const handleRemoveItem = (id) => {
//     //     setCartItems(cartItems.filter((item) => item.id !== id));
//     // };

//     const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     const grandTotal = subTotal + shippingCost;

//     return (
//         <div>
//             <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
//                 <h1 className="text-center text-6xl font-bold">Shop</h1>
//                 <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
//                     <Link to="/">Home</Link>/<Link to="/blogs/shop">Shop</Link>
//                 </div>
//             </div>
//             <div className="container mx-auto my-10 px-4 lg:px-10">

//                 <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>
//                 <div className="grid lg:grid-cols-3 gap-10">
//                     {/* Cart Items */}
//                     <div className="lg:col-span-2 space-y-4">
//                         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                             <div className="flex justify-between font-semibold text-gray-600">
//                                 <span>Product Details</span>
//                                 <span>Price</span>
//                                 <span>Quantity</span>
//                                 <span>Total</span>
//                             </div>
//                         </div>

//                         {cartItems.map((item) => (
//                             <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200">
//                                 {/* Product Details */}
//                                 <div className="flex items-center space-x-4">
//                                     <img src={item.photo} alt={item.name} className="w-16 h-16 rounded-lg" />
//                                     <div>
//                                         <h3 className="font-semibold text-lg">{item.title}</h3>
//                                         <p className="text-gray-500">Color: {item.color}</p>
//                                         <p className="text-gray-500">Size: {item.size}</p>
//                                     </div>
//                                 </div>

//                                 {/* Price */}
//                                 <span className="font-semibold text-pink-600">${item.price.toFixed(2)}</span>

//                                 {/* Quantity */}
//                                 <div className="flex items-center space-x-2 border px-3 py-1 rounded-md">
//                                     <button onClick={() => handleQuantityChange(item._id, -1)} className="text-gray-700 font-bold">-</button>
//                                     <span>{item.quantity}</span>
//                                     <button onClick={() => handleQuantityChange(item._id, 1)} className="text-gray-700 font-bold">+</button>
//                                 </div>

//                                 {/* Total */}
//                                 <span className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>

//                                 {/* Remove Button */}
//                                 <button className="text-red-500 text-xl font-bold">×</button>
//                                 {/* <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 text-xl font-bold">×</button> */}
//                             </div>
//                         ))}

//                         <button className="text-pink-500 mt-4 flex items-center space-x-1 hover:underline">
//                             <span>←</span> <Link to={'/'}>Continue Shopping</Link>
//                         </button>
//                     </div>

//                     {/* Order Summary */}
//                     <div className="bg-gray-50 p-6 rounded-lg rounded-t-2xl shadow-md border-t-4 border-purple-600">
//                         <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//                         <div className="flex items-center mb-4">
//                             <input
//                                 type="text"
//                                 placeholder="Apply Coupons"
//                                 value={coupon}
//                                 onChange={(e) => setCoupon(e.target.value)}
//                                 className="flex-1 border border-gray-300 rounded-md p-2"
//                             />
//                             <button className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">Apply</button>
//                         </div>
//                         <div className="flex justify-between mb-2">
//                             <span className="text-gray-600">Sub Total:</span>
//                             <span className="font-semibold">${subTotal.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between mb-2">
//                             <span className="text-gray-600">Shipping:</span>
//                             <span className="font-semibold">${shippingCost.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between font-semibold text-lg mb-4">
//                             <span>Grand Total:</span>
//                             <span className="text-pink-600">${grandTotal.toFixed(2)}</span>
//                         </div>
//                         <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">Proceed to Checkout</button>
//                         <p className="text-gray-500 mt-4 text-center text-sm">Safe and Secure Payments. Easy Returns. 100% Authentic Products.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShoppingCart;


import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const ShoppingCart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [coupon, setCoupon] = useState("");
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const shippingCost = 20.0;

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
    const grandTotal = subTotal - discount + shippingCost;

    // Handle coupon code application
    const handleApplyCoupon = () => {
        if (coupon === "shopping20") {
            setIsDiscountApplied(true);
        } else {
            alert("Invalid coupon code");
        }
    };

    return (
        <div>
            {/* Header Section */}
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
                <h1 className="text-center text-6xl font-bold">Cart</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to="/">Home</Link>/<Link to="/blogs/cart">Cart</Link>
                </div>
            </div>
            <div className="container mx-auto my-10 px-4 lg:px-10">
                <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="flex justify-between font-semibold text-gray-600">
                                <span>Product Details</span>
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Total</span>
                            </div>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <img src={item.photo} alt={item.name} className="w-16 h-16 rounded-lg" />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-gray-500">Color: {item.color}</p>
                                        <p className="text-gray-500">Size: {item.size}</p>
                                    </div>
                                </div>
                                <span className="font-semibold text-pink-600">${item.price.toFixed(2)}</span>
                                <div className="flex items-center space-x-2 border px-3 py-1 rounded-md">
                                    <button onClick={() => handleQuantityChange(item._id, -1)} className="text-gray-700 font-bold">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item._id, 1)} className="text-gray-700 font-bold">+</button>
                                </div>
                                <span className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                                <button className="text-red-500 text-xl font-bold">×</button>
                            </div>
                        ))}

                        <button className="text-pink-500 mt-4 flex items-center space-x-1 hover:underline">
                            <span>←</span> <Link to="/">Continue Shopping</Link>
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-6 rounded-lg rounded-t-2xl shadow-md border-t-4 border-purple-600">
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                        <div className="flex items-center mb-4">
                            <input
                                type="text"
                                placeholder="Apply Coupons"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                className="flex-1 border border-gray-300 rounded-md p-2"
                            />
                            <button onClick={handleApplyCoupon} className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">Apply</button>
                        </div>
                        <div className="flex justify-between font-semibold text-lg mb-4">
                            <span>coupon code:</span>
                            <span className="text-pink-600">shopping20</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Sub Total:</span>
                            <span className="font-semibold">${subTotal.toFixed(2)}</span>
                        </div>
                        {isDiscountApplied && (
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Discount (20%):</span>
                                <span className="font-semibold text-green-600">-${discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Shipping:</span>
                            <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between font-semibold text-lg mb-4">
                            <span>Grand Total:</span>
                            <span className="text-pink-600">${grandTotal.toFixed(2)}</span>
                        </div>

                        <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">Proceed to Checkout</button>
                        <p className="text-gray-500 mt-4 text-center text-sm">Safe and Secure Payments. Easy Returns. 100% Authentic Products.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
