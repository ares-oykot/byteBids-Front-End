import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Details from "../Components/Details/Details";
import MyBids from "../Pages/MyBids/MyBids";
import PrivetRout from "./PrivetRout";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import AddJobs from "../Pages/AddJobs/AddJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signIn",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <Registration></Registration>
            },
            {
                path: "/details/:id",
                element: <PrivetRout><Details></Details></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: "/myBids",
                element: <PrivetRout><MyBids></MyBids></PrivetRout>
            },
            {
                path: "/postedJobs",
                element: <PrivetRout><MyPostedJobs></MyPostedJobs></PrivetRout>
            },
            {
                path: "/addJobs",
                element: <PrivetRout><AddJobs></AddJobs></PrivetRout>
            }
        ]
    }
]);
export default router;