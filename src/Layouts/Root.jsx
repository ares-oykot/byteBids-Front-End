import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Header/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;