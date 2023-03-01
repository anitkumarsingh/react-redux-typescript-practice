
interface toDosProps{
  list?:[],
  handle:any
}
const ToDos = (props:toDosProps):JSX.Element =>{
return(
  <>
  <input placeholder="Enter todos items..." onChange={(e)=>props.handle(e.target.value)}/>
  <h1>Your TODOS</h1>
  {props.list}
  </>
)
}

export default ToDos;