import { ArrowRight } from "lucide-react";

const Banner = () => {
    return <div>
        <div className="bg-no-repeat" style={{ backgroundImage: `url('/Figure → banner-lefttopimage.png.png')` }}>
            <div className="flex items-center justify-between container mx-auto">
                <div className="space-y-2">
                    <p className="text-2xl font-semibold ">Welcome to The</p>
                    <h1 className="text-6xl font-bold ">Discover <span className="text-pink-500">Sweet</span> Delights!</h1>
                    <p>Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.</p>
                    <button className="btn btn-outline">Browse Our Classic Flavors <ArrowRight /></button>
                </div>
                <div
                    className=" bg-no-repeat bg-gray-200 rounded-full"
                >
                    <img className="size-[600px] p-4" src="/banner-image.png.png" alt="" />
                </div>
            </div>
        </div>

        <div className="mt-14 flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
                <img src="/Figure → relive-circle.png.png" alt="" />
                <img src="/relive-image.png.png" alt="" />
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold ">Relive the Sweet
                        Memories of Classic
                        <span className="text-pink-500"> Ice Creams</span></h1>
                    <p>From rich chocolate fudge to creamy vanilla sundaes,
                        discover our menu of classic ice cream creations.</p>
                    <button className="btn btn-outline">Explore Our Menu <ArrowRight /></button>
                </div>
                <img src="/Figure → relive-triangle.png.png" alt="" />
            </div>
            <img className="chat-image" src="/Figure → relive-rightbottomimage.png.png" alt="" />
        </div>
    </div>;
};
export default Banner;