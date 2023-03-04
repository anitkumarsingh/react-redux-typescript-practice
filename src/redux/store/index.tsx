import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {counterReducer} from '../reducer/counter';
import {toDosReducer} from '../reducer/toDos';
import {toDo} from '../action/todos';

interface counter{
  count:number
}
export interface storeState{
  count:counter,
  toDos:toDo[]
}
const reducers =combineReducers<storeState>({
  count:counterReducer,
  toDos:toDosReducer
});
const middleware =[thunk]
const store =createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)));

export default store;