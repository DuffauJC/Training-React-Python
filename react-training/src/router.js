import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/Home";

import AppWrapper from "./containers/AppWrapper";
import Trainings from "./containers/Trainings";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppWrapper />,
        children: [
            {
                path: "/", // yes, again
                element: <Home />
            },
            {
                path: "/home", // yes, again
                element: <Home />
            },
            {
                path: "/trainings", // yes, again
                element: <Trainings />
            },
        ]
    }
])

export default router