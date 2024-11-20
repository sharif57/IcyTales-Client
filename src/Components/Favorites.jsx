import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ShoppingCart, Star } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useCart } from '../CartContext/CartContext';

const Favorites = () => {
    const { user } = useContext(AuthContext);
    const { handlePost } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://icy-tales-backend.vercel.app/product')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="py-14 bg-gradient-to-b from-[#faf2ed] to-[#f5e5f5]">
            <h1 className="text-5xl font-semibold pb-4 text-center">
                Our <span className="text-pink-500">Classic</span> Favorites
            </h1>
            <p className="text-center">Check out our top products that our customers love.</p>

            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                {/* Left Image */}
                <img
                    className="hidden md:block h-[300px] chat-header"
                    src="/classic-leftimage.png.png"
                    alt="Classic Favorites Left"
                />

                {/* Swiper Section */}
                <div className="max-w-4xl mx-auto mt-12 w-full px-4 lg:px-0">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {products.slice(0, 6).map((item, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <Link
                                        to={`/productDetail/${item._id}`}
                                        className="group shadow-md relative block overflow-hidden bg-white rounded-lg"
                                    >
                                        <button
                                            className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                        >
                                            <span className="sr-only">Wishlist</span>
                                        </button>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-lg p-4 mx-auto h-48 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="relative border border-gray-100 bg-white p-4 md:p-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                                    {item.title.slice(0, 14)}
                                                </h3>
                                                <p className="text-gray-700 flex gap-1">
                                                    <Star className="text-yellow-400" />4.9/5
                                                </p>
                                            </div>
                                            <p className="mt-1.5 line-clamp-3 text-gray-700 text-sm md:text-base">
                                                {item.description}
                                            </p>
                                            <div className="mt-4 flex justify-between items-center">
                                                <p className="text-xl md:text-2xl font-bold text-pink-500">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                                <button
                                                    onClick={(e) => handlePost(e, item)}
                                                    type="button"
                                                    className="p-3 rounded-full bg-[#683292] text-white"
                                                    disabled={!user}
                                                >
                                                    <ShoppingCart className="size-8" />
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right Image */}
                <img
                    className="h-[300px] hidden md:block chat-image"
                    src="/classic-rightimage.png.png"
                    alt="Classic Favorites Right"
                />
            </div>
        </div>
    );
};

export default Favorites;
