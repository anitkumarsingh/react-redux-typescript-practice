import {INCREAMENT,INCREAMENT_BY,DECREAMENT,RESET} from '../action/types';

const initialState={
  count:0
}
interface actionProps{
  action:string | number,
  payload:number,
  type:string
}

const counterReducer =(state=initialState,action:actionProps)=>{
  switch (action.type) {
    case INCREAMENT:
      return{
        ...state,
        count:state.count + 1
      }
    case DECREAMENT:
      return{
        ...state,
        count:state.count -1
      }
    case INCREAMENT_BY:
      return{
        ...state,
        count:state.count + action.payload
      }
    case RESET:
      return{
        count:0
      }
    default:
      return state;
  }
}

export{
  counterReducer
}