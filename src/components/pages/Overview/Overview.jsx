import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import '../../../customMainTheme.css';
import PageHeading from "../../../components/UI/PageHeading/PageHeading";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircleNotch';
import faRedoAlt from '@fortawesome/fontawesome-free-solid/faRedoAlt';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';

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
                        Černými šipkami vlevo <FontAwesomeIcon icon={faChevronLeft} /> a vpravo <FontAwesomeIcon icon={faChevronRight} /> se lze pohybovat v příkladu důkazu o krok zpět či vpřed. Aktuální krok z celkového počtu kroků zobrazuje ukazadlo mezi šipkami.
                      </li>                     
                      <li>
                        V průběhu více-krokových animací je aktivní tlačítko "šipky zopakovat" <FontAwesomeIcon icon={faRedoAlt} /> v pravé části panelu. Ta slouží k okamžitému <b>zopakování animace</b> od začátku.
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
                        Tlačítko štětce <FontAwesomeIcon icon={faPaintBrush} /> slouží k volnému <b>kreslení přes plátno</b> důkazu. Po aktivaci kreslení jsou zpřístupněny k výběru další kreslící nástroje - čára <FontAwesomeIcon icon={faMinus} /> a kruh <FontAwesomeIcon icon={faCircle} />. Opětovným stistknutím tlačítka štětce je kreslení deaktivováno a kresba vymazána.
                      </li>
                      <li>
                        Dlouhým podržením levého tlačítka myši či klikáním při držení levého tlačítka CTRL nad vrcholem či hranou lze <b>označit více prvků zároveň</b>. To lze využít k vyznačování prvků grafu, ale také k jejich jednotnému přesunu.
                      </li>
                      <li>
                        Pro účely výuky byly do aplikace přidány <b>prázdná plátna</b>, ve kterých může vyučující sám sestrojovat grafy. Z hlavní nabídky je dostupné velké plátno, roztažené přes celou obrazovku. Z panelu ovládání důkazu lze tlačítkem <FontAwesomeIcon icon={faEdit} /> zobrazit menší pomocné plátno, které lze snadněji kombinovat s výkladem k danému důkazu.
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
                            href={process.env.PUBLIC_URL + "/priklad23"}
                            to={process.env.PUBLIC_URL + "/priklad23"}
                          >
                            Příklad 23
                          </ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad26v2"}
                            to={process.env.PUBLIC_URL + "/priklad26v2"}
                          >
                            Příklad 26
                          </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="warning">Důkazy nepřímo</ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad21"}
                            to={process.env.PUBLIC_URL + "/priklad21"}
                          >
                            Příklad 21
                          </ListGroupItem>
                          <ListGroupItem 
                            href={process.env.PUBLIC_URL + "/priklad24"}
                            to={process.env.PUBLIC_URL + "/priklad24"}
                          >
                            Příklad 24
                          </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="danger">
                            Důkazy sporem
                          </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                          <ListGroupItem bsStyle="info">Protipříklady</ListGroupItem>
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
