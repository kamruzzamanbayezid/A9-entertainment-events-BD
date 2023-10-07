import Banner from "../../Components/Banner/Banner";

const Home = () => {
      return (
            <div >

                  {/* Welcome WIsh */}
                  <div className="pt-1 pb-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 p-2 lg:p-0 ">
                              <div className="lg:w-1/2">
                                    <h2 className="text-4xl text-center lg:text-start mb-3 font-medium">Welcome to our <br/> ENTERTAINMENT Events <span className="text-green-500">B</span><span className=" text-red-500">D</span></h2>
                              </div>


                              <div className="lg:w-1/2">
                                    <p className="text-gray-500 text-sm text-center lg:text-start"><span className="text-2xl text-gray-600 font-normal">W</span>e transform ordinary moments into extraordinary memories. Dive into a world of immersive entertainment experiences that will leave you mesmerized. Whether you're a music enthusiast, a theater aficionado, or a sports fanatic, we've curated a diverse range of events that cater to every entertainment palate. Join us on a journey filled with laughter, music, drama, and excitement.</p>
                              </div>

                        </div>
                  </div>
                  {/* Banner */}
                  <Banner></Banner>
            </div>
      );
};

export default Home;