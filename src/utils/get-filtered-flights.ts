import { Filters } from "../types/filters";
import { Flights } from "../types/flight";

export const getFilteredFlights = (filters: Filters[], flights: Flights) => {
  if (filters.some((filter) => filter === Filters.All)) {
    return flights
  } else {
    return flights.filter((flight) => filters.some((filter) => filter === flight.connectionsCount))
  }
}