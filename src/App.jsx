import React from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Overview from './components/pages/Overview/Overview';
import Exercise20svg from './components/exercises/Exercise20svg/Exercise20svg';
import Exercise20v2 from './components/exercises/Exercise20/Exercise20v2';
import Exercise21 from './components/exercises/Exercise21/Exercise21';
import Exercise23 from './components/exercises/Exercise23/Exercise23'
import Exercise26 from './components/exercises/Exercise26/Exercise26';
import Exercise26v2 from './components/exercises/Exercise26v2/Exercise26v2';
import Exercise17a from './components/exercises/Exercise17a/Exercise17a';
import Exercise17av2 from './components/exercises/Exercise17a/Exercise17av2';
import SingleDrawing from './components/pages/SingleDrawing/SingleDrawing';
import CustomNavbar from './components/UI/CustomNavbar/CustomNavbar';
import Footer from './components/UI/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <CustomNavbar />
          <Grid>
            <Route exact path="/" component={Overview} />
            <Route path="/priklad20svg" component={Exercise20svg} />
            <Route path="/priklad20v2" component={Exercise20v2} />
            <Route path="/priklad21" component={Exercise21} />
            <Route path="/priklad23" component={Exercise23} />
            <Route path="/priklad26" component={Exercise26} />
            <Route path="/priklad26v2" component={Exercise26v2} />
            <Route path="/priklad17a" component={Exercise17a} />
            <Route path="/priklad17av2" component={Exercise17av2} />
            <Route path="/platno" component={SingleDrawing} />
          </Grid>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
