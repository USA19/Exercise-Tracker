import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import Nav from './components/Nav';


const App=()=>{
    return (
        <Router class="container">
        <Nav/>
        <br/>
        <Route exact path="/" component={ExercisesList}/>
        <Route exact path="/edit/:id" component={EditExercise}/>
        <Route exact path="/create" component={CreateExercise}/>
        <Route exact path="/User" component={CreateUser}/>
      
        </Router>
    );
}

export default App;