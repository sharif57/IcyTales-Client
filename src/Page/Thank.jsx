import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Thank = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 py-32">
            <div className="text-center">
                <img className="mx-auto" src="/thankyou-image.png.png" alt="Thank You" />
                <h1 className="text-6xl font-bold mt-4">Thank You</h1>
                <p className="mt-4 w-1/2 mx-auto">
                    We're delighted you've decided to treat yourself to our delectable ice creams.
                    Your order has been received and is now being prepared with care.
                </p>
                <Link to="/" className="btn btn-outline mt-6"><ArrowLeft></ArrowLeft> Back to Home</Link>
            </div>
        </div>
    );
};

export default Thank;
