import { Component } from 'react';
import { connect } from "react-redux";
import { fetchToDos, toDo } from '../../redux/action/todos';
import { storeState } from '../../redux/store'

interface toDosProps {
  todos: toDo[],
  fetchToDos(): any
}

class ToDos extends Component<toDosProps>{
  state = {
    todos: this.props.todos
  }
  deleteItem(item: number): void {
    const filterList = this.props.todos.filter(i => i.id !== item)
    console.log('filer',filterList)
    this.setState(filterList)
  }
  renderList(): JSX.Element[] {
    return this.props.todos.slice(0,5).map((item: toDo) => {
      return <div key={item.id}
        onClick={() => this.deleteItem(item.id)}
        style={{
          width: '50',
          height: "auto",
          border: '2px solid grey',
          margin: '30px',
          padding: '30px'
        }}>{item.title}</div>
    })
  }

  render() {
   console.log('state',this.state.todos)
    return (
      <>
        <button onClick={() => this.props.fetchToDos()}>Fetch ToDos</button>
        {this.renderList()}
      </>
    )
  }
}
const mapStateToProps = (state: storeState): { todos: toDo[] } => {
  return { todos: state.toDos }
}
export default connect(mapStateToProps, { fetchToDos })(ToDos);