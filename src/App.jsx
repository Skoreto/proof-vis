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
  faPaintBrush,
  faPencilAlt,
  faMinus,
  faCircleNotch,
  faRedoAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import Overview from './components/pages/Overview/Overview';
import Exercise19 from './components/exercises/Exercise19/Exercise19';
import Exercise20 from './components/exercises/Exercise20/Exercise20';
import Exercise21 from './components/exercises/Exercise21/Exercise21';
import Exercise23 from './components/exercises/Exercise23/Exercise23';
import Exercise24 from './components/exercises/Exercise24/Exercise24';
import Exercise26 from './components/exercises/Exercise26/Exercise26';
import Exercise26v2 from './components/exercises/Exercise26v2/Exercise26v2';
import Exercise17a from './components/exercises/Exercise17a/Exercise17a';
import Exercise17av2 from './components/exercises/Exercise17a/Exercise17av2';
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
  faPaintBrush,
  faPencilAlt,
  faMinus,
  faCircleNotch,
  faRedoAlt,
  faEdit,
);

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <MainNavbar />
      <Grid>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/priklad17a" component={Exercise17a} />
          <Route path="/priklad17av2" component={Exercise17av2} />
          <Route path="/priklad19" component={Exercise19} />
          <Route path="/priklad20" component={Exercise20} />
          <Route path="/priklad21" component={Exercise21} />
          <Route path="/priklad23" component={Exercise23} />
          <Route path="/priklad24" component={Exercise24} />
          <Route path="/priklad26" component={Exercise26} />
          <Route path="/priklad26v2" component={Exercise26v2} />
          <Route path="/platno" component={SingleDrawing} />
        </Switch>
      </Grid>
      {/* <Footer/> */}
    </div>
  </BrowserRouter>
);

export default App;
