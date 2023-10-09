import { MdLocationOn } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
import Navbar from "../../Shared/Navbar/Navbar";

const Contact = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="mb-20 p-2">
                        <div className="p-4 border-b-2 border-[#FD5F00]">
                              <h2 className="text-5xl font-semibold my-10">Contact Us</h2>
                              <p className="w-full md:w-3/4 lg:w-1/2 text-lg font-medium text-gray-500 mb-12">If you have any questions or would like to inquire about our services, feel free to get in touch with us. We're here to help!</p>

                              <div>
                                    <div className="my-10">
                                          <h3 className="text-2xl mb-2 font-bold">Address:</h3>
                                          <div className="flex gap-3 items-center">
                                                <span><MdLocationOn className="text-2xl text-[#FD5F00]"></MdLocationOn></span>
                                                <div className="">
                                                      <p className="text-lg text-gray-500 font-medium">123 Entertainment Street</p>
                                                      <p className="text-lg text-gray-500 font-medium">Islampur, Muslimpara</p>
                                                      <p className="text-md text-gray-500 font-medium">Dhaka, Bangladesh</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="my-10">
                                          <h3 className="text-2xl mb-2 font-bold">Email:</h3>
                                          <div className="flex gap-3 items-center">
                                                <span><SiMinutemailer className="text-2xl text-[#FD5F00]"></SiMinutemailer></span>
                                                <div className="">
                                                      <p className="text-lg text-gray-500 font-medium">kamruzzamanbayezid07@gmail.com</p>
                                                      <p className="text-lg text-gray-500 font-medium">kmbayezid955@gmail.com</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="my-10">
                                          <h3 className="text-2xl mb-2 font-bold">Phone:</h3>
                                          <div className="flex gap-3 items-center">
                                                <span><SiMinutemailer className="text-2xl text-[#FD5F00]"></SiMinutemailer></span>
                                                <div className="">
                                                      <p className="text-lg text-gray-500 font-medium">+123 456 7890</p>
                                                      <p className="text-lg text-gray-500 font-medium">01882888860</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className="lg:flex justify-end bg-slate-100">
                              <div className="mt-12 ">
                                    <div className="flex item-center gap-3">
                                          <span><AiOutlineMessage className="text-[#FD5F00] text-4xl"></AiOutlineMessage></span>
                                          <h2 className="text-2xl font-medium mb-8">Send us a message</h2>
                                    </div>
                                    <form>
                                          <div className="flex flex-col lg:flex-row lg:gap-10 mb-6">
                                                <label>First Name:</label>
                                                <input className="border px-24 py-3 border-black" type="text" />
                                          </div>
                                          <div className="flex flex-col lg:flex-row lg:gap-10 mb-6">
                                                <label>Last Name:</label>
                                                <input className="border px-24 py-3 border-black" type="text" />
                                          </div>
                                          <div className="flex flex-col lg:flex-row lg:gap-10 mb-6">
                                                <label>Email:</label>
                                                <input className="lg:lg:ml-10 border px-24 py-3 border-black" type="email" />
                                          </div>
                                          <div className="flex flex-col lg:flex-row lg:gap-10 mb-6">
                                                <label>Phone:</label>
                                                <input className="lg:ml-8 border px-24 py-3 border-black" type="text" />
                                          </div>
                                          <div className="flex flex-col lg:flex-row lg:gap-10 mb-6">
                                                <label>Message:</label>
                                                <textarea className="lg:ml-3 border px-24 py-3 border-black" name="text" id="" cols="40" rows="5"></textarea>
                                          </div>

                                          <input type="submit" value="Send" className="hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium hover:bg-transparent bg-[#FD5F00] py-3 cursor-pointer rounded-md w-full " />

                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Contact;