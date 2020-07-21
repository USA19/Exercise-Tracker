import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component{
    state={userName:''};


    onFormSubmit=async event=>{
        event.preventDefault();
        const User={
            userName:this.state.userName
        };
        console.log(User);
        const response =await axios.post('http://localhost:5000/user/add',User);
        console.log(response)
        this.setState({userName:''});
       
        
    }
    render(){
        return(
            <div className="container">
            <h3> Create New Users</h3>
               <form  onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                   <label for="exampleFormControlInput1">User Name</label>
                   <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state.userName} onChange={e=>this.setState({userName:e.target.value})}></input>
                   </div>
                   
                   <button type="submit" value="Create Exercise Log" className="btn btn-primary">Create User</button>
                   
               </form>
           </div>
           );
       }
       
  
} 


export default CreateUser;