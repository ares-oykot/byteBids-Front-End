import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Header/Navbar";

const Root = () => {
    return (
        <div className="relative">
            <div className="sticky bg-white top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;