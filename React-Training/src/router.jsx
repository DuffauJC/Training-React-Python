import { createBrowserRouter } from "react-router-dom";
import Home from "./composants/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    }
])

export default router