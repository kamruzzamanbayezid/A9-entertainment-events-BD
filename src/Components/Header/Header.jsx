
import { CiMail, CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Header = () => {
      return (
            <div className="flex flex-col lg:flex-row items-center justify-between py-7">
                  <div className="flex gap-3 lg:gap-0 lg:flex-col">
                        <div className="mb-4 lg:mb-0"><h2 className="text-3xl font-semibold">ENTERTAINMENT</h2></div>
                        <div><h4 className="text-2xl font-medium">Events <span className="text-3xl font-bold text-green-500">B</span><span className="text-3xl font-bold text-red-500">D</span></h4>
                        </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-4 gap-2 lg:gap-20">
                        <div className="flex items-center gap-2">
                              <p><CiMail className="text-3xl text-[#FD5F00]"></CiMail></p>
                              <div>
                                    <h4 className="text-lg font-medium">Email:</h4>
                                    <p>kamruzzamanbayezid07@gmail.com</p>
                              </div>
                        </div>
                        <div>
                              <p><CiPhone className="text-3xl text-[#FD5F00]"></CiPhone></p>
                              <p>01882888860</p>
                        </div>
                        <div className="flex md:w-fit items-center gap-3 p-4 bg-[#FD5F00] rounded-md">
                              <Link><FaFacebookF className="text-xl text-[#FFF]"></FaFacebookF></Link>
                              <Link><FaTwitter className="text-xl text-[#FFF]"></FaTwitter></Link>
                              <Link><FaLinkedinIn className="text-xl text-[#FFF]"></FaLinkedinIn></Link>
                              <Link><FaPinterestP className="text-xl text-[#FFF]"></FaPinterestP></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Header;