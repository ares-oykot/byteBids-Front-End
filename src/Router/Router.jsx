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
import Update from "../Components/Update/Update";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            },
            {
                path: "/update/:id",
                element: <PrivetRout><Update></Update></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: "/bidRequests",
                element: <PrivetRout><BidRequests></BidRequests></PrivetRout>
            }
        ]
    }
]);
export default router;