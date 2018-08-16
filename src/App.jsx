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
import Proof1 from './components/proofs/Proof1/Proof1';
import Proof2 from './components/proofs/Proof2/Proof2';
import Proof3 from './components/proofs/Proof3/Proof3';
import Proof4 from './components/proofs/Proof4/Proof4';
import Proof5 from './components/proofs/Proof5/Proof5';
import Proof6 from './components/proofs/Proof6/Proof6';
import Proof7 from './components/proofs/Proof7/Proof7';
import SingleDrawing from './components/pages/SingleDrawing/SingleDrawing';
import Help from './components/pages/Help/Help';
import MainNavbar from './UI/MainNavbar/MainNavbar';

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
          <Route path="/dukaz1" component={Proof1} />
          <Route path="/dukaz2" component={Proof2} />
          <Route path="/dukaz3" component={Proof3} />
          <Route path="/dukaz4" component={Proof4} />
          <Route path="/dukaz5" component={Proof5} />
          <Route path="/dukaz6" component={Proof6} />
          <Route path="/dukaz7" component={Proof7} />
          <Route path="/platno" component={SingleDrawing} />
          <Route path="/napoveda" component={Help} />
        </Switch>
      </Grid>
    </div>
  </BrowserRouter>
);

export default App;
