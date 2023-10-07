import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
      return (
            <div className="max-w-7xl mx-auto">
                  <Header></Header>
                  <Navbar></Navbar>
              
                  <Outlet></Outlet>
            </div>
      );
};

export default Root;