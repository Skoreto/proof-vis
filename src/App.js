import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Overview from './components/pages/Overview/Overview'
import Exercise20svg from './components/exercises/Exercise20svg/Exercise20svg'
import Exercise20vis from './components/exercises/Exercise20vis/Exercise20vis'
import Exercise26 from './components/exercises/Exercise26/Exercise26'
import Exercise26gen from './components/exercises/Exercise26gen/Exercise26gen'
import Exercise17a from './components/exercises/Exercise17a/Exercise17a'
import SingleDrawing from './components/pages/SingleDrawing/SingleDrawing'
import CustomNavbar from './components/UI/CustomNavbar/CustomNavbar'
import Footer from './components/UI/Footer/Footer'

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <CustomNavbar/>
                    <Route exact path="/" component={Overview} />
                    <Route path="/priklad20svg" component={Exercise20svg} />
                    <Route path="/priklad20vis" component={Exercise20vis} />
                    <Route path="/priklad26" component={Exercise26} />
                    <Route path="/priklad26gen" component={Exercise26gen} />
                    <Route path="/priklad17a" component={Exercise17a} />
                    <Route path="/platno" component={SingleDrawing} />
                    {/*<Footer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;