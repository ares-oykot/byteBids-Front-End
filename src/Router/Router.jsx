import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Root></Root>,
        children: [
            {   path: "/",
                element: <h1>Hello World!!!!</h1>
            }
        ]
    }
]);
export default router;