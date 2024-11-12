const Instagram = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-b from-white to-pink-50 mt-16 py-16">
            <div className="text-center max-w-6xl px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                    Follow Us on <span className="text-pink-500">Instagram</span>
                </h1>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Join our Instagram community for updates, special deals, and more!
                </p>
                <div
                    className="bg-no-repeat chat-header mb-6"
                    style={{ backgroundImage: `url('/Background.png')` }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                        {/* Each image box */}
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Item.png"
                                alt="Ice Cream 1"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Item (1).png"
                                alt="Ice Cream 2"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Link (3).png"
                                alt="Ice Cream 3"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Link (4).png"
                                alt="Ice Cream 4"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Link (5).png"
                                alt="Ice Cream 5"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Instagram;
