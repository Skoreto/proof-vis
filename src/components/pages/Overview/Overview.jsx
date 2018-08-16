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
            />
            <div className="page-content overview">
              <Row className="page-row">
                <Col xs={12} md={12} lg={12}>
                  <main>     
                  <h3 className="first-heading">Požadavky na provoz aplikace</h3>
                    <p>
                    Vývoj aplikace byl cílen na použití v nových verzích majoritních zástupců webových a desktopových a mobilních prohlížečů. Z desktopových variant jsou doporučeny prohlížeče Google Chrome a Mozilla Firefox, ale podporován je také prohlížeč Opera, Microsoft Edge a Safari. Na mobilních zařízeních je doporučen prohlížeč Google Chrome. Pro pohodlné používání aplikace by úhlopříčka displeje zařízení měla dosahovat alespoň rozměrů tabletu s rozlišením alespoň 1024x768 pixelů. Uživatelské rozhraní se však přizpůsobí i displejům chytrých telefonů.
                    </p>                                
                    
                    
                    <h3>Zdroje</h3>
                    V průběhu dokazovaná jsou využívány znění definic a vět ze skript Milkové, jakožto hlavního materiálu dooporučeného pro studium předmětů DIMA a KDIMA
                  </main>
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
