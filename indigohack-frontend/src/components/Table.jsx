import { format, parseISO } from 'date-fns';
export const Table = ({ data }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return format(parseISO(dateString), 'MMM d, yyyy HH:mm');
  };
  return (
    <div className="">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="py-3 px-4 text-left">Flight ID</th>
            <th className="py-3 px-4 text-left">Airline</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Departure Gate</th>
            <th className="py-3 px-4 text-left">Arrival Gate</th>
            <th className="py-3 px-4 text-left">Scheduled Departure</th>
            <th className="py-3 px-4 text-left">Actual Departure</th>
            <th className="py-3 px-4 text-left">Scheduled Arrival</th>
            <th className="py-3 px-4 text-left">Actual Arrival</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((flight, index) => (
            <tr key={index} className="border-b border-muted">
              <td className="py-3 px-4 text-left">{flight.flight_id}</td>
              <td className="py-3 px-4 text-left">{flight.airline}</td>
              {flight.status === "Delayed" && (<td className="py-4 px-4 text-left"><span className="bg-yellow-500 whitespace-nowrap text-white px-2 py-1 rounded-md">{flight.status}</span></td>)}
              {flight.status === "On Time" && (<td className="py-4 px-4 text-left"><span className="bg-green-500 whitespace-nowrap text-white px-2 py-1 rounded-md">{flight.status}</span></td>)}
              {flight.status === "Cancelled" && (<td className="py-4 px-4 text-left"><span className="bg-red-500 whitespace-nowrap text-white px-2 py-1 rounded-md">{flight.status}</span></td>)}
              <td className="py-3 px-4 text-left">{flight.departure_gate}</td>
              <td className="py-3 px-4 text-left">{flight.arrival_gate}</td>
              <td className="py-3 px-4 text-left">{formatDate(flight.scheduled_departure)}</td>
              <td className="py-3 px-4 text-left">{flight.actual_departure ? formatDate(flight.actual_departure): "N/A"}</td>
              <td className="py-3 px-4 text-left whitespace-nowrap">{formatDate(flight.scheduled_arrival)}</td>
              <td className="py-3 px-4 text-left">{flight.actual_arrival ? formatDate(flight.actual_arrival) : "N/A"}</td>
              <td className="py-3 px-4 text-left"><button className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>Notification</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
