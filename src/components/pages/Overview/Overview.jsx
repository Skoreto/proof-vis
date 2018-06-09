import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import '../../../customMainTheme.css';
import PageHeading from "../../../components/UI/PageHeading/PageHeading";

class Overview extends React.Component {
  render() {
    return (
      <div>
        <div className={"container"}>
          <div className="page-wrapper">
            <PageHeading 
              headingTitle={"Ovládání a aktuálně zpracované příklady"} 
              breadcrumbsCurrent={"Přehled"} 
            />
            <div className="page-content">
              <Row className="page-row">
                <Col xs={12} md={12} lg={7}>
                  <main>                                     
                    <h3 className="first-heading">Pro studium</h3>
                    <ul>
                      <li>
                        Černými šipkami vlevo/vpravo se lze pohybovat v příkladu důkazu o krok zpět/vpřed. Aktuální krok z celkového počtu kroků zobrazuje ukazadlo mezi šipkami.
                      </li>                     
                      <li>
                        V průběhu více-krokových animací je aktivní tlačítko "šipky zopakovat" v pravé části panelu. Ta slouží k okamžitému <b>zopakování animace</b> od začátku.
                      </li>
                      <li>
                        Otáčením kolečka myši na plátně <i>(aktuálně deaktivováno)</i> či klikáním na tlačítka + a - v pravém dolním rohu plátna lze <b>přibližovat/oddalovat</b> pohled kamery.
                      </li>
                      <li>
                        Zelenými šipkami v levém dolním rohu plátna lze vertikálně a horizontálně přesunovat kameru po plátně.
                      </li>
                      <li>
                        Tlačítko roztahovaného obdélníku v pravém dolním rohu plátna slouží k <b>vycentrování grafu</b> na střed plátna a <b>resetování oddálení kamery</b> tak, aby byl komfortně zobrazen celý aktuální obsah plátna.
                      </li>
                    </ul>
                    <h3>Pro výuku</h3>
                    <ul>
                      <li>
                        Tlačítko štětce slouží k volnému <b>kreslení přes plátno</b>. Po aktivaci kreslení jsou zpřístupněny k výběru další kreslící nástroje - čára a kruh. Opětovným stistknutím tlačítka štětce je kreslení deaktivováno a kresba vymazána.
                      </li>
                      <li>
                        Pro názornost lze přes tlačítko "Upravit" v horní části plátna <b>přidávat vrcholy</b> a <b>propojovat je hranami.</b>
                      </li>
                      <li>
                        Po kliknutí na vrchol či hranu je prvek označen a lze je tlačítkem "Smazat vybrané" v horní nabídce plátna <b>odebrat</b>.
                      </li>
                      
                      <li>
                        Dlouhým podržením levého tlačítka myši či klikáním při držení levého tlačítka CTRL nad vrcholem či hranou lze <b>označit více prvků zároveň</b>.
                      </li>
                    </ul>
                  </main>
                </Col>
                <Col xs={12} md={12} lg={5}>
                  <aside>
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                      <div>
                        <ListGroup>
                          <ListGroupItem bsStyle="success">Důkazy přímo</ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad20v2"}
                            to={process.env.PUBLIC_URL + "/priklad20v2"}
                          >
                            Příklad 20
                          </ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad26v2"}
                            to={process.env.PUBLIC_URL + "/priklad26v2"}
                          >
                            Příklad 26 (verze 2)
                          </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="warning">Důkazy nepřímo</ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="danger">
                            Důkazy sporem
                          </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="info">Ostatní</ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad17a"}
                            to={process.env.PUBLIC_URL + "/priklad17a"}
                          >
                            Příklad 17 a) (verze 1)
                          </ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad17av2"}
                            to={process.env.PUBLIC_URL + "/priklad17av2"}
                          >
                            Příklad 17 a) (verze 2)
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </BrowserRouter>
                  </aside>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
