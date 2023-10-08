import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Error = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="flex lg:mt-10 items-center justify-center h-[70vh]">

                        <div>
                              <h1 className="lg:text-[300px] text-9xl font-semibold text-[#FD5F00]">404</h1>
                              <h4 className="text-5xl mb-6 font-medium">PAGE NOT FOUND</h4>
                              <Link to='/'>
                                    <button className="py-2 flex items-center gap-5 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Get back to the home <span><AiOutlineArrowLeft className="text-2xl" /></span></button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Error;