import { createBrowserRouter } from "react-router-dom";

//import RequiredHoc from "./services/RequiredHoc"
import Home from "./containers/Home";
import AppWrapper from "./containers/AppWrapper";
import Trainings from "./containers/Trainings";
import Caddy from "./containers/Caddy";
import Order from "./containers/Order";

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
                element : <Trainings/>
            
            },
            {
                path: "/caddy", // yes, again
                element: <Caddy />
            },
            {
                path: "/order", // yes, again
                element: <Order />
            },
        ]
    }
])

export default router