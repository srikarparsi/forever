import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//Functional Component 

const options = [
    'food', 'nature', 'family'
  ];
  const defaultOption = options[0];

const Second = () => {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>
            what do you want to remember
        </h2>
        <div style={{backgroundColor: "thistle", margin: "50px"}}>
          <Dropdown options={options} onChange={console.log("pressed")} value={defaultOption} placeholder="Select an option" />
        </div>
        <Link to="/third">Show List of Users</Link>
    </div>
    
  );
};

export default Second;