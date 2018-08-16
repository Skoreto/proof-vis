import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PageHeading from "../../../UI/PageHeading/PageHeader";
import '../../../customMainTheme.css';

class Overview extends React.Component {
  render() {
    return (
      <div>
        <div className={"container"}>
          <div className="page-wrapper">
            <PageHeading 
              headingTitle={"O aplikaci ProofVis"}
            />
            <div className="page-content overview">
              <Row className="page-row">
                <main>     
                  <p>
                    Tato aplikace vznikla jako součást diplomové práce na&nbsp;téma <q>Vizuální podpora výuky předmětů zabývajících se teorií grafů a&nbsp;grafovými algoritmy</q> v&nbsp;letech&nbsp;2016&#8212;2018 na&nbsp;Fakultě informatiky a managementu Univerzity Hradec Králové.
                  </p>
                  <p>
                    Aplikace slouží jako podpora výuky neformálních metod dokazování na důkazech z oblasti teorie grafů. Důkazy v ní prezentované jsou zpracovány formou pomyslného přehrávače, který umožňuje studentovi po krocích procházet postup konstrukce důkazu. Díky tomu má student při procházení důkazu možnost kdykoli se pozastavit či vrátit, aby si mohl předchozí provedené kroky znovu ujasnit. Navíc jsou důkazy doprovázeny názornými vizualizacemi, které mají za&nbsp;cíl usnadnit pochopení jejich konstrukce. 
                  </p>
                  <p>
                    Z těchto důvodů je aplikace vhodná pro samostudium, ale disponuje také řadou nástrojů využitelných ve vyučování, jako jsou kreslící nástroje a&nbsp;prázdná tvůrčí plátna, ve kterých může vyučující konstruovat vlastní grafy a podpořit tak svůj dodatečný výklad.
                  </p>
                  <p>
                    Uživatelskou příručku a další informace o aplikaci lze nalézt na stránce <LinkContainer to="/napoveda"><a>Nápověda</a></LinkContainer>.
                  </p>
                  
                  <h2>Přehled údajů</h2>
                  <Table condensed>
                    <tbody>
                      <tr>
                        <td>Název práce:</td>
                        <td>Vizuální podpora výuky předmětů zabývajících se teorií grafů a grafovými algoritmy</td>
                      </tr>
                      <tr>
                        <td>Autor:</td>
                        <td>Tomáš Skořepa</td>
                      </tr>
                      <tr>
                        <td>Obor:</td>
                        <td>Aplikovaná informatika</td>
                      </tr>
                      <tr>
                        <td>Vedoucí práce:</td>
                        <td>RNDr. Andrea Ševčíková</td>
                      </tr>
                      <tr>
                        <td>Kontakt:</td>
                        <td>TomSkorepa@gmail.com</td>
                      </tr>
                    </tbody>
                  </Table>
                  
                  <h3>Zdroje</h3>
                  <p>
                    V průběhu dokazování jsou využívány znění definic a vět z teorie grafů ze skript paní profesorky Evy Milkové, jakožto hlavní doporučené literatury studentům Fakulty informatiky a managementu pro studium předmětů DIMA a KDIMA.
                  </p>
                  <p>
                    MILKOVÁ, Eva. Teorie grafů a grafové algoritmy. Hradec Králové: Gaudeamus, 2013. ISBN 9788074352676.
                  </p>
                  
                </main>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
