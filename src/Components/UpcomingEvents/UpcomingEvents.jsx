import { useEffect, useState } from "react";
import UpcomingEvent from "./UpcomingEvent";

const UpcomingEvents = () => {

      const [events, setEvents] = useState([]);

      useEffect(() => {
            const fetchEvents = async () => {
                  const res = await fetch('/events.json')
                  const data = await res.json()
                  setEvents(data);
            }
            fetchEvents();
      }, []);

      return (
            <div className="my-24">
                  <h2 className="text-center md:text-start text-[#0D1128] font-sans font-medium mb-7 border-l-4 border-[#FD5F00] pl-3 border-b w-fit pb-1 rounded text-5xl">Upcoming Events!</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                              events.map(event => <UpcomingEvent key={event.id} event={event}></UpcomingEvent>)
                        }
                  </div>
            </div>
      );
};

export default UpcomingEvents;