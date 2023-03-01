import { Component } from 'react';

interface appProps {
  color?: string
}
interface appState{
  counter:number
}

class App extends Component<appProps,appState>{
  constructor(props:appProps){
    super(props)
    this.state = {
      counter: 0
    }
  }
 
  increament =()=>{
    this.setState({counter:this.state.counter + 1})
  }
  decreament = () =>{
    this.setState({counter:this.state.counter -1})
  }
  render() {
    return (
      <>
        <button onClick={this.increament}>Increament Counter</button>
        <button onClick={this.decreament}>Increament Counter</button>
        {this.state.counter}
      </>
    )
  }
}
export default App;