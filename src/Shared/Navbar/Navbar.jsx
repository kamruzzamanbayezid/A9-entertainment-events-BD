import { NavLink } from "react-router-dom";

const Navbar = () => {

      return (
            <nav className="bg-[#0D1128] p-4">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
                        <ul className="flex gap-8">
                              <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                    <NavLink to="/" style={({ isActive }) => ({
                                          color: isActive ? '#FD5F00' : '#FFF',
                                    })}>
                                          Home
                                    </NavLink>
                              </li>
                              <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                    <NavLink to="/about" style={({ isActive }) => ({
                                          color: isActive ? '#FD5F00' : '#FFF',
                                    })}>
                                          About Us
                                    </NavLink>
                              </li>
                              <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                    <NavLink to="/Contact" style={({ isActive }) => ({
                                          color: isActive ? '#FD5F00' : '#FFF'
                                    })}>
                                          Contact
                                    </NavLink>
                              </li>
                        </ul>
                        <div className="flex items-center gap-2">
                              <div className="dropdown dropdown-bottom dropdown-end">
                                    <img tabIndex={0} className="w-12 rounded-full" src="https://i.ibb.co/Fn6mVw3/user.png" alt="Author Logo" />
                                    <ul tabIndex={0} className="hidden md:block dropdown-content text-[#FD5F00] z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                          <li className="font-medium text-lg"><a>Kamruzzaman Bayezid</a></li>
                                          <li className="font-medium"><a>kamruzzamanbayezid07@gmail.com</a></li>
                                    </ul>
                              </div>

                              <button className="py-2 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Log In</button>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;