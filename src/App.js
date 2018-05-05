import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Exercise20svg from './components/exercises/Exercise20svg/Exercise20svg'
import Exercise20vis from './components/exercises/Exercise20vis/Exercise20vis'
import Exercise26 from './components/exercises/Exercise26/Exercise26'
import Exercise17a from './components/exercises/Exercise17a/Exercise17a'
import MainHeader from './components/UI/MainHeader/MainHeader'
import CustomNavbar from './components/UI/CustomNavbar/CustomNavbar'
import Footer from './components/UI/Footer/Footer'
import BottomBar from './components/UI/Footer/BottomBar'

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    {/*<MainHeader/>*/}
                    <CustomNavbar/>
                    <Route exact path="/" component={Exercise17a} />
                    <Route path="/priklad20svg" component={Exercise20svg} />
                    <Route path="/priklad20vis" component={Exercise20vis} />
                    <Route path="/priklad26" component={Exercise26} />
                    <Route path="/priklad17a" component={Exercise17a} />
                    {/*<Footer/>*/}
                    <BottomBar/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;