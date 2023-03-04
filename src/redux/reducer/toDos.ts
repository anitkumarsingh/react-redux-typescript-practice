import {FETCHING,FETCH_SUCCESS} from '../action/types'
import {toDo,fetchActionType} from '../action/todos';

export const toDosReducer = (state:toDo[]=[],action:fetchActionType)=>{
switch (action.type) {
  case FETCHING:
    return []
    
  case FETCH_SUCCESS:
    return action.payload
    
  default:
    return state;
}
}