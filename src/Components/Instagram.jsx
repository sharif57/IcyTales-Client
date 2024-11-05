const Instagram = () => {
    return <div className="flex items-center justify-center  bg-gradient-to-b from-white to-pink-50 mt- py-16">
        <div className=" text-center max-w-6xl">
            <h1 className="text-5xl font-bold mb-2">
                Follow Us on <span className="text-pink-500">Instagram</span>
            </h1>
            <p className="text-gray-600 mb-6">
                Join our Instagram community for updates, special deals, and more!
            </p>
            <div className="bg-no-repeat chat-header" style={{ backgroundImage: `url('/Background.png')` }}>
                <div className="flex justify-center gap-4 mt-8" >
                    {/* Each image box */}
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/Item.png"
                            alt="Ice Cream 1"
                            className="w-56 h-[300px] object-cover"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/Item (1).png"
                            alt="Ice Cream 1"
                            className="w-56 h-[300px] object-cover"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/Link (3).png"
                            alt="Ice Cream 1"
                            className="w-56 h-[300px] object-cover"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/Link (4).png"
                            alt="Ice Cream 1"
                            className="w-56 h-[300px] object-cover"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/Link (5).png"
                            alt="Ice Cream 1"
                            className="w-56 h-[300px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Instagram;

