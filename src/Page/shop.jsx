import { Link } from "react-router-dom";

const Shop = () => {
    return <div>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
            <div>
                <h1 className="text-center text-6xl font-bold">Shop</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to={'/'}>Home</Link>/
                    <Link to={'blogs/shop'}>shop</Link>
                </div>
            </div>
        </div>

        <div className="flex gap-5 container mx-auto p-4">
            <div className="w-1/3 border-4 ">
                <div>
                    <h1 className="text-3xl font-semibold">Categories</h1>
                    <div className="mt-4 text-xl text-gray-500">
                        <input type="checkbox" className="mr-2 size-4" />
                        Canned Ice Cream(3)
                    </div>
                    <div className="mt-4 text-xl text-gray-500">
                        <input type="checkbox" className="mr-2 size-4" />
                        Frozen Yogurt(5)
                    </div>
                    <div className="mt-4 text-xl text-gray-500">
                        <input type="checkbox" className="mr-2 size-4" />
                        Ice Cream Cakes(3)
                    </div>
                    <div className="mt-4 text-xl text-gray-500">
                        <input type="checkbox" className="mr-2 size-4" />
                        Milkshakes(6)
                    </div>
                    <div className="mt-4 text-xl text-gray-500">
                        <input type="checkbox" className="mr-2 size-4" />
                        Popsicles(4)
                    </div>
                    <div className="mt-4 text-xl text-gray-500">
                        <input type="checkbox" className="mr-2 size-4" />
                        Sundaes(5)
                    </div>
                    <hr className="border-x-8 mt-4" /> 
                    <div className="mt-7">
                        <h1 className="text-3xl font-semibold">Filter by Price</h1>
                        <div className="mt-4">
                            <h1>Range: <span className="text-pink-500">5$ - 50$</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 border-8">

            </div>
        </div>
    </div>;
};
export default Shop;