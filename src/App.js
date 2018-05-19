import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Overview from './components/pages/Overview/Overview'
import Exercise20svg from './components/exercises/Exercise20svg/Exercise20svg'
import Exercise20vis from './components/exercises/Exercise20vis/Exercise20vis'
import Exercise26 from './components/exercises/Exercise26/Exercise26'
import Exercise26v2 from './components/exercises/Exercise26v2/Exercise26v2'
import Exercise17a from './components/exercises/Exercise17a/Exercise17a'
import Exercise17av2 from './components/exercises/Exercise17a/Exercise17av2'
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
                    <Route path="/priklad26v2" component={Exercise26v2} />
                    <Route path="/priklad17a" component={Exercise17a} />
                    <Route path="/priklad17av2" component={Exercise17av2} />
                    <Route path="/platno" component={SingleDrawing} />
                    {/*<Footer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;