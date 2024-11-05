import { Link } from "react-router-dom";

const About = () => {
    return <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
        <div>
            <h1 className="text-center text-6xl font-bold">About Us</h1>
            <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                <Link to={'/'}>Home</Link>/
                <Link to={'/about'}>About Us</Link>
            </div>
        </div>
    </div>;
};
export default About;