import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
      return (
            <div className="max-w-7xl mx-auto">
                  <Header></Header>
                  <Navbar></Navbar>
              
                  <Outlet></Outlet>
                  <Footer></Footer>
                  <Toaster />
            </div>
      );
};

export default Root;