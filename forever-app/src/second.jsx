import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//Functional Component 

const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

const Second = () => {
  return (
    <div>
        <h1>
            Second Screen
        </h1>
        <Link to="/third">Show List of Users</Link>
        <Dropdown options={options} onChange={console.log("pressed")} value={defaultOption} placeholder="Select an option" />
    </div>
    
  );
};

export default Second;