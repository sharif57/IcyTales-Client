// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { ShoppingCart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return <div className="py-14 bg-gradient-to-b from-[#faf2ed] to-[#f5e5f5]">

        <h1 className="text-5xl font-semibold pb-4 text-center">Our <span className="text-pink-500">Classic</span> Favorites</h1>
        <p className='text-center'>Check out our top products that our customers love.</p>


        <div className='flex '>
            <img className='h-[300px] chat-header' src="/classic-leftimage.png.png" alt="" />
            <div className='max-w-4xl mx-auto mt-12'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        products.slice(0, 6).map(product => <SwiperSlide key={product._id}>
                            <div>
                                <Link to={`/productDetail/${product._id}`} className="group relative block overflow-hidden bg-white rounded-lg">
                                    <button
                                        className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                    >
                                        <span className="sr-only">Wishlist</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>
                                    <img
                                        src={product.image}
                                        alt=""
                                        className="  rounded-lg p-4 bg-center w-[240px] mx-auto  group-hover:scale- sm:h-72"
                                    />

                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className='flex  items-center justify-between'>
                                            <h3 className=" text-2xl font-semibold text-gray-900">{product.title.slice(0, 18)}</h3>

                                            <p className="text-gray-700 flex gap-1">
                                                <Star className='text-yellow-400' />
                                                {product.rating}/5
                                            </p>

                                        </div>

                                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                                            {product.description}
                                        </p>

                                        <div className="mt-4 flex justify-between items-center">
                                            <p
                                                className="text-2xl font-bold text-pink-500"
                                            >
                                                ${product.price}
                                            </p>

                                            <button
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
                                        </div>
                                        
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <img className='h-[300px]  chat-image' src="\classic-rightimage.png.png" alt="" />
        </div>


    </div>;
};
export default Favorites;