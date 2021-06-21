import {configureStore, applyMiddleware} from "@reduxjs/toolkit";
import ticketReducer from '../features/Ticket/TicketSlice';
import thunk from 'redux-thunk';

const rootReducer = {
  tickets: ticketReducer,
  
}
const store = configureStore(
 {
   reducer: rootReducer,
   middleware: applyMiddleware(thunk),
 }
);
export default store;