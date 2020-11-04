import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import axios from 'axios';
import App from './App';


class Verify extends Component {
    
    state={
        login:false,
        welcom:false,
        serverAns:"col 1 row 1 ? ",
        celnumber:0,
        suduko: [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ] 
        
    }


    handleSubmit_=async(e)=>{

        e.preventDefault();
        
        this.setState({celnumber:e.target.innumber.value})
       
        const config={headers:{"Content-Type": "application/json"}};
        
        const body =JSON.stringify({number:e.target.innumber.value});
       

        try {

            let res= await axios.post('/verify',body,config);
            let {message, bord} = res.data;
           
            this.setState({
                serverAns:message,
                suduko:bord
            })
        } catch (error) {
            console.error(error.respone.data); 
        }

        if(this.state.serverAns==='Fail'){

            alert('FAIL VERIFY');
            this.setState({login:true});

        };
             
        if(this.state.serverAns ==='Valid'){
            this.setState({welcom:true});
            
        };
        
      
        
    }


    render(){

        if(this.state.welcom===true){
            return (<Welcome/>);
        }else{
            if(this.state.login===true){
                return (<App/>);
            }else{
        
            return (
        
        <div className='App'>
            <header className="App-header" >

                <h1>verify page</h1>
                <h4>Fill the cells according to the sudoku conditions</h4>
                <br></br>
        
                <form className='form1' onSubmit={this.handleSubmit_}>
                        <label >{this.state.serverAns}</label>
                        <input type='number'name='innumber' min='1' max='9' required />
                        <br></br><br></br>
                        <button className='button'>Submit</button>
                </form>
                
                <br></br>

                <div className='table1'>
                <table id="sudoku">
                <tbody>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[0][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[1][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[2][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[3][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[4][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[5][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[6][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[7][8]}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][0]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][1]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][2]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][3]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][4]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][5]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][6]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][7]}/></td>
                        <td><input type="text" className="input" readOnly value={this.state.suduko[8][8]}/></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
                <div className='sudukosolved'>
            <table id="sudoku">
                <tbody>
                    <tr>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="input" value='7' readOnly/></td>
                        <td><input type="text" className="input" value='9' readOnly/></td>
                        <td><input type="text" className="input" value='5' readOnly/></td>
                        <td><input type="text" className="input" value='1' readOnly/></td>
                        <td><input type="text" className="input" value='8' readOnly/></td>
                        <td><input type="text" className="input" value='3' readOnly/></td>
                        <td><input type="text" className="input" value='2' readOnly/></td>
                        <td><input type="text" className="input" value='4' readOnly/></td>
                        <td><input type="text" className="input" value='6' readOnly/></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
           
        </header>
        </div>
    );
    }
    }
    }
}


export default Verify;