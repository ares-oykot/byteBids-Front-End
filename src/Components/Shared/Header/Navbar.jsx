import { Link, NavLink } from "react-router-dom";
import profile from "../../../assets/user.png"
import icon from "../../../assets/letter-b.png"

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const user = null;
    const handleSignOut = () => {

    }
    const navLinks =
        <div className="flex flex-col lg:flex-row text-lg gap-2 font-semibold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addJobs"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    Add Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/postedJobs"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    My posted jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myBids"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    My Bids
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/bidRequests"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    Bid Requests
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signIn"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    Sign In
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signUp"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "py-1 rounded px-2 bg-cyan-200"
                                : "bg-slate-200 hover:bg-sky-200 rounded duration-100 py-1 px-2"
                    }
                >
                    Sign Up
                </NavLink>
            </li>
        </div>
    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <div className="flex items-center gap-2">
                    <img className="h-12 hidden lg:inline" src={icon} alt="" />
                    <h1 className="text-5xl hidden lg:inline font-black text-sky-600">ByteBids</h1>
                </div>
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm bg-sky-200 dropdown-content mt-3 z-[1] p-2 shadow w-36 rounded-xl">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="mr-12 lg:hidden z-50">
                <img className="h-8 md:h-14 lg:hidden" src={icon} alt="" />
                <h1 className="text-3xl font-black text-sky-600">ByteBids</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="mr-5 mt-1" onClick={toggleDarkMode}>
                    {
                        isDarkMode ?
                            <>
                                {/* <img className="w-6 h-6 lg:w-8 lg:h-8" src={moon} alt="" /> */}
                            </>
                            :
                            <>
                                {/* <img className="w-6 h-6 lg:w-8 lg:h-8" src={moon1} alt="" /> */}
                            </>
                    }
                </button>
                {
                    user?.displayName ? <p className="text-[6px] md:text-base font-bold mr-2 py-2 bg-yellow-500 px-2 rounded-3xl">{user.displayName}</p>
                        :
                        ""
                }
                <div className="dropdown z-50 dropdown-hover">

                    <label tabIndex={0} className="">
                        <div className="w-10">
                            {
                                user?.photoURL ? <img className="rounded-full" src={user?.photoURL} /> :
                                    <img className="rounded-full" src={profile} />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded p-1 w-32  right-0">
                        {
                            user ? <button onClick={handleSignOut} className=" bg-orange-500 w-full text-white px-6 py-2 duration-300 rounded-sm">Sign Out</button>
                                :
                                <Link to="/signIn"><button className=" bg-emerald-600 w-full text-white px-6 py-2 duration-300 rounded-sm">Login</button></Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;