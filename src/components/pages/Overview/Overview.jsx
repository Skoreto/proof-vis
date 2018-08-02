import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../customMainTheme.css';
import PageHeading from "../../../UI/PageHeading/PageHeader";

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
            <div className="page-content overview">
              <Row className="page-row">
                <Col xs={12} md={12} lg={7}>
                  <main>                                     
                    <h3 className="first-heading">Pro studium</h3>
                    <ul>
                      <li>
                        Černými šipkami vlevo <FontAwesomeIcon icon="chevron-left" /> a vpravo <FontAwesomeIcon icon="chevron-right" /> se lze pohybovat v příkladu důkazu o krok zpět či vpřed. Aktuální krok z celkového počtu kroků zobrazuje ukazadlo mezi šipkami.
                      </li>                     
                      <li>
                        V průběhu více-krokových animací je aktivní tlačítko "šipky zopakovat" <FontAwesomeIcon icon="redo-alt" /> v pravé části panelu. Ta slouží k okamžitému <b>zopakování animace</b> od začátku.
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
                        Tlačítko štětce <FontAwesomeIcon icon="paint-brush" /> slouží k volnému <b>kreslení přes plátno</b> důkazu. Po aktivaci kreslení jsou zpřístupněny k výběru další kreslící nástroje - čára <FontAwesomeIcon icon="minus" /> a kruh <FontAwesomeIcon icon="circle-notch" />. Opětovným stistknutím tlačítka štětce je kreslení deaktivováno a kresba vymazána.
                      </li>
                      <li>
                        Dlouhým podržením levého tlačítka myši či klikáním při držení levého tlačítka CTRL nad vrcholem či hranou lze <b>označit více prvků zároveň</b>. To lze využít k vyznačování prvků grafu, ale také k jejich jednotnému přesunu.
                      </li>
                      <li>
                        Pro účely výuky byly do aplikace přidány <b>prázdná plátna</b>, ve kterých může vyučující sám sestrojovat grafy. Z hlavní nabídky je dostupné velké plátno, roztažené přes celou obrazovku. Z panelu ovládání důkazu lze tlačítkem <FontAwesomeIcon icon="edit" /> zobrazit menší pomocné plátno, které lze snadněji kombinovat s výkladem k danému důkazu.
                      </li>
                        <ul>
                          <li>
                            Tlačítky "Přidat vrchol" a "Přidat hranu" v horní části plátna je možné <b>přidávat vrcholy</b> a <b>propojovat je hranami.</b>
                          </li>
                          <li>
                            Po kliknutí na vrchol či hranu je prvek označen a lze je tlačítkem "Smazat vybrané" v horní nabídce plátna <b>odebrat</b>.
                          </li>
                          <li>
                            Po kliknutí na vrchol je zobrazeno také tlačítko "Upravit vrchol" po jehož stistkuní se zobrazí dialog, ve kterém lze <b>změnit text popisku vrcholu, barvu textu a barvu vrcholu</b>.
                          </li>
                          <li>
                            Tlačítko "Upravit hranu" umožní přetáhnout hranu tak, aby propojovala jiné než původní vrcholy.
                          </li> 
                        </ul>     
                    </ul>
                  </main>
                </Col>
                <Col xs={12} md={12} lg={5}>
                  <aside>
                      <div>
                        <ListGroup>
                          <ListGroupItem bsStyle="success">Důkazy přímo</ListGroupItem>
                          <LinkContainer to="/priklad20">
                            <ListGroupItem>Příklad 20</ListGroupItem>
                          </LinkContainer>
                          <LinkContainer to="/priklad23">
                            <ListGroupItem>Příklad 23</ListGroupItem>
                          </LinkContainer>
                          <LinkContainer to="/priklad26v2">  
                            <ListGroupItem>Příklad 26</ListGroupItem>
                          </LinkContainer>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="warning">Důkazy nepřímo</ListGroupItem>
                          <LinkContainer to="/priklad21">
                            <ListGroupItem>Příklad 21</ListGroupItem>
                          </LinkContainer>
                          <LinkContainer to="/priklad24">
                            <ListGroupItem>Příklad 24</ListGroupItem>
                          </LinkContainer>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="danger">Důkazy sporem</ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="info">Protipříklady</ListGroupItem>
                          <LinkContainer to="/priklad17a">
                            <ListGroupItem>Příklad 17 a) (verze 1)</ListGroupItem>
                          </LinkContainer>
                          <LinkContainer to="/priklad17av2">
                            <ListGroupItem>Příklad 17 a) (verze 2)</ListGroupItem>
                          </LinkContainer>
                        </ListGroup>
                      </div>
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
