import {createSlice} from '@reduxjs/toolkit';

const ticket = createSlice({
  name: 'tickets',
  initialState: [
  ],
  reducers: {
    addTicket: (state, action) => {
      state.push(action.payload)
    },
    deleteTicket: (state, action) => {
      const deleteTicketId = action.payload;
      state = state.filter(ticket => ticket.id !== deleteTicketId);
      return state;
    }
  }
});
const {reducer: ticketReducer, actions} = ticket;
export const {getTicket, addTicket, deleteTicket} = actions;
export default ticketReducer;