import React from 'react';
const PeopleSelection = () => {
  
    function sayHello() {
      alert('Hello, World!');
    }
    
    return (
      <div className='PeopleSelection'>
          <h1> who do you want to remember! </h1>
          <button onClick={sayHello}>upload photos</button>
      </div>
    );
  };
  
  export default PeopleSelection;