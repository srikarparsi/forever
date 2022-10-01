import React from "react";
import { Link } from "react-router-dom";
//Functional Component 
const Second = () => {
  return (
    <div>
        <h1>
            Second Screen
        </h1>
        <Link to="/third">Show List of Users</Link>
    </div>
    
  );
};

export default Second;