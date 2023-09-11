import { createSlice } from '@reduxjs/toolkit';
import { Currencies, NameSpace } from '../../const';
import { Data } from '../../types/state';
import flights from '../../data/flights.json';
import { Filters } from '../../types/filters';
import { getFilteredFlights } from '../../utils/get-filtered-flights';

const initialState: Data = {
  flights: flights,
  filteredFlights: flights,
  currentFilters: [Filters.All],
  currency: Currencies.Rub
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    changeFilter: (state, action: { payload: Filters[] }) => {
      state.currentFilters = action.payload;
      state.filteredFlights = getFilteredFlights(action.payload, state.flights);
    },
    changeCurrency: (state, action: { payload: Currencies }) => {
      state.currency = action.payload;
    }
  },
});

export const { changeFilter, changeCurrency } = data.actions;
