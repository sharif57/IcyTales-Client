/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Thank = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 py-32">
            <div className="text-center">
                <img className="mx-auto" src="/thankyou-image.png.png" alt="Thank You" />
                <h1 className="text-6xl font-bold mt-4">Thank You for Your Purchase!</h1>
                <p className="mt-4 w-1/2 mx-auto">
                Your payment was successful. A confirmation email has been sent to your address.
                </p>
                <Link to="/" className="btn btn-outline mt-6"><ArrowLeft></ArrowLeft> Back to Home</Link>
            </div>
        </div>
    );
};

export default Thank;
