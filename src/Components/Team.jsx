import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Facebook, Instagram, Twitch, Twitter } from 'lucide-react';

const Team = () => {
    return (
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



            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-2 ">
                        <img
                            src="/Figure → team-image1.jpg.png"
                            alt="Marvin Joner"
                            className=" rounded-full mx-auto object-cover "
                        />
                        <h1 className="text-xl font-semibold mt-4">Marvin Joner</h1>
                        <p className="text-gray-500">Bakery Worker</p>
                        <div className='flex justify-center items-center'>
                            <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                            <button className='bg-pink-200 p-3 rounded-full'><Instagram></Instagram></button>
                            <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-2 ">
                        <img
                            src="/Figure → team-image2.jpg.png"
                            alt="Marvin Joner"
                            className=" rounded-full mx-auto object-cover "
                        />
                        <h1 className="text-xl font-semibold mt-4">Patricia Woodrum</h1>
                        <p className="text-gray-500">Staff Worker</p>
                        <div className='flex justify-center items-center'>
                            <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                            <button className='bg-pink-200 p-3 rounded-full'><Instagram></Instagram></button>
                            <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-5 text-center space-y-2 ">
                        <img
                            src="/Figure → team-image3.jpg.png"
                            alt="Marvin Joner"
                            className=" rounded-full mx-auto object-cover "
                        />
                        <h1 className="text-xl font-semibold mt-4">Hannaz Stone</h1>
                        <p className="text-gray-500">Shop Worker</p>
                        <div className='flex justify-center items-center'>
                            <button className='bg-pink-200 p-3 rounded-full'><Facebook></Facebook></button>
                            <button className='bg-pink-200 p-3 rounded-full'><Instagram></Instagram></button>
                            <button className='bg-pink-200 p-3 rounded-full'><Twitter></Twitter></button>
                        </div>
                    </div>
                </SwiperSlide>
               
            
            </Swiper>
        </div>
    );
};

export default Team;
