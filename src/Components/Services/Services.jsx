import { useEffect, useState } from "react";

const Services = () => {

      const [services, setServices] = useState([]);

      useEffect(() => {
            const fetchEvents = async () => {
                  const res = await fetch('/services.json')
                  const data = await res.json()
                  setServices(data);
            }
            fetchEvents();
      }, []);

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0 lg:grid-cols-3 mb-20">
                  {
                        services.map(service => {
                              return <div key={service.id}>
                                    <div className="md:h-36" style={{ backgroundColor: service.backgroundColor }}>
                                          <div className="card-body  text-[#FFF]">
                                                <div>
                                                      <h2 className="card-title mb-2">{service.category}</h2>
                                                      <p>{service.description}</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        })
                  }
            </div>
      );
};

export default Services;