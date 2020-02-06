import React from 'react';
import './App.css';
import List from './Components/List'
import About from './Components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/:id" component={About} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
