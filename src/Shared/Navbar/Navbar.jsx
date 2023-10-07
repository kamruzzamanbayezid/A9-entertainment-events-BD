import { NavLink } from "react-router-dom";

const Navbar = () => {
      
      return (
            <nav className="bg-[#0D1128] p-4">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
                        <ul className="flex gap-8">
                              <li className="text-lg font-normal">
                                    <NavLink to="/" style={({ isActive }) => ({
                                          color: isActive ? '#FD5F00' : '#FFF',
                                    })}>
                                          Home
                                    </NavLink>
                              </li>
                              <li className="text-lg font-normal">
                                    <NavLink to="/about" style={({ isActive }) => ({
                                          color: isActive ? '#FD5F00' : '#FFF',
                                    })}>
                                          About Us
                                    </NavLink>
                              </li>
                              <li className="text-lg font-normal">
                                    <NavLink to="/Contact" style={({ isActive }) => ({
                                          color: isActive ? '#FD5F00' : '#FFF'
                                    })}>
                                          Contact
                                    </NavLink>
                              </li>
                        </ul>
                        <div className="flex items-center gap-2">
                              <img className="w-12 rounded-full" src="https://i.ibb.co/Fn6mVw3/user.png" alt="Author Logo" />
                              <button className="py-2 px-8 text-[#FFF] font-medium rounded-sm bg-[#FD5F00]">Log In</button>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;