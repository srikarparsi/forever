import logo from './logo.svg';
import './App.css';
import {firestore} from './firebase';

import db from './firebase';

function App() {
  
  const submit = (e) => {
    e.preventDefault();
    db.collection("customersData").add({
      name: "some name",
      password: "password",
    });
  };
  
  return (
    <div className="App">
      <div className="App__form">
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
