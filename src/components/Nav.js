import React from 'react';
import {Link} from 'react-router-dom';




class Nav extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">ExerciseTracker</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Exercises</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create Exercise Log</Link>
            </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/User">Create User</Link>
              </li>
          </ul>

        </div>
        </div> 
    </nav>
        );
    }
}

export default Nav;

