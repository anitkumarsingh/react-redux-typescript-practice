import { Component } from 'react';

interface appProps {
  color?: string
}
interface appState{
  counter:number,
}

class Home extends Component<appProps,appState>{
  constructor(props:appProps){
    super(props)
    this.state = {
      counter: 0,
    }
  }
 
  increament =():void=>{
    this.setState({counter:this.state.counter + 1})
  }
  decreament = ():void =>{
    this.setState({counter:this.state.counter -1})
  }
  render() {
    return (
      <>
        <button onClick={this.increament}>Increament Counter</button><br/><br/>
        <button onClick={this.decreament}>Increament Counter</button><br/>
        {this.state.counter}<br/><br/>
      </>
    )
  }
}
export default Home;