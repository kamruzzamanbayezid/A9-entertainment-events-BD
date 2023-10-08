import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {


      return (
            <div className="p-2 lg:p-0">


                  {/* Welcome WIsh */}
                  <div className="pt-1 pb-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 p-2 lg:p-0 ">
                              <div className="lg:w-1/2">
                                    <h2 className="text-4xl text-center lg:text-start mb-3 font-sans font-medium">Welcome to our <br /> ENTERTAINMENT Events <span className="text-green-500">B</span><span className=" text-red-500">D</span></h2>
                              </div>


                              <div className="lg:w-1/2">
                                    <p className="text-gray-500 text-sm text-center lg:text-start"><span className="text-2xl text-gray-600 font-normal">W</span>e transform ordinary moments into extraordinary memories. Dive into a world of immersive <span className="font-semibold">entertainment</span> experiences that will leave you mesmerized. Whether you are a music enthusiast, a theater aficionado, or a sports fanatic, we have curated a diverse range of events that cater to every <span className="font-semibold">entertainment</span> palate. Join us on a journey filled with laughter, music, drama, and excitement.</p>
                              </div>

                        </div>
                  </div>
                  {/* Banner */}
                  <Banner></Banner>

                  {/* Upcoming Events */}
                  <UpcomingEvents></UpcomingEvents>

                  {/* Our Services */}
                  <h2 className="text-center text-[#0D1128] md:text-start font-sans font-medium mb-7 border-l-4 border-[#FD5F00] pl-3 border-b w-fit pb-1 rounded text-5xl">Our Services!</h2>
                  <Services></Services>

                  {/* Testimonials: */}
                  <h2 className="text-center text-[#0D1128] md:text-start font-sans font-medium mb-7 border-l-4 border-[#FD5F00] pl-3 border-b w-fit pb-1 rounded text-5xl">Testimonials!</h2>

                  <Testimonials></Testimonials>
            </div>
      );
};

export default Home;