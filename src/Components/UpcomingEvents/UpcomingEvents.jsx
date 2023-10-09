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
            <div className="mb-24 mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                              events.map(event => <UpcomingEvent key={event.id} event={event}></UpcomingEvent>)
                        }
                  </div>
            </div>
      );
};

export default UpcomingEvents;