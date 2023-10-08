import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {

      const { user, LogOut } = UseAuth();

      // Log out
      const handleLogOut = () => {
            LogOut()
                  .then(() => {
                        toast.success('SuccessFully Logged Out')
                  })
                  .catch(error => toast.error(error.message))
      }

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
                                          Contact Us
                                    </NavLink>
                              </li>
                        </ul>
                        <div className="flex items-center gap-2">
                              <div className="dropdown dropdown-bottom dropdown-end">
                                    {
                                          user && <img tabIndex={0} className="w-12 rounded-full" src={user?.photoURL} alt="Author Logo" />
                                    }
                                    <ul tabIndex={0} className="hidden md:block dropdown-content text-[#FD5F00] z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                          <li className="font-medium text-lg"><a>{user?.displayName}</a></li>
                                          <li className="font-medium"><a>{user?.email}</a></li>
                                    </ul>
                              </div>

                              <Link to='login'>
                                    {
                                          user ?
                                                <button onClick={handleLogOut} className="py-2 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Log Out</button>
                                                :
                                                <button className="py-2 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Log In</button>
                                    }
                              </Link>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;