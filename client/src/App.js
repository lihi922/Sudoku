import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import Verify from './Verify';

class App extends Component{
  state = 
  {
      name:'lihi',
      password:'12345',
         
    login: false
  }

handleSubmit=(e)=>
{
  e.preventDefault();

  if(e.target.name.value===this.state.name &&e.target.pass.value===this.state.password){
     
    this.setState({login:true});
  
  }else{
    
    console.error('wrong name or password');
  }
 
  
}
   
  render(){
    if(this.state.login===true){
      return(
        <Verify/>
      );
    }else { 
      return (
    <div className="App">
      <header className="App-header">
        <h1> Welcom</h1>
        <img src={logo} className="App-logo" alt="logo" />  

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Name: </label>
          <br></br>
          <input type='text' name='name'/>
          
          <br></br>
          <label>Password:</label>
          <br></br>
          <input type='password' name='pass'/>
          <br></br><br></br>
          
          <button className='button' >Login</button>
        </form>

       
      </header>
    </div>
  );
  }
}
}

export default App;
