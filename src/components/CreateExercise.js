import React from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

class CreateExercise extends React.Component{
    state={
        userName:'',
        description:'',
        Date:new Date(),
        duration:0,
        users:[]
    };
    async componentDidMount(){
        const response=await axios.get('http://localhost:5000/user');
  
        if(response.data.length>=0){
            this.setState({
                users:response.data.map(user=>user.userName),
                userName:response.data[0].userName
            })
        }
       
    }
    onFormSubmit=async event=>{
        event.preventDefault();
        const exercise={
        userName:this.state.userName,
        Description:this.state.description,
        Date:this.state.Date,
        duration:this.state.duration,

        }
       const res= await axios.post('http://localhost:5000/exercise/add',exercise);
        console.log(res);
        window.location='/';
    }

    render(){
        return(
         <div className="container">
         <h3> Create Exercise Log</h3>
            <form  onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="User">User Name</label>
                    <select className="form-control" id="User" value={this.state.userName} onChange={e=>this.setState({userName:e.target.value})}>
                    {
                        this.state.users.map(user=>{
                           return <option>{user}</option>;
                        })
                    }
                   
                   
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                </div>
                            
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Duration (in minutes)</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state.duration} onChange={e=>this.setState({duration:e.target.value})}></input>
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Date:</label>
                <div>
                <DatePicker  selected={this.state.Date} onChange={e=>this.setState({Date:e.target.value})} />
                </div>
                </div>
                <button type="submit" value="Create Exercise Log" className="btn btn-primary">Create Exercise Log</button>
                
            </form>
        </div>
        );
    }
} 


export default CreateExercise;