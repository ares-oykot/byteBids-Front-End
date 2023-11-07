import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center h-[100vh]">
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/signIn" state={location.pathname} replace></Navigate>
};

export default PrivetRout;