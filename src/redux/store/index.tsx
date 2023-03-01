import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {counterReducer} from '../reducer/counter'

const reducers =combineReducers({
  counterReducer
});
const middleware =[thunk]
const store =createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)));

export default store;