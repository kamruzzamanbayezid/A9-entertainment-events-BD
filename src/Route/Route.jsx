import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import UpcomingEventDetails from "../Components/UpcomingEvents/UpcomingEventDetails";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
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
                  }
            ]
      }
]);

export default router;