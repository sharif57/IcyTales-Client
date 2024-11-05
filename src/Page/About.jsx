import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Statistics from "../Components/Statistics";
import Team from "../Components/Team";

const About = () => {
    return <div>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
            <div>
                <h1 className="text-center text-6xl font-bold">About Us</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to={'/'}>Home</Link>/
                    <Link to={'/about'}>About Us</Link>
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="flex items-center justify-evenly mt-14 container mx-auto">
                <img className="" src="\Figure → journey-image.jpg.png" alt="" />
                <div className="w-[540px] space-y-4">
                    <h1 className="text-5xl font-bold">Our <span className="text-pink-500">Journey</span> Began
                        With a Simple Dream</h1>
                    <p>We take pride in offering a diverse range of options, including
                        dairy-free, vegan, and gluten-free choices, so everyone can find
                        their perfect scoop.</p>
                    <p>Our goal is to make the best ice cream using only the finest,
                        natural ingredients. From rich, creamy classics to adventurous
                        new creations, every flavor is meticulously crafted in-house to
                        ensure the highest quality and freshness.</p>
                    <button className="btn btn-outline">Read More <ArrowRight /></button>
                </div>
            </div>
            <img src="/Figure → special-rightimage.png.png" alt="" />
        </div>

        <div className="mt-14 bg-purple-500 ">
            <div
                className="bg-inherit  bg-no-repeat bg-bottom bg-right bg-indigo-500  "
            >
                
                <div className=" container mx-auto  ">
                    <div className="flex items-center justify-evenly gap-6">

                        <div className="space-y-4 text-white w-2/5 pl-4
">
                            <h1 className="text-5xl font-bold text-white ">Our Mission is to
                                Create Moments</h1>
                            <p>We strive to foster a welcoming and joyful environment
                                where customers of all ages can gather, celebrate, and
                                make lasting memories. Our commitment extends beyond
                                serving great ice cream.</p>
                            <button className="btn btn-outline text-white">Read more.</button>

                        </div>
                        <div>

                            <img src="/Image (32).png" alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <Statistics></Statistics>
        <Team></Team>
    </div>;
};
export default About;

