import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Exercise20 from './components/exercises/Exercise20/Exercise20'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Exercise20} />
                    <Route path="/priklad20" component={Exercise20} />
                </div>
            </Router>
        );
    }
}

export default App;