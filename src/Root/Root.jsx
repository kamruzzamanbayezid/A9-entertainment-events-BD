import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
      return (
            <div className="">
                  <Outlet></Outlet>
                  <Footer></Footer>
                  <Toaster />
            </div>
      );
};

export default Root;