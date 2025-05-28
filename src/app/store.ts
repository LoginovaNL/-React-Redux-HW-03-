import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer  from '../features/tickets/ticketsSlice';
import filtersReducer from '../features/filters/filtersSlice';
import sortingReducer from '../features/sorting/sortingSliсe';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
    sorting: sortingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;