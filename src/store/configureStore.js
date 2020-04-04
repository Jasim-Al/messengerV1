import { createStore } from 'redux';
import messagesReducer from '../reducers/messegesReducer';

const store = createStore(messagesReducer);
export default store;