import { useLoaderData, useParams } from "react-router-dom";
import { MdDateRange, MdLocationOn, MdOutlineAccessTime } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import Navbar from "../../Shared/Navbar/Navbar";

const UpcomingEventDetails = () => {

      const events = useLoaderData();
      const { id } = useParams();
      // const ids = parseInt(id);

      const foundEvent = events.find((event) => event.id === id);

      const { title, image, description, date, time, day, location, ticketPrice, organizer } = foundEvent;

      return (
            <div>
               
                  <Navbar></Navbar>
                  <div className="my-10 w-11/12 mx-auto">
                        <img className="w-full mb-16 max-h-[70vh]" src={image} alt="Event photo" />
                        <div className="">
                              <span className="mr-1 text-[#FD5F00] ">{location.city},</span>
                              <span className="text-[#FD5F00] ">{location.country}</span>
                        </div>
                        <h1 className=" mb-10 text-5xl font-extrabold">{title}</h1>
                        <p className="text-gray-500">{description}</p>
                        <div className="mt-10">
                              <h3 className="text-2xl mb-2 font-bold">Date and Time:</h3>
                              <div className="flex items-center gap-2">
                                    <span><MdDateRange className="text-2xl text-[#FD5F00]"></MdDateRange></span>
                                    <h4 className="text-lg text-gray-600 font-medium">Starts on {day}, {date}, {time}</h4>
                              </div>
                        </div>

                        <div className="my-10">
                              <h3 className="text-2xl mb-2 font-bold">Location:</h3>
                              <div className="flex gap-3 items-center">
                                    <span><MdLocationOn className="text-2xl text-[#FD5F00]"></MdLocationOn></span>
                                    <div className="">
                                          <p className="text-lg font-medium">{location.venue}</p>
                                          <p className="text-md text-gray-500 font-medium">{location.address}, {location.city}</p>
                                    </div>
                              </div>
                        </div>

                        <div>
                              <h3 className="text-2xl mb-2 font-bold">Duration:</h3>
                              <div className="flex items-center gap-3">
                                    <span><MdOutlineAccessTime className="text-2xl text-[#FD5F00]"></MdOutlineAccessTime></span>
                                    <span className="text-lg font-medium">3 hours</span>
                              </div>
                        </div>

                        <div className="mt-10">
                              <h3 className="text-2xl mb-2 font-bold">Organizer:</h3>
                              <div className="flex items-center gap-3">
                                    <span><CgOrganisation className="text-2xl text-[#FD5F00]"></CgOrganisation></span>
                                    <p className="text-lg text-gray-600 font-medium">{organizer}</p>
                              </div>
                        </div>


                        <div className=" w-96 mt-10 border p-6">
                              <h2 className="text-center text-2xl mb-3 font-medium">Ticket price: {ticketPrice} tk</h2>
                              <button className="w-full py-2 px-8 hover:text-[#FD5F00] ease-in-out transition text-xl text-[#FFF] border border-[#FD5F00] font-medium rounded-sm hover:bg-transparent bg-[#FD5F00]">Get tickets</button>

                        </div>


                  </div>
            </div>
      );
};

export default UpcomingEventDetails;