import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Details from "../Components/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Root></Root>,
        children: [
            {   path: "/",
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
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
            }
        ]
    }
]);
export default router;