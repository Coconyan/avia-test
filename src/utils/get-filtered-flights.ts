import { Filters } from "../types/filters";
import { Flights } from "../types/flight";

export const getFilteredFlights = (filter: Filters, flights: Flights) => {
  switch (filter) {
    case Filters.All:
      return flights
    case Filters.WithoutConnections:
      return flights.filter((flight) => flight.connectionsCount === 0)
    case Filters.OneConnection:
      return flights.filter((flight) => flight.connectionsCount === 1)
    case Filters.TwoConnection:
      return flights.filter((flight) => flight.connectionsCount === 2)
    case Filters.ThreeConnection:
      return flights.filter((flight) => flight.connectionsCount === 3)  
    default:
      return flights
  }
}