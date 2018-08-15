import React from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faSyncAlt,
  faBolt,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faEdit,
  faPencilAlt,
  faMinus,
  faCircleNotch,
  faRedoAlt,
  faDrawPolygon,
  faChalkboardTeacher,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import Overview from './components/pages/Overview/Overview';
import Exercise19 from './components/exercises/Exercise19/Exercise19';
import Proof1 from './components/exercises/Proof1/Proof1';
import Proof4 from './components/exercises/Proof4/Proof4';
import Proof2 from './components/exercises/Proof2/Proof2';
import Exercise24 from './components/exercises/Exercise24/Exercise24';
import Proof3 from './components/exercises/Proof3/Proof3';
import Exercise17av2 from './components/exercises/Exercise17a/Exercise17av2';
import Help from './components/pages/Help/Help';
import SingleDrawing from './components/pages/SingleDrawing/SingleDrawing';
import MainNavbar from './UI/MainNavbar/MainNavbar';
import Footer from './UI/Footer/Footer';

// Add Font Awesome icons into global library for accesing them via FontAwesomeIcon component
library.add(
  faArrowRight,
  faSyncAlt,
  faBolt,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faEdit,
  faPencilAlt,
  faMinus,
  faCircleNotch,
  faRedoAlt,
  faDrawPolygon,
  faChalkboardTeacher,
  faQuestion,
);

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <MainNavbar />
      <Grid>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/priklad17av2" component={Exercise17av2} />
          <Route path="/priklad19" component={Exercise19} />
          <Route path="/proof1" component={Proof1} />
          <Route path="/proof4" component={Proof4} />
          <Route path="/proof2" component={Proof2} />
          <Route path="/priklad24" component={Exercise24} />
          <Route path="/proof3" component={Proof3} />
          <Route path="/napoveda" component={Help} />
          <Route path="/platno" component={SingleDrawing} />
        </Switch>
      </Grid>
      {/* <Footer/> */}
    </div>
  </BrowserRouter>
);

export default App;
