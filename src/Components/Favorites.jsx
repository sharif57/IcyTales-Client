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
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Favorites = () => {
    const {user} = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handlePost = (e, post) => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const title = post.title; // Get the title from the passed post object
        const category = post.category || "General"; // Assuming a default category if not provided
        const price = post.price;
        const currentTime = new Date();
        const photo = post.image || ""; // Assuming a default empty photo if not provided
        const description = post.description;
        const size = post.size || 'L';
        const quantity = post.quantity || 1;
        const color = post.quantity || 'white';

        const newPost = { name, email, size, image, quantity, color, title, category, price, currentTime, photo, description };
        console.log(newPost);

        fetch('http://localhost:3000/addCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post Bookmarked Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // e.target.reset();
                }
            });
    };

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
                        products.slice(0, 6).map(item => <SwiperSlide key={item._id}>
                            <div>
                                <Link to={`/productDetail/${item._id}`} className="group shadow-md relative block overflow-hidden bg-white rounded-lg">
                                    <button className="absolute start-5 mt-1 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                        <span className="sr-only">Wishlist</span>
                                    </button>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg p-4 mx-auto sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="relative border border-gray-100 bg-white p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-700 flex gap-1">
                                                <Star className="text-yellow-400" />4.9/5
                                            </p>
                                        </div>
                                        <p className="mt-1.5 line-clamp-3 text-gray-700">{item.description}</p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <p className="text-2xl font-bold text-pink-500">${item.price.toFixed(2)}</p>
                                            <button onClick={(e) => handlePost(e, item)}
                                                type="button"
                                                className=""
                                            >
                                                <ShoppingCart className='bg-[#683292] p-3 rounded-full size-14 text-white' />
                                            </button>
>
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