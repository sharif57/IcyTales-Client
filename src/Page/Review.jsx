import { Link } from "react-router-dom";


const Review = () => {

    const items = [
        {
            num: '91+',
            name: 'Kevin Andrew',
            title: 'Quisuam est rui dolorem ipsum rui do sitamet, consectetur, adipise velit seu non numquam eiusm temora incidunt autlabore siner...'
        },
        {
            num: '49%',
            title: 'Ruisuam est rui dolorem ipsum rui do sit amet, consectetur, adipise velit seu non numquam eiusm temora incidunt autlabore siner...',
            name: 'Peri James',
            passion: 'Happy Client'
        },
        {
            num: '20+',
            title: 'Nuisuam est rui dolorem ipsum rui do sitamet, consectetur, adipise velit seu non numquam eiusm temora incidunt autlabore siner...',
            name: 'Naurth Reough',
            passion: 'Happy Client'
        },

    ]


    return <div>
      

        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-16 sm:py-28 md:py-56">
            <div>
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
                    Review
                </h1>
                <div className="text-center mt-6 bg-white p-4 sm:p-5 w-full sm:w-3/4 md:w-1/4 shadow-lg rounded-full mx-auto flex flex-wrap gap-4 items-center justify-center">
                    <Link to={'/'} className="text-gray-700 hover:text-pink-500">Home</Link>
                    <span>/</span>
                    <Link to={''} className="text-gray-700 hover:text-pink-500">Review</Link>
                </div>
            </div>
        </div>

        <div className="mt-24">
            {/* Header Section */}
            <div className="text-center space-y-3 mb-10 mx-auto max-w-3xl px-4 lg:px-0">
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Hear From Our <span className="text-pink-500">Gelato</span> Enthusiasts
                </h1>
                <p className="text-gray-600">
                    Read testimonials from those who have enjoyed our artisan gelato.
                </p>
            </div>
        </div>

        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto mt-16 gap-8">
                {
                    items.map((item, index) => <div key={index} className="p-6 border-b-4 space-y-3 border-pink-600 shadow-lg rounded-lg text-center rounded-l-2xl">
                        <img src="/Figure → testimonial3-quoteimage.png.png" alt="" />
                        <p className="text-start">{item.title}</p>

                        <div className="flex items-center gap-5 ">
                            <img src="/Figure → testimonial3-personimage1.jpg.png" alt="" />
                            <div className="space-y-2">
                                <div className="flex gap-1">
                                    <img src="/Symbol.png" alt="" />
                                    <img src="/Symbol.png" alt="" />
                                    <img src="/Symbol.png" alt="" />
                                    <img src="/Symbol.png" alt="" />
                                    <img src="/Symbol.png" alt="" />
                                </div>
                                <h1 className="text-pink-500 text-2xl font-semibold">{item.name}</h1>
                                <p className="text-gray-500">Happy Client</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    </div>;
};
export default Review;