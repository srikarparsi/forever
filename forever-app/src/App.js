import logo from './logo.svg';
import './App.css';
import {firestore} from './firebase';

import db from './firebase';
import PeopleSelection from './PeopleSelection';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import First from './first';
import Second from './second';
import Third from './third';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={First} />
        <Route path="/second" component={Second}/>
        <Route path="/third" component={Third}/>
      </Switch>
    </Router>
  );
}

export default App;
