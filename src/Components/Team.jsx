import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Team = () => {
    return (
        <div className="mt-24">
            {/* Header Section */}
            <div className="text-center space-y-3 mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Our <span className="text-pink-500">Team</span> Members
                </h1>
                <p className="text-gray-600">
                    Get to know the friendly faces behind your favorite flavors.
                </p>
            </div>

            {/* Swiper Section */}
            <Swiper
                slidesPerView={1} // Default to 1 on mobile
                spaceBetween={20} // Space between slides
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    // For small screens, show 1 slide
                    320: {
                        slidesPerView: 1,
                    },
                    // For medium screens, show 2 slides
                    640: {
                        slidesPerView: 2,
                    },
                    // For large screens, show 3 slides
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-4">
                        <img
                            src="/Figure → team-image1.jpg.png"
                            alt="Marvin Joner"
                            className="rounded-full mx-auto object-cover w-32 h-32 sm:w-40 sm:h-40"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mt-4">Marvin Joner</h1>
                        <p className="text-gray-500">Bakery Worker</p>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Facebook />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Instagram />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Twitter />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-4">
                        <img
                            src="/Figure → team-image2.jpg.png"
                            alt="Patricia Woodrum"
                            className="rounded-full mx-auto object-cover w-32 h-32 sm:w-40 sm:h-40"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mt-4">Patricia Woodrum</h1>
                        <p className="text-gray-500">Staff Worker</p>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Facebook />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Instagram />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Twitter />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-4">
                        <img
                            src="/Figure → team-image3.jpg.png"
                            alt="Hannaz Stone"
                            className="rounded-full mx-auto object-cover w-32 h-32 sm:w-40 sm:h-40"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mt-4">Hannaz Stone</h1>
                        <p className="text-gray-500">Shop Worker</p>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Facebook />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Instagram />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Twitter />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-4">
                        <img
                            src="/Figure → team-image3.jpg.png"
                            alt="Hannaz Stone"
                            className="rounded-full mx-auto object-cover w-32 h-32 sm:w-40 sm:h-40"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mt-4">Hannaz Stone</h1>
                        <p className="text-gray-500">Shop Worker</p>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Facebook />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Instagram />
                            </button>
                            <button className="bg-pink-200 p-3 rounded-full text-gray-900 hover:bg-pink-300">
                                <Twitter />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Team;
