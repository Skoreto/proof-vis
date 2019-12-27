import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../customMainTheme.scss";
import PageHeading from "../../../UI/PageHeading/PageHeader";

class Help extends React.Component {
  render() {
    return (
      <div>
        <div className={"container"}>
          <div className="page-wrapper">
            <PageHeading headingTitle={"Nápověda a informace o aplikaci"} />
            <div className="page-content help">
              <Row className="page-row">
                <Col xs={12} md={12} lg={12}>
                  <main>
                    <h2 className="first-heading">
                      Požadavky na provoz aplikace
                    </h2>
                    <p>
                      Vývoj aplikace byl cílen na použití v nových verzích
                      majoritních zástupců webových a desktopových a mobilních
                      prohlížečů. Z desktopových variant jsou doporučeny
                      prohlížeče Google Chrome a Mozilla Firefox, ale podporován
                      je také prohlížeč Opera, Microsoft Edge a Safari. Na
                      mobilních zařízeních je doporučen prohlížeč Google Chrome.
                      Pro pohodlné používání aplikace by úhlopříčka displeje
                      zařízení měla dosahovat alespoň rozměrů tabletu s
                      rozlišením alespoň 1024x768 pixelů. Uživatelské rozhraní
                      se však přizpůsobí i displejům chytrých telefonů.
                    </p>

                    <h2>Orientace v aplikaci</h2>
                    <p>
                      V horní části stránek je umístěna horizontální navigace
                      obsahující rozbalitelné nabídky s odkazy na stránky
                      důkazů. Důkazy jsou rozděleny do nabídek podle metody
                      dokazování, která v nich je využita. Navigace je dostupná
                      z každé stránky a je proto možné ihned přejít na kterýkoli
                      z příkladů. V navigaci se dále nachází odkaz na stránku s
                      velkým plátnem pro tvorbu vlastního grafu a odkaz na
                      stránku s nápovědou. Přechod na úvodní stranu je proveden
                      po kliknutí na logo s názvem aplikace.
                    </p>

                    <h2>Popis hlavních prvků stránky důkazu</h2>
                    <p>
                      Rozvržení těla každé stránky důkazu zahrnuje v horní části
                      název příkladu a drobečkovou navigaci pro usnadnění
                      orientaci v aplikaci. Dále široký panel se zněním
                      dokazovaného tvrzení, levý postranní panel s kroky
                      prováděnými v průběhu dokazování, vizualizační plátno s
                      popisem aktuální vizualizace, panel ovládání a v případě
                      potřeby šedý panel definic, který slouží k připomenutí
                      znění důležitých definic použitých při dokazování.
                    </p>

                    <h2>Ovládání vizualizačního plátna</h2>
                    <p>
                      Součástí plátna jsou zelená tlačítka pro ovládání kamery.
                      Šipky v levém dolním rohu slouží k posunu po ose x a y.
                      Tlačítka + a – v pravém dolním rohu umožňují pohled kamery
                      přiblížit a oddálit, což lze provést také otáčením kolečka
                      myši. Tlačítko roztahovaného čtverce vycentruje graf na
                      střed a resetuje oddálení kamery tak, aby byl komfortně
                      zobrazen celý aktuální obsah plátna.
                    </p>
                    <p>
                      S grafem na plátnu je možné interagovat. Vrcholy a hrany
                      reagují na přejetí kurzorem myši a stisknutím levého
                      tlačítka myši je možné je zvýrazňovat. Jejich zvýraznění
                      zůstane permanentní, pokud je levé tlačítko podrženo déle
                      než jednu sekundu nebo pokud je při klikání podržena
                      klávesa CTRL.
                    </p>
                    <p>V daném kroku lze vrcholy přesunout na jinou pozici.</p>

                    <h2>Ovládání vizualizačního plátna</h2>
                    <p>
                      V šedém panelu ovládání se nacházejí tlačítka pro ovládání
                      průběhu důkazu a pomocných nástrojů pro výuku.
                    </p>
                    <Image src="assets/image/controls_panel.png" thumbnail />
                    <p>
                      Černými šipkami vlevo{" "}
                      <FontAwesomeIcon icon="chevron-left" /> a vpravo{" "}
                      <FontAwesomeIcon icon="chevron-right" /> se lze pohybovat
                      v důkazu o krok zpět či vpřed. Aktuální krok z celkového
                      počtu kroků zobrazuje ukazadlo mezi šipkami. V průběhu
                      vícekrokových animací je aktivní tlačítko „šipky
                      zopakovat“ <FontAwesomeIcon icon="redo-alt" />, které
                      slouží k okamžitému zopakování animace od začátku.
                    </p>

                    <h2>Kreslící nástroje</h2>
                    <p>
                      Panel ovládání dále obsahuje skupinu tlačítek pro kreslení
                      přes plátno. Po aktivaci kreslení prvním tlačítkem
                      „editace“ <FontAwesomeIcon icon="edit" /> je kurzor změněn
                      na kříž a jsou zpřístupněny tlačítka pro výběr kreslícího
                      nástroje. Ve výchozím stavu je aktivní nástroj „tužka“{" "}
                      <FontAwesomeIcon icon="pencil-alt" />, který umožní
                      kreslit přes plátno volným tahem. Další dva nástroje
                      umožní kreslení přímek <FontAwesomeIcon icon="minus" /> a
                      kružnic <FontAwesomeIcon icon="circle-notch" /> například
                      pro naznačení vrcholů a hran grafu. Deaktivací kreslení
                      opětovným stisknutím tlačítka „editace“{" "}
                      <FontAwesomeIcon icon="edit" /> je kresba vymazána.
                    </p>

                    <h2>Tvůrčí plátna</h2>
                    <p>
                      Pro účely výuky byly dále do aplikace přidány prázdná
                      tvůrčí plátna, ve kterých může vyučující sám sestrojovat
                      grafy přidáváním vrcholů a jejich propojováním hranami. Na
                      stránku velkého plátna lze přejít tlačítkem „PLÁTNO“ v
                      hlavní navigaci.
                    </p>
                    <p>
                      Na stránce každého důkazu je v panelu ovládání dostupné
                      tlačítko pro zobrazení malého pomocného plátna{" "}
                      <FontAwesomeIcon icon="chalkboard-teacher" />. Plátno lze
                      volně přesouvat v prostoru celé stránky uchopením za horní
                      panel a po zavření dialogu křížkem v pravém horním rohu je
                      jeho obsah vymazán.
                    </p>
                    <Image src="assets/image/drawing_dialog_1.png" thumbnail />
                    <p>
                      Pro tvorbu a úpravy grafu slouží tlačítka z nabídky v
                      horní části plátna. Po jejich zvolení se v nabídce zobrazí
                      nápověda k provedení požadovaného úkonu. Po označení
                      vrcholu je v nabídce zobrazeno také tlačítko „Upravit
                      vrchol“ po jehož stisknutí se zobrazí dialog z obrázku 19,
                      ve kterém lze změnit text popisu vrcholu, barvu textu a
                      barvu vrcholu. Obdobně je možné upravit také textový
                      popis, barvu a tloušťku hrany. Nejprve je možné propojit
                      hranu s jiným vrcholem, poté se zobrazí formulář pro
                      úpravu zmíněných atributů.
                    </p>
                    <Image
                      src="assets/image/drawing_dialog_edit.png"
                      thumbnail
                    />

                    <h2>Řešení problémů</h2>
                    <p>
                      V případě výskytu chyby či špatného vykreslení některého z
                      prvků je doporučeno přejít na úvodní stránku a obnovit ji
                      například klávesou F5.
                    </p>
                    <p>
                      Pokud jste nalezli bug nebo chybu v postupu některého z
                      důkazů, informujte, prosím, o této skutečnosti autora na
                      email TomSkorepa@gmail.com.
                    </p>
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

export default Help;
