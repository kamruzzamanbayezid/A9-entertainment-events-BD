import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import UpcomingEventDetails from "../Components/UpcomingEvents/UpcomingEventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            errorElement: <Error></Error>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  },
                  {
                        path: '/contact',
                        element: <Contact></Contact>
                  },
                  {
                        path: '/eventDetails/:id',
                        element: <UpcomingEventDetails></UpcomingEventDetails>,
                        loader: ({ params }) => fetch('/events.json')
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  }
            ]
      }
]);

export default router;