import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";
import { HiOutlineMenu } from "react-icons/hi";

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
                        <div>
                              <ul className=" gap-5 lg:gap-8 hidden lg:flex">
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
                                    <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                          <NavLink to="/blogs" style={({ isActive }) => ({
                                                color: isActive ? '#FD5F00' : '#FFF'
                                          })}>
                                                Blogs
                                          </NavLink>
                                    </li>
                                    {
                                          !user && <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                                <NavLink to="/register" style={({ isActive }) => ({
                                                      color: isActive ? '#FD5F00' : '#FFF'
                                                })}>
                                                      Register for updates
                                                </NavLink>
                                          </li>
                                    }
                              </ul>
                              <div className="dropdown lg:hidden">
                                    <label tabIndex={0} className="text-[#FFF] m-1"><HiOutlineMenu className="text-3xl"></HiOutlineMenu></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] p-6 shadow rounded-box w-52 bg-[#0D1128]">
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
                                          <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                                <NavLink to="/blogs" style={({ isActive }) => ({
                                                      color: isActive ? '#FD5F00' : '#FFF'
                                                })}>
                                                      Blogs
                                                </NavLink>
                                          </li>
                                          {
                                                !user && <li className="text-lg font-normal hover:border-b-2 hover:border-[#FD5F00]">
                                                      <NavLink to="/register" style={({ isActive }) => ({
                                                            color: isActive ? '#FD5F00' : '#FFF'
                                                      })}>
                                                            Register for updates
                                                      </NavLink>
                                                </li>
                                          }
                                    </ul>
                              </div>
                        </div>
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

                              <div>
                                    {
                                          user ?
                                                <button onClick={handleLogOut} className="py-2 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Log Out</button>
                                                :
                                                <Link to='/login'>
                                                      <button className="py-2 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Log In</button>
                                                </Link>
                                    }
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;