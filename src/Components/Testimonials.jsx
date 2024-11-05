const Testimonials = () => {
    return (
        <div className="bg-gradient-to-b from-pink-50 to-white py-16">
            <div className="container mx-auto text-center space-y-8">
                {/* Heading */}
                <h1 className="text-5xl font-bold text-gray-800 w-1/2 mx-auto">
                    Hear from Our <span className="text-pink-500">Happy</span> <span className="text-pink-500">Ice Cream</span> Lovers
                </h1>

                {/* Description */}
              <div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                    Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as
                    pernatur aut odit aut fugit, sed beatae vitae dicta ripisicing elit, sed do eiusmod
                    tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed
                    do eiusmod tempor incidunt aut labore.
                </p>
              </div>

                {/* Testimonial and Rating */}
                <div className="space-y-2">
                    <h2 className="text-pink-500 text-xl font-semibold">Kevin Andrew</h2>
                    <p className="text-gray-500">Happy Customer</p>
                    <div className="flex justify-center space-x-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Circular Images */}
                <div className="flex justify-around items-center mt-12">
                    <img className="w-20 h-20 rounded-full border-4 border-white" src="/Figure → testimonial-image1.png.png" alt="Person 1" />
                    <img className="w-20 h-20 rounded-full border-4 border-white" src="/Figure → testimonial-image1.png.png" alt="Person 1" />
                    <img className="w-20 h-20 rounded-full border-4 border-white" src="/Figure → testimonial-image1.png.png" alt="Person 1" />
                    <img className="w-20 h-20 rounded-full border-4 border-white" src="/Figure → testimonial-image1.png.png" alt="Person 1" />
                    <img className="w-20 h-20 rounded-full border-4 border-white" src="/Figure → testimonial-image1.png.png" alt="Person 1" />
                    <img className="w-20 h-20 rounded-full border-4 border-white" src="/Figure → testimonial-image1.png.png" alt="Person 1" />
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
