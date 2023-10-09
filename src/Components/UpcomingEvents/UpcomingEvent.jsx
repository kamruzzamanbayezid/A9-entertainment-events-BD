
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UpcomingEvent = ({ event }) => {
      
      const { id, title, image, date, time, ticketPrice } = event;
      return (

            <div className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg hover:shadow-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0D1128]">{title}</h5>
                        <div className='flex gap-10'>
                              <span className='text-gray-500'>{date}</span>
                              <span className='text-gray-500'>{time}</span>
                        </div>
                        <p className='text-lg text-gray-500 font-medium'>Ticket Price: <span className='text-[#0D1128] font-bold text-base'>{ticketPrice}tk</span></p>
                        <Link to={`/eventDetails/${id}`}>
                              <p className='mt-4 w-fit text-[#FD5F00] border-b-2 hover:border-none border-[#FD5F00]'>Event details</p>
                        </Link>
                  </div>
            </div>

      );
};


UpcomingEvent.propTypes = {
      event: PropTypes.object
}

export default UpcomingEvent;