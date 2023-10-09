import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";
import Navbar from "../../Shared/Navbar/Navbar";

const Register = () => {

      const { createUser, profileUpdate } = UseAuth();

      const handleSubmit = (e) => {
            e.preventDefault();

            const form = new FormData(e.currentTarget);
            const name = form.get('name')
            const email = form.get('email')
            const image = form.get('photo_URL')
            const password = form.get('password')

            if (password.length < 6) {
                  toast.error('Password should at least 6 character')
                  return;
            }
            else if (!/[A-Z]/.test(password)) {
                  toast.error('Password must need at least a capital letter')
                  return;
            }
            else if(!/[@$!%*?&]/.test(password)){
                  toast.error('Password must need at least a special character')
                  return
            }

            // create account
            createUser(email, password)
                  .then(result => {

                        // update profile
                        profileUpdate(name, image)
                              .then(() => {
                                    toast.success('Account created successfully')
                              })
                              .catch(error => toast.error(error.message))

                  })
                  .catch(error => toast.error(error.message))

      }

      return (
            <div>
                  <Navbar></Navbar>
                  <div className="flex flex-col lg:flex-row justify-between my-10">
                        <div className="lg:w-1/2">
                              <img src="https://i.ibb.co/4NJXBMH/4934425.jpg" alt="welcome image" />
                        </div>
                        <div className=" lg:w-1/2 flex items-center justify-center">
                              <div>

                                    <div className="flex justify-between">
                                          <div>
                                                <h2 className="text-2xl font-medium">Create an Account</h2>
                                                <p className="text-lg font-medium text-gray-500 mb-7">To continue with us</p>
                                          </div>
                                          <SocialLogin></SocialLogin>
                                    </div>

                                    <div className=" p-4 w-full bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                          <form onSubmit={handleSubmit} className="space-y-6" >
                                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                                                <div>
                                                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                      <input type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="your name" required />
                                                </div>
                                                <div>
                                                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                                </div>
                                                <div>
                                                      <label htmlFor="photo_URL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your photo_URL</label>
                                                      <input type="photo_URL" name="photo_URL" id="photo_URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="photo_url" required />
                                                </div>
                                                <div>
                                                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                </div>


                                                <span>Accept our <Link href="#" className="ml-auto text-sm text-[#FD5F00] hover:underline dark:text-blue-500">terms and condition</Link></span>

                                                <button type="submit" className="w-full text-white bg-[#FD5F00]   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                      Already have an account? <Link to='/login' className="text-[#FD5F00] hover:underline dark:text-blue-500">Log In</Link>
                                                </div>
                                          </form>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;