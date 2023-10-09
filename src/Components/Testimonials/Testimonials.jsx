import { useEffect, useState } from "react";

const Testimonials = () => {

      const [testimonials, setTestimonials] = useState([]);

      useEffect(() => {
            const fetchEvents = async () => {
                  const res = await fetch('/testimonials.json')
                  const data = await res.json()
                  setTestimonials(data);
            }
            fetchEvents();
      }, []);

      return (
            <div className="bg-[#0D1128]">
                  <div className="max-w-7xl mx-auto grid px-16 py-20 grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mb-10">
                        {
                              testimonials.map(testimonial => {
                                    return <div key={testimonial.id}>
                                          <div className="my-8">

                                                <div className="relative bg-[#FFFFFF] pt-24 px-5 pb-5">
                                                      <p className="text-gray-500 text-center mb-2">{testimonial.quote}</p>
                                                      <h3 className="text-center text-[#FD5F00] font-medium text-xl">{testimonial.name}</h3>
                                                      <p className="text-center font-normal mt-1">{testimonial.occupation}</p>
                                                      <div data-aos="flip-left" className="w-40 absolute -top-14 border-[5px] border-[#0D1128] left-[60px] lg:left-[105px] md:left-[70px]">
                                                            <img  src={testimonial.image} alt="Author image" />
                                                      </div>
                                                </div>

                                          </div>
                                    </div>
                              })
                        }
                  </div>
            </div>
      );
};

export default Testimonials;