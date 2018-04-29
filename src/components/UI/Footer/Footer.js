import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../../../customMainTheme.css';
import './Footer.css'

const Footer = () => (
    <footer role="contentinfo" className="footer">
        <div className="footer-content">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-3 col-sm-4">
                        <div className="footer-col-inner">
                            <h3>O webu</h3>
                            <ul>
                                <li><a href="#">Mapa webu</a></li>
                                <li><a href="#">Oliva</a></li>
                                <li><a href="#">Prohlášení o webu</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col col-md-3 col-sm-4">
                        <div className="footer-col-inner">
                            <h3>Interní odkazy</h3>
                            <ul>
                                <li><a href="#">Důkazy</a></li>
                                <li><a href="#">Tvrzení</a></li>
                                <li><a href="#">Věty</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col col-md-3 col-sm-4">
                        <div className="footer-col-inner">
                            <h3>Doplňkové odkazy</h3>
                            <ul>
                                <li><a href="#">Přehled použitých vět</a></li>
                                <li><a href="http://web.ift.uib.no/Teori/KURS/WRK/TeX/symALL.html">Zápis
                                    LaTeX</a></li>
                                <li><a href="http://edu.uhk.cz">Server EDU UHK</a></li>
                                <li><a href="https://www.facebook.com/imit.uhk">IMIT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col col-md-3 col-sm-12 contact">
                        <div className="footer-col-inner">
                            <h3>Kontakt</h3>
                            <div className="row">
                                <div className="adr clearfix col-md-12 col-sm-4">
                                    <span className="pull-left">
                                        Univerzita Hradec Králové<br/>
                                        Rokitanského 62<br/>
                                        500 03 Hradec Králové III<br/>
                                        Česká republika
                                    </span>
                                </div>
                                <span className="col-md-12 col-sm-4">+420 732 983 737</span>
                                <span className="col-md-12 col-sm-4"><a href="mailto:">
                                    tomas.skorepa@uhk.cz</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="container">
                <div className="row">
                    <small className="copyright col-md-6 col-sm-12 col-xs-12">2017 Vizualizace důkazů |
                        Školní projekt
                        <a href="mailto:tomas.skorepa@uhk.cz">Tomáš Skořepa</a></small>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;