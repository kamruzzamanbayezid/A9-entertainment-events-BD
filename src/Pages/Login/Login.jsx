import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import UseAuth from "../../Hook/UseAuth";
import Navbar from "../../Shared/Navbar/Navbar";

const Login = () => {

      const location = useLocation();
      const navigate = useNavigate();
      const { logIn } = UseAuth();

      const handleSubmit = (e) => {
            e.preventDefault();

            const form = new FormData(e.currentTarget);
            const email = form.get('email')
            const password = form.get('password')

            // validation
            if (password.length < 6) {
                  toast.error('Password should at least 6 character')
                  return;
            }
            else if (!/[A-Z]/.test(password)) {
                  toast.error('Provide a strong password')
                  return;
            }

            // create account
            logIn(email, password)
                  .then(result => {
                        toast.success('Logged In Successfully')

                        // Clear the input values
                        const emailInput = document.getElementById('email');
                        const passwordInput = document.getElementById('password');
                        emailInput.value = '';
                        passwordInput.value = '';


                        navigate(location.state ? location.state : '/')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })

      }


      return (
            <div>
                  <Navbar></Navbar>
                  <div className="max-w-7xl mx-auto">
                        
                        <div className="flex mt-8 lg:mt-0 flex-col lg:flex-row justify-between">
                              <div className=" lg:w-1/2 flex items-center justify-center">
                                    <div>

                                          <div className="flex justify-between">
                                                <div>
                                                      <h2 className="text-3xl font-bold">Welcome Back</h2>
                                                      <p className="text-lg font-medium text-gray-500 mb-7">Login to continue</p>
                                                </div>
                                                <SocialLogin></SocialLogin>
                                          </div>

                                          <div className=" p-4 w-full bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                                <form className="space-y-6" onSubmit={handleSubmit}>
                                                      <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                                                      <div>
                                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                                      </div>
                                                      <div>
                                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                      </div>


                                                      <Link href="#" className="ml-auto text-sm text-[#FD5F00] hover:underline dark:text-blue-500">Lost Password?</Link>

                                                      <button type="submit" className="w-full text-white bg-[#FD5F00]   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                            Not registered? <Link to='/register' className="text-[#FD5F00] hover:underline dark:text-blue-500">Create account</Link>
                                                      </div>
                                                </form>
                                          </div>

                                    </div>
                              </div>

                              <div className="lg:w-1/2 ">
                                    <img src="https://i.ibb.co/S6SrQyP/4957136.jpg" alt="welcome image" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;