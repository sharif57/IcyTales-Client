import { Link } from "react-router-dom";

const Review = () => {
    return <div>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
            <div>
                <h1 className="text-center text-6xl font-bold">Review</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to={'/'}>Home</Link>/
                    <Link to={'/about'}>Review</Link>
                </div>
            </div>
        </div>
        <div className="mt-24">
            {/* Header Section */}
            <div className="text-center space-y-3 mb-10 mx-auto max-w-3xl px-4 lg:px-0">
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Hear From Our <span className="text-pink-500">Gelato</span> Enthusiasts
                </h1>
                <p className="text-gray-600">
                    Read testimonials from those who have enjoyed our artisan gelato.
                </p>
            </div>
        </div>


    </div>;
};
export default Review;