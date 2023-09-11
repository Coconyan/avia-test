import { store } from "../store";
import { Filters } from "./filters";
import { Flights } from "./flight";

export type Data = {
  flights: Flights,
  filteredFlights: Flights
  currentFilters: Filters[]
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
