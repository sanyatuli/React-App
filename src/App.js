import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import render from 'react-dom';
import pic from './pic.jpg'
import {Animated} from "react-animated-css";




class App extends Component{

  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  reload = () => {
    this.setState({count:this.state.count=6 })
  }
  
  decrement = () => {
  
    //console.log(this);
  if(this.state.count <= 6 && this.state.count > 0) {
  //   this.count--;
      this.setState({count:this.state.count - 1})
   }    
  else {
     alert("Kindly reload your gun");
   }
  
  }


render(){
  return(
    <div className="App">
       <header className="bullet"></header>
       
      
      <button onClick={this.reload} className="counter">Reload gun</button>
      <button onClick={this.decrement} className="counter">Shoot</button>
      <h2>NUMBER OF BULLETS LEFT :  {this.state.count}</h2>
    <img src={pic} width={480} height={480}  alt="pic" />
   
      
      <h1 style={{backgroundColor: "lightblue"}}>WELCOME TO SHOOT GUN GAME</h1>
    </div>
  );
}


  }

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >Edit</p>
        <button onClick={gunShoot}>Shoot</button>
        <button onClick={reload}>Reload</button>
      </header>
    </div>
  );
}
*/





export default App;
