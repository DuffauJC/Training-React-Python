import { createBrowserRouter } from "react-router-dom";

//import RequiredHoc from "./services/RequiredHoc"
import Home from "./containers/Home";
import AppWrapper from "./containers/AppWrapper";
import Trainings from "./containers/Trainings";
import Caddy from "./containers/Caddy";


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
        ]
    }
])

export default router