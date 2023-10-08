
const About = () => {
      return (
            <div>
                  <div className="flex flex-col lg:flex-row justify-center items-center my-8 gap-3">
                        <h4 className="text-4xl font-medium">Welcome to our</h4>
                        <h2 className="text-5xl font-semibold">ENTERTAINMENT</h2>
                        <h4 className="text-4xl font-medium">Events <span className="text-3xl font-bold text-green-500">B</span><span className="text-3xl font-bold text-red-500">D</span></h4>

                  </div>

                  <p className="text-lg font-medium text-gray-500 mb-12 w-full md:w-4/5 mx-auto text-center">At Your Entertainment Events, we are more than just event organizers; we are creators of unforgettable memories. With a passion for entertainment and a commitment to excellence, our team has been at the forefront of the entertainment industry for over a decade.</p>

                  <div className="lg:w-4/5 p-2 md:p-4">
                        <div className="mb-6">
                              <p className="text-2xl font-medium">Our Mission:</p>
                              <p className="text-gray-500">Our mission is simple: to provide you with extraordinary entertainment experiences that will leave you enchanted and delighted. We take pride in our ability to transform ordinary moments into extraordinary memories.</p>
                        </div>

                        <p className="text-2xl font-medium mb-2">What We Do:</p>
                        <p className="text-xl font-normal mb-1">Our expertise covers a diverse range of entertainment genres:</p>

                        <ul className="list-disc ml-12 text-gray-500">
                              <li>Concerts and Music Festivals: Immerse yourself in the world of music with our electrifying concerts and music festivals featuring top artists from around the world.</li>
                              <li>Theater and Performing Arts: Experience the magic of live theater with captivating performances that span classical to contemporary works.</li>
                              <li>Film Screenings and Premieres: Join us for exclusive film screenings and premieres, celebrating the art of cinema and storytelling.</li>
                              <li>Comedy Shows: Prepare for laughter-filled evenings with top comedians delivering hilarious acts that will leave you in stitches.</li>
                              <li>Sports Events: Feel the adrenaline rush as you cheer for your favorite athletes and teams in various sports events and championships.</li>
                        </ul>

                        <div className="my-6">
                              <p className="text-2xl font-medium">Our Commitment:</p>
                              <p className=" text-gray-500">With an unwavering commitment to excellence and attention to detail, we ensure that every event we organize is a seamless blend of entertainment, artistry, and joy. We are dedicated to creating experiences that transcend the ordinary and make a lasting impact.</p>
                        </div>

                        <p className="text-gray-700 text-xl mb-14">Join us on this extraordinary journey of entertainment, where each event is a story waiting to be written, and each moment is an opportunity to create magic.</p>
                  </div>
            </div >


      );
};

export default About;