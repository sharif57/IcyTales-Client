// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { ShoppingCart, Star } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useCart } from '../CartContext/CartContext';

const BestSellers = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://icy-tales-backend.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const { user } = useContext(AuthContext)

    const { handlePost } = useCart();


    return <div className="py-14 ">

        <h1 className="text-5xl font-semibold pb-4 text-center">Our   <span className="text-pink-500">Best</span> Sellers</h1>
        <p className='text-center'>Discover the favorites that keep our customers coming back for more.</p>


        <div className='flex '>
         
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
                    {products.slice(9, 15).map((item) => (
                        <SwiperSlide key={item._id}>
                            <div>
                                <Link
                                    to={`/productDetail/${item._id}`}
                                    className="group shadow-md relative block overflow-hidden bg-white rounded-lg"
                                >
                                    <button className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                        <span className="sr-only">Wishlist</span>
                                    </button>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg p-4 mx-auto h-48 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="relative border border-gray-100 bg-white p-4 md:p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.title.slice(0, 14)}</h3>
                                            <p className="text-gray-700 flex gap-1">
                                                <Star className="text-yellow-400" />4.9/5
                                            </p>
                                        </div>
                                        <p className="mt-1.5 line-clamp-3 text-gray-700 text-sm md:text-base">
                                            {item.description}
                                        </p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <p className="text-xl md:text-2xl font-bold text-pink-500">${item.price.toFixed(2)}</p>
                                            <button onClick={(e) => handlePost(e, item)}
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    </div>;
};
export default BestSellers;