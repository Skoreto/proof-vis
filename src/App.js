import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Exercise20 from './components/exercises/Exercise20/Exercise20'
import Exercise20vis from './components/exercises/Exercise20vis/Exercise20vis'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Exercise20} />
                    <Route path="/priklad20vis" component={Exercise20vis} />
                </div>
            </Router>
        );
    }
}

export default App;