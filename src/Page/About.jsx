import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Statistics from "../Components/Statistics";
import Team from "../Components/Team";
import SubscriptionForm from "../Components/SubscriptionForm";


const About = () => {
    return <div>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-16 sm:py-28 md:py-56">
            <div>
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
                    About Us
                </h1>
                <div className="text-center mt-6 bg-white p-4 sm:p-5 w-full sm:w-3/4 md:w-1/4 shadow-lg rounded-full mx-auto flex flex-wrap gap-4 items-center justify-center">
                    <Link to={'/'} className="text-gray-700 hover:text-pink-500">Home</Link>
                    <span>/</span>
                    <Link to={'/about'} className="text-gray-700 hover:text-pink-500">About Us</Link>
                </div>
            </div>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-between mt-14 container mx-auto">
            <div className="flex justify-center lg:justify-start lg:w-[540px] space-y-4">
                <img className="w-full max-w-sm sm:max-w-md lg:max-w-none" src="/Figure → journey-image.jpg.png" alt="Journey Image" />
            </div>
            <div className="w-full lg:w-[540px] space-y-4 text-center lg:text-left mt-8 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Our <span className="text-pink-500">Journey</span> Began With a Simple Dream
                </h1>
                <p className="text-gray-700">
                    We take pride in offering a diverse range of options, including dairy-free, vegan, and gluten-free choices, so everyone can find their perfect scoop.
                </p>
                <p className="text-gray-700">
                    Our goal is to make the best ice cream using only the finest, natural ingredients. From rich, creamy classics to adventurous new creations, every flavor is meticulously crafted in-house to ensure the highest quality and freshness.
                </p>
                <div className="text-center lg:text-left">
                    <button className="btn btn-outline mt-4">Read More <ArrowRight /></button>
                </div>
            </div>
            {/* Hidden on smaller screens, visible on large screens */}
            <img className="hidden lg:block w-[400px] lg:w-auto" src="/Figure → special-rightimage.png.png" alt="Special Image" />
        </div>


        <div className="mt-14 bg-purple-500">
            <div className="bg-inherit bg-no-repeat bg-bottom bg-right bg-indigo-500">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Text Section */}
                        <div className="space-y-4 text-white w-full lg:w-2/5 pl-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Our Mission is to Create Moments
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg">
                                We strive to foster a welcoming and joyful environment where customers of all ages can gather, celebrate, and make lasting memories. Our commitment extends beyond serving great ice cream.
                            </p>
                            <button className="btn btn-outline text-white mt-4">Read more.</button>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
                            <img className="w-full h-auto object-cover" src="/Image (32).png" alt="Our Mission" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Statistics></Statistics>
        <Team></Team>
        <SubscriptionForm></SubscriptionForm>
    </div>;
};
export default About;

