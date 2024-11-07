import { useState } from "react";

const CheckoutForm = () => {
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className="container mx-auto my-10 px-4 lg:px-10">
            <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
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
                                <span>Credit Card</span>
                            </label>
                            {paymentMethod === "Credit Card" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <input type="text" placeholder="Card number" className="border border-gray-300 rounded-lg p-3 w-full" />
                                    <input type="text" placeholder="Expiration date (MM/YY)" className="border border-gray-300 rounded-lg p-3 w-full" />
                                    <input type="text" placeholder="Security Code" className="border border-gray-300 rounded-lg p-3 w-full" />
                                    <div className="flex items-center justify-end space-x-2">
                                        <img src="/checkout-cardimage.png.png" alt="Visa" className="" />
                                       
                                    </div>
                                </div>
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

                    {/* Place Order Button */}
                    <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-4">
                            By clicking the button, you agree to the <span className="text-pink-500">Terms and Conditions</span>
                        </p>
                        <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
                            Place Order Now →
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-md border-t-4 border-blue-500 ">
                    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between text-gray-600">
                            <span>3 x Classic Vanilla</span>
                            <span className="font-semibold">$13.00</span>
                        </div>
                        <div className="text-sm text-gray-500">Creamy vanilla ice cream topped with cherry.</div>
                        <div className="flex justify-between text-gray-600">
                            <span>6 x Chocolate Brownie</span>
                            <span className="font-semibold">$23.00</span>
                        </div>
                        <div className="text-sm text-gray-500">Rich chocolate ice cream with chunks of brownie.</div>
                        <div className="flex justify-between text-gray-600">
                            <span>4 x Strawberry Cake</span>
                            <span className="font-semibold">$22.00</span>
                        </div>
                        <div className="text-sm text-gray-500">Strawberry ice cream layered with shortcake.</div>
                        <div className="flex justify-between text-gray-600">
                            <span>2 x Mint Chocolate</span>
                            <span className="font-semibold">$7.00</span>
                        </div>
                        <div className="text-sm text-gray-500">Refreshing mint ice cream with chocolate chips.</div>
                    </div>
                    <div className="flex justify-between font-semibold text-lg mt-6">
                        <span>Grand Total:</span>
                        <span className="text-pink-600">$83.99</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
