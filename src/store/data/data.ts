import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Data } from '../../types/state';
import flights from '../../data/flights.json';
import { Filters } from '../../types/filters';
import { getFilteredFlights } from '../../utils/get-filtered-flights';

const initialState: Data = {
  flights: flights,
  filteredFlights: flights,
  currentFilter: Filters.All
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    changeFilter: (state, action: { payload: Filters }) => {
      state.currentFilter = action.payload;
      state.filteredFlights = getFilteredFlights(action.payload, state.flights);
    },
  },
});

export const { changeFilter } = data.actions;
