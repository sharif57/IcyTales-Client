import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
    return <div className="mt-16">
        <h1 className="text-5xl font-semibold pb-4 text-center">Explore Our <span className="text-pink-500">Categories</span> </h1>
        <p className='text-center'>Browse through our different categories to find your favorite ice cream treats.</p>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 mt-14">
            <div className="relative">
                <img className="" src="/Figure.png" alt="Sundae Image" />
                <Link to={'blogs/shop'} className="flex items-center gap-8 bg-white p-4 absolute bottom-4 left-4  rounded-lg">
                    <h1 className="text-black text-2xl font-semibold">Sundaes</h1>
                    <p className="ml-2">
                        <ArrowRight className="p-2 bg-pink-500 rounded-full text-white size-10" />
                    </p>
                </Link>
            </div>
            <div className="relative">
                <img className="" src="/categories-image2.jpg.png" alt="Sundae Image" />
                <Link to={'blogs/shop'} className="flex items-center gap-8 bg-white p-4 absolute bottom-4 left-4  rounded-lg">
                    <h1 className="text-black text-2xl font-semibold">Ice Cream Cones</h1>
                    <p className="ml-2">
                        <ArrowRight className="p-2 bg-pink-500 rounded-full text-white size-10" />
                    </p>
                </Link>
            </div>
            <div className="relative">
                <img className="" src="/categories-image3.jpg.png" alt="Sundae Image" />
                <Link to={'blogs/shop'} className="flex items-center gap-8 bg-white p-4 absolute bottom-4 left-4  rounded-lg jub">
                    <h1 className="text-black text-2xl font-semibold">Milkshakes</h1>
                    <p className="ml-2">
                        <ArrowRight className="p-2 bg-pink-500 rounded-full text-white size-10" />
                    </p>
                </Link>
            </div>
            <div className="relative">
                <img className="" src="/categories-image4.jpg.png" alt="Sundae Image" />
                <Link to={'blogs/shop'} className="flex items-center gap-8 bg-white p-4 absolute bottom-4 left-4  rounded-lg">
                    <h1 className="text-black text-2xl font-semibold">Seasonal Flavors</h1>
                    <p className="ml-2">
                        <ArrowRight className="p-2 bg-pink-500 rounded-full text-white size-10" />
                    </p>
                </Link>
            </div>

        </div>
    </div>;
};
export default Categories;