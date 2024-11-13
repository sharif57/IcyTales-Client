// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import axios from "axios";

// const CheckoutForm = () => {
//     const { user } = useContext(AuthContext)
//     const [paymentMethod, setPaymentMethod] = useState("Credit Card");

//     const handlePaymentMethodChange = (method) => {
//         setPaymentMethod(method);
//     };


//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             axios.get(`http://localhost:3000/addCart/${user.email}`)
//                 .then(res => setCartItems(res.data))
//                 .catch(error => console.error("Error fetching cart items:", error));
//         }
//     }, [user]);

//     console.log(cartItems);

//     return (
//         <div className="container mx-auto my-10 px-4 lg:px-10">
//             <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
//             <div className="grid lg:grid-cols-3 gap-10">
//                 {/* Billing Address and Payment Method */}
//                 <div className="lg:col-span-2 space-y-6">
//                     {/* Billing Address Section */}
//                     <div>
//                         <h3 className="text-xl font-semibold mb-4">Billing Address:</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" placeholder="First name" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="Last name" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="email" placeholder="Email address" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="State" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="City" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="Zip/ postal code" className="border border-gray-300 rounded-lg p-3 w-full" />
//                         </div>
//                     </div>

//                     {/* Payment Method Section */}
//                     <div>
//                         <h3 className="text-xl font-semibold mb-4">Payment Method:</h3>
//                         <div className="space-y-4">
//                             <label className="flex items-center space-x-3 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="Credit Card"
//                                     checked={paymentMethod === "Credit Card"}
//                                     onChange={() => handlePaymentMethodChange("Credit Card")}
//                                     className="form-radio text-purple-600"
//                                 />
//                                 <span>Credit Card</span>
//                             </label>
//                             {paymentMethod === "Credit Card" && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//                                     <input type="text" placeholder="Card number" className="border border-gray-300 rounded-lg p-3 w-full" />
//                                     <input type="text" placeholder="Expiration date (MM/YY)" className="border border-gray-300 rounded-lg p-3 w-full" />
//                                     <input type="text" placeholder="Security Code" className="border border-gray-300 rounded-lg p-3 w-full" />
//                                     <div className="flex items-center justify-end space-x-2">
//                                         <img src="/checkout-cardimage.png.png" alt="Visa" className="" />

//                                     </div>
//                                 </div>
//                             )}
//                             <label className="flex items-center space-x-3 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="Cash on Delivery"
//                                     checked={paymentMethod === "Cash on Delivery"}
//                                     onChange={() => handlePaymentMethodChange("Cash on Delivery")}
//                                     className="form-radio text-purple-600"
//                                 />
//                                 <span>Cash on Delivery</span>
//                             </label>
//                         </div>
//                     </div>

//                     {/* Place Order Button */}
//                     <div className="mt-6">
//                         <p className="text-sm text-gray-500 mb-4">
//                             By clicking the button, you agree to the <span className="text-pink-500">Terms and Conditions</span>
//                         </p>
//                         <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
//                             Place Order Now →
//                         </button>
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="bg-gray-50 p-6 rounded-2xl shadow-md border-t-4 border-blue-500 ">
//                     <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//                     <div className="space-y-4">
//                         {
//                             cartItems.map((item, index) => <div key={index}>
//                                 <div className="flex justify-between text-gray-600">
//                                     <span>{item.quantity} x {item.title}</span>
//                                     <span className="font-semibold">${item.price}</span>
//                                 </div>
//                                 <div className="text-sm text-gray-500">{item.description}</div>
//                             </div>)
//                         }

//                     </div>
//                     <div className="flex justify-between font-semibold text-lg mt-6">
//                         <span>Grand Total:</span>
//                         <span className="text-pink-600">${item.quantity}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutForm;


// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import axios from "axios";

// const CheckoutForm = () => {
//     const { user } = useContext(AuthContext);
//     const [paymentMethod, setPaymentMethod] = useState("Credit Card");
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [discountedTotal, setDiscountedTotal] = useState(0);

//     const handlePaymentMethodChange = (method) => {
//         setPaymentMethod(method);
//     };

//     useEffect(() => {
//         if (user?.email) {
//             axios.get(`http://localhost:3000/addCart/${user.email}`)
//                 .then(res => {
//                     setCartItems(res.data);
//                     calculateTotalPrice(res.data); // Calculate total price when cart items are fetched
//                 })
//                 .catch(error => console.error("Error fetching cart items:", error));
//         }
//     }, [user]);

//     const calculateTotalPrice = (items) => {
//         const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//         setTotalPrice(total.toFixed(2)); // Set total price to two decimal points

//         // Apply 20% discount
//         const discountAmount = total * 0.2;
//         setDiscountedTotal((total - discountAmount).toFixed(2)); // Set discounted total
//     };

//     return (
//         <div className="container mx-auto my-10 px-4 lg:px-10">
//             <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
//             <div className="grid lg:grid-cols-3 gap-10">
//                 {/* Billing Address and Payment Method */}
//                 <div className="lg:col-span-2 space-y-6">
//                     {/* Billing Address Section */}
//                     <div>
//                         <h3 className="text-xl font-semibold mb-4">Billing Address:</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" placeholder="First name" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="Last name" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="email" placeholder="Email address" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="State" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="City" className="border border-gray-300 rounded-lg p-3 w-full" />
//                             <input type="text" placeholder="Zip/ postal code" className="border border-gray-300 rounded-lg p-3 w-full" />
//                         </div>
//                     </div>

//                     {/* Payment Method Section */}
//                     <div>
//                         <h3 className="text-xl font-semibold mb-4">Payment Method:</h3>
//                         <div className="space-y-4">
//                             <label className="flex items-center space-x-3 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="Credit Card"
//                                     checked={paymentMethod === "Credit Card"}
//                                     onChange={() => handlePaymentMethodChange("Credit Card")}
//                                     className="form-radio text-purple-600"
//                                 />
//                                 <span>Credit Card</span>
//                             </label>
//                             {paymentMethod === "Credit Card" && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//                                     <input type="text" placeholder="Card number" className="border border-gray-300 rounded-lg p-3 w-full" />
//                                     <input type="text" placeholder="Expiration date (MM/YY)" className="border border-gray-300 rounded-lg p-3 w-full" />
//                                     <input type="text" placeholder="Security Code" className="border border-gray-300 rounded-lg p-3 w-full" />
//                                     <div className="flex items-center justify-end space-x-2">
//                                         <img src="/checkout-cardimage.png.png" alt="Visa" className="" />
//                                     </div>
//                                 </div>
//                             )}
//                             <label className="flex items-center space-x-3 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="Cash on Delivery"
//                                     checked={paymentMethod === "Cash on Delivery"}
//                                     onChange={() => handlePaymentMethodChange("Cash on Delivery")}
//                                     className="form-radio text-purple-600"
//                                 />
//                                 <span>Cash on Delivery</span>
//                             </label>
//                         </div>
//                     </div>

//                     {/* Place Order Button */}
//                     <div className="mt-6">
//                         <p className="text-sm text-gray-500 mb-4">
//                             By clicking the button, you agree to the <span className="text-pink-500">Terms and Conditions</span>
//                         </p>
//                         <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
//                             Place Order Now →
//                         </button>
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="bg-gray-50 p-6 rounded-2xl shadow-md border-t-4 border-blue-500 ">
//                     <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//                     <div className="space-y-4">
//                         {cartItems.map((item, index) => (
//                             <div key={index}>
//                                 <div className="flex justify-between text-gray-600">
//                                     <span>{item.quantity} x {item.title}</span>
//                                     <span className="font-semibold">${item.price}</span>
//                                 </div>
//                                 <div className="text-sm text-gray-500">{item.description}</div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Grand Total with 20% Discount Applied */}
//                     <div className="flex justify-between font-semibold text-lg mt-6">
//                         <span>Grand Total (20% discount applied):</span>
//                         <span className="text-pink-600">${discountedTotal}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutForm;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Thank from "./Thank";

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_51PLdGEI1V2N8WTtNgAru9p0zIeKYGQ0Zym7fAM7IPCDmBXexmlIbFCoSTodjSiTcjeQn2DkQVUs7fWr5q86Uz4XU00Y2cJsHO2");

const CheckoutForm = () => {
    const { user } = useContext(AuthContext);
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountedTotal, setDiscountedTotal] = useState(0);
    const [clientSecret, setClientSecret] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);  // New state for payment success
    const stripe = useStripe();
    const elements = useElements();

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/addCart/${user.email}`)
                .then(res => {
                    setCartItems(res.data);
                    calculateTotalPrice(res.data); // Calculate total price when cart items are fetched
                })
                .catch(error => console.error("Error fetching cart items:", error));
        }
    }, [user]);

    const calculateTotalPrice = (items) => {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total.toFixed(2)); // Set total price to two decimal points

        // Apply 20% discount
        const discountAmount = total * 0.2;
        const finalTotal = (total - discountAmount).toFixed(2);
        setDiscountedTotal(finalTotal); // Set discounted total

        // Request payment intent from the backend
        createPaymentIntent(finalTotal);
    };

    const createPaymentIntent = async (price) => {
        try {
            const response = await axios.post('http://localhost:3000/create-payment-intent', { price });
            setClientSecret(response.data.clientSecret);
        } catch (error) {
            console.error("Error creating payment intent:", error);
        }
    };

    const handleStripePayment = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || !clientSecret) return; // Stripe.js has not yet loaded

        setIsProcessing(true);
        const cardElement = elements.getElement(CardElement);

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: user?.name || "Guest",
                    email: user?.email || "guest@example.com"
                }
            }
        });

        setIsProcessing(false);

        if (error) {
            console.error("Payment error:", error.message);
        } else if (paymentIntent.status === "succeeded") {
            console.log("Payment succeeded:", paymentIntent);
            setIsPaymentSuccessful(true);  // Set payment success state
        }
    };

    return (
        <div className="container mx-auto my-10 px-4 lg:px-10">
            <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

            {isPaymentSuccessful ? (
                // <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
                //     <h3 className="text-xl font-semibold">Thank You for Your Purchase!</h3>
                //     <p>Your payment was successful. A confirmation email has been sent to your address.</p>
                // </div>
                <Thank></Thank>
            ) : (
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Billing Address and Payment Method */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Billing Address Section */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Billing Address:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First name" className="border border-gray-300 rounded-lg p-3 w-full" />
                                <input type="text" placeholder="Last name" className="border border-gray-300 rounded-lg p-3 w-full" />
                                <input type="email" placeholder="Email address" className="border border-gray-300 rounded-lg p-3 w-full" />
                                <input type="text" placeholder="State" className="border border-gray-300 rounded-lg p-3 w-full" />
                                <input type="text" placeholder="City" className="border border-gray-300 rounded-lg p-3 w-full" />
                                <input type="text" placeholder="Zip/ postal code" className="border border-gray-300 rounded-lg p-3 w-full" />
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Payment Method:</h3>
                            <div className="space-y-4">
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Credit Card"
                                        checked={paymentMethod === "Credit Card"}
                                        onChange={() => handlePaymentMethodChange("Credit Card")}
                                        className="form-radio text-purple-600"
                                    />
                                    <span>Credit Card (Stripe)</span>
                                </label>
                                {paymentMethod === "Credit Card" && (
                                    <form onSubmit={handleStripePayment} className="space-y-4 mt-4">
                                        <CardElement className="p-3 border rounded-lg" />
                                        <button
                                            type="submit"
                                            disabled={!stripe || isProcessing}
                                            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                                        >
                                            {isProcessing ? "Processing..." : "Pay with Stripe"}
                                        </button>
                                    </form>
                                )}
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Cash on Delivery"
                                        checked={paymentMethod === "Cash on Delivery"}
                                        onChange={() => handlePaymentMethodChange("Cash on Delivery")}
                                        className="form-radio text-purple-600"
                                    />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>

                        {/* Place Order Button for Cash on Delivery */}
                        {paymentMethod === "Cash on Delivery" && (
                            <div className="mt-6">
                                <p className="text-sm text-gray-500 mb-4">
                                    By clicking the button, you agree to the <span className="text-pink-500">Terms and Conditions</span>
                                </p>
                                <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
                                    Place Order Now →
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                        <div className="space-y-4">
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-gray-600">
                                        <span>{item.quantity} x {item.title}</span>
                                        <span className="font-semibold">${item.price}</span>
                                    </div>
                                    <div className="text-sm text-gray-500">{item.description}</div>
                                </div>
                            ))}
                        </div>

                        {/* Grand Total with 20% Discount Applied */}
                        <div className="flex justify-between font-semibold text-lg mt-6">
                            <span>Grand Total (20% discount applied):</span>
                            <span className="text-pink-600">${discountedTotal}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const StripeCheckout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default StripeCheckout;
