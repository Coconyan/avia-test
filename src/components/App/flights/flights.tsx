import FlightsFilters from '../../flights-filters/flights-filters';
import FlightsList from '../../flights-list/flights-list';
import './styles/flights.scss';
import flights from '../../../data/flights.json';

function Flights() {
  return (
    <div className='flights'>
      <FlightsFilters />
      <FlightsList flights={flights} />
    </div>
  );
}

export default Flights;