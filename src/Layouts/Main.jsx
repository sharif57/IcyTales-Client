import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";

const Main = () => {
    return <div className="p-2 font-f">
        <Navbar></Navbar>
        <div className="min-h-screen  font-f ">
            <Outlet></Outlet>
        </div>
        <Footer> </Footer>
    </div>;
};
export default Main;