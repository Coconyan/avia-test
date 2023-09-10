import { Flights } from '../../types/flight';
import FlightsListItem from '../flights-list-item/flights-list-item';
import './styles/flights-list.scss';

type PropsType = {
  flights: Flights,
}

function FlightsList(props: PropsType) {
  const { flights } = props;

  return (
    <div className="flight-list">
      {flights.map((flight) =>
        <FlightsListItem
          key={flight.id}
          flight={flight}
        />
      )}
    </div>
  );
}

export default FlightsList;