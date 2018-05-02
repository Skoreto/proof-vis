import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Exercise20 from './components/exercises/Exercise20/Exercise20'
import Exercise20vis from './components/exercises/Exercise20vis/Exercise20vis'
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
                    <Route exact path="/" component={Exercise20vis} />
                    <Route path="/priklad20" component={Exercise20} />
                    <Route path="/priklad20vis" component={Exercise20vis} />
                    {/*<Footer/>*/}
                    <BottomBar/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;