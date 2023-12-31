import { Currencies, NameSpace } from '../../const';
import { Filters } from '../../types/filters';
import { Flights } from '../../types/flight';
import { State } from '../../types/state';

export const getFlights = (state: State): Flights => state[NameSpace.data].flights;
export const getFilteredFlights = (state: State): Flights => state[NameSpace.data].filteredFlights;
export const getCurrentFilters = (state: State): Filters[] => state[NameSpace.data].currentFilters;
export const getCurrency = (state: State): Currencies => state[NameSpace.data].currency;
