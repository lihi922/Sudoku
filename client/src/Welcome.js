import React, { Component } from 'react';
import './App.css';
import App from './App';

class Welcome extends Component {

    handlelogput=()=>{
        return (<App/>);
        
    }
    render(){
        return (
            <div className='App'>
                <header className="App-header">
                
               <h1>Welcom to your page !!</h1>
               <form className="logout" onSubmit={this.handlelogput.bind(this)}>
                    <button color='red' className='button'>Logout</button>
                </form> 

                </header>
            </div>


        );
    }
}
export default Welcome;