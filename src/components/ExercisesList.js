import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class ExercisesList extends React.Component{
    state={exercises:[]};

    async componentDidMount(){
       const res=await axios.get('http://localhost:5000/exercise/');
       console.log(res)
       this.setState({exercises:res.data});
    }

    deleteExercise=async id=>{
        const res=await axios.delete('http://localhost:5000/exercise/'+id);
        if(res){
            this.setState({exercises:this.state.exercises.filter(element=>element._id!==id)})
        }
    }
    editExercise=async id=>{
        const res=await axios.get('http://localhost:5000/exercise/'+id);
        if(res){
            console.log(res);
        }
    }
    render(){
        return(
            <div className="container">
            <h3>Exercises List</h3>
            <table className="table">
            <thead>
              <tr>
                <th scope="col">User Name</th>
                <th scope="col">Description</th>
                <th scope="col">Duration</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            
             {this.state.exercises.map(exercise=>{
              return <tr key={exercise._id}>
                
                <td>{exercise.userName}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0,10)}</td>
                <td><Link to={"/edit/"+exercise._id}><button style={{marginRight:'10px'}} type="button" className="btn btn-outline-success">Edit</button></Link><button type="button" onClick={()=>this.deleteExercise(exercise._id)} className="btn btn-outline-danger">Delete</button></td>
              </tr>
                     })}
                    
            </tbody>
            
          </table> </div>
        );
    }
} 


export default ExercisesList;