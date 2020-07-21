import React from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

class EditExercise extends React.Component{
    state={
        userName:'',
        description:'',
        date:new Date(),
        duration:0,
        users:[]
    };
    async componentDidMount(){
        const response=await axios.get('http://localhost:5000/exercise/'+this.props.match.params.id);
      
       
       
            this.setState({
                userName: response.data.exercise.userName,
                description: response.data.exercise.description,
                duration: response.data.exercise.duration,
                date: new Date(response.data.exercise.date)
              })  ;
       
        console.log(this.state);
        const users=await axios.get('http://localhost:5000/user');
  
        if(users.data.length>=0){
            this.setState({
                users:users.data.map(user=>user.userName),
                
            })
        }
       
    }
    onFormSubmit=async event=>{
        event.preventDefault();
        const exercise={
        userName:this.state.userName,
        description:this.state.description,
        date:this.state.date,
        duration:this.state.duration,

        }

       const res= await axios.post('http://localhost:5000/exercise/update/'+this.props.match.params.id, exercise);
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
                <DatePicker  selected={this.state.date} onChange={e=>this.setState({Date:e.target.value})} />
                </div>
                </div>
                <button type="submit" value="Create Exercise Log" className="btn btn-primary">Create Exercise Log</button>
                
            </form>
        </div>
        );
    }
} 


export default EditExercise;