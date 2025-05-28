import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import type { Ticket } from './ticketsAPI';
import  { fetchTickets } from './ticketsAPI';

const ticketsAdapter = createEntityAdapter<Ticket>();

interface TicketsState {
  loadingStatus: 'idle' | 'loading' | 'failed';
}

const initialState = ticketsAdapter.getInitialState<TicketsState>({
  loadingStatus: 'idle',
});

export const fetchTicketsThunk = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const response = await fetchTickets();
    return response;
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  
  extraReducers(builder) {
    builder.addCase(fetchTicketsThunk.pending, (state) => {
      state.loadingStatus = 'loading';
    });
    builder.addCase(fetchTicketsThunk.fulfilled, (state, action) => {
      state.loadingStatus = 'idle';
      ticketsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchTicketsThunk.rejected, (state) => {
      state.loadingStatus = 'failed';
    });
  },
});

export const { selectAll } = ticketsAdapter.getSelectors((state:any) => state.tickets);

export default ticketsSlice.reducer;