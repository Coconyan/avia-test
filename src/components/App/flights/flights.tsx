import { useAppSelector } from '../../../hooks';
import { getFilteredFlights } from '../../../store/data/selectors';
import FlightsFilters from '../../flights-filters/flights-filters';
import FlightsList from '../../flights-list/flights-list';
import './styles/flights.scss';

function Flights() {
  const flights = useAppSelector(getFilteredFlights);

  return (
    <div className='flights'>
      <FlightsFilters />
      <FlightsList flights={flights} />
    </div>
  );
}

export default Flights;