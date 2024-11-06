import { Facebook, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import Instagram from "./Instagram";

const Teams = () => {
    return <div>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
            <div>
                <h1 className="text-center text-6xl font-bold">Our Team</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to={'/'}>Home</Link>/
                    <Link to={'/about'}>Team</Link>
                </div>
            </div>
        </div>

        <div className="mt-24">
            {/* Header Section */}
            <div className="text-center space-y-3 mb-10">
                <h1 className="text-5xl font-bold">
                    Our <span className="text-pink-500">Team</span> Members
                </h1>
                <p className="text-gray-600">
                    Get to know the friendly faces behind your favorite flavors.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto">
            <div className="bg-white rounded-lg p-5 text-center space-y-2 ">
                <img
                    src="/Figure → team-image3.jpg.png"
                    alt="Marvin Joner"
                    className=" rounded-full mx-auto object-cover "
                />
                <h1 className="text-xl font-semibold mt-4">Hannaz Stone</h1>
                <p className="text-gray-500">Shop Worker</p>
                <div className='flex justify-center items-center gap-4'>
                    <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                    <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                    <button className='bg-pink-200 p-3 rounded-full'><X></X></button>
                </div>
            </div>

            <div className="bg-white  rounded-lg p-5 text-center space-y-2 ">
                <img
                    src="/Figure → team-image2.jpg.png"
                    alt="Marvin Joner"
                    className=" rounded-full mx-auto object-cover "
                />
                <h1 className="text-xl font-semibold mt-4">Patricia Woodrum</h1>
                <p className="text-gray-500">Staff Worker</p>
                <div className='flex justify-center items-center'>
                    <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                    <button className='bg-pink-200 p-3 rounded-full'><X></X></button>
                    <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                </div>
            </div>

            <div className="bg-white  rounded-lg p-5 text-center space-y-2 ">
                <img
                    src="/Figure → team-image1.jpg.png"
                    alt="Marvin Joner"
                    className=" rounded-full mx-auto object-cover "
                />
                <h1 className="text-xl font-semibold mt-4">Marvin Joner</h1>
                <p className="text-gray-500">Bakery Worker</p>
                <div className='flex justify-center items-center'>
                    <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                    <button className='bg-pink-200 p-3 rounded-full'><X></X></button>
                    <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                </div>
            </div>

            <div className="bg-white  rounded-lg p-5 text-center space-y-2 ">
                <img
                    src="/Figure (2).png"
                    alt="Marvin Joner"
                    className=" rounded-full mx-auto object-cover "
                />
                <h1 className="text-xl font-semibold mt-4">Hannaz Stone</h1>
                <p className="text-gray-500">Shop Worker</p>
                <div className='flex justify-center items-center'>
                    <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                    <button className='bg-pink-200 p-3 rounded-full'><X></X></button>
                    <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                </div>
            </div>
            <div className="bg-white  rounded-lg p-5 text-center space-y-2 ">
                <img
                    src="\team-image5.jpg.png"
                    alt="Marvin Joner"
                    className=" rounded-full mx-auto object-cover "
                />
                <h1 className="text-xl font-semibold mt-4">Hannaz Stone</h1>
                <p className="text-gray-500">Shop Worker</p>
                <div className='flex justify-center items-center'>
                    <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                    <button className='bg-pink-200 p-3 rounded-full'><X></X></button>
                    <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                </div>
            </div>
            <div className="bg-white  rounded-lg p-5 text-center space-y-2 ">
                <img
                    src="\team-image6.jpg (1).png"
                    alt="Marvin Joner"
                    className=" rounded-full mx-auto object-cover "
                />
                <h1 className="text-xl font-semibold mt-4">Hannaz Stone</h1>
                <p className="text-gray-500">Shop Worker</p>
                <div className='flex justify-center items-center'>
                    <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                    <button className='bg-pink-200 p-3 rounded-full'><X></X></button>
                    <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                </div>
            </div>

        </div>
    </div>;
};
export default Teams;