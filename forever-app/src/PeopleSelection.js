import React from 'react';
import {useState} from "react"
const PeopleSelection = () => {
    const [file, setFile] = useState("");

    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    return (
        
      <div className='PeopleSelection'>
          <h1> who do you want to remember! </h1>
          <div>
          <input type="file" accept="image/*" onChange={handleChange}/>
          </div>
      </div>
    );
  };
  
  export default PeopleSelection;