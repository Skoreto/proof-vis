import React from 'react';
import ClaimPanel from '../../../UI/ProofWrapper/ClaimPanel/ClaimPanel';
import VisualTextRow from '../../../UI/ProofWrapper/VisualTextRow/VisualTextRow';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Důkaz 5';
const breadcrumbsCurrent = 'Důkazy nepřímo';
const stepSum = 14;

const claimPanel = (
  <ClaimPanel>
    Dokažte nepřímo: <cite><q> <MN>\forall G=(V,E)</MN>: Jestliže graf <MN>G</MN> je strom, pak graf <MN>G</MN> je souvislý a každá jeho hrana je most.</q></cite>
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: 'proofStepPanel1',
    activeForSteps: [1],
    content:
      <p>
        Dokazujeme-li nepřímo, snažíme se přímou metodou dokázat tvrzení <MN>\neg B \Rightarrow \neg A</MN>, které je dle zásad výrokové logiky ekvivalentní s původním tvrzením.
        <br /><br />
        Původní tvrzení odpovídá implikaci ve tvaru <MN>A \Rightarrow B</MN>.
      </p>
  },
  {
    name: 'proofStepPanel2',
    activeForSteps: [2, 3],
    content:
      <p>
        Vyznačíme v tvrzení jeho části, výroky <MN>A</MN> a <MN>B</MN>.
      </p>
  },
  {
    name: 'proofStepPanel3',
    activeForSteps: [4],
    content: <p>Sestavíme obměnu původního tvrzení.</p>
  },
  {
    name: 'proofStepPanel4',
    activeForSteps: [5, 6],
    content: <p>Určíme nová znění obou výroků.</p>
  },
  {
    name: 'proofStepPanel5',
    activeForSteps: [7],
    content:
      <p>
        Určíme celé znění obměny původního tvrzení.
        <br />
        <br />Přímou metodou tedy budeme dokazovat tvrzení: <cite><q>Jestliže graf <MN>G</MN> je nesouvislý nebo existuje hrana <MN>e</MN>, která není most v grafu <MN>G</MN>, pak graf <MN>G</MN> není strom.</q></cite>
        <br />
        <br />Výrok <MN>\neg B</MN> se navíc skládá ze dvou částí spojených disjunkcí (<MN>\vee</MN>), ve větě oddělených slovem <q>nebo</q>:
      </p>
  },
  {
    name: 'proofStepPanel6',
    activeForSteps: [8],
    content:
      <p>
        <b>1. část:</b> <cite><q>graf <MN>G</MN> je nesouvislý</q></cite>
        <br />
        <br />Jestliže graf <MN>G</MN> je nesouvislý, pak přímo z definice stromu platí, že není strom.
      </p>
  },
  {
    name: 'proofStepPanel7',
    activeForSteps: [9],
    content:
      <p>
        <b>2. část:</b> <cite><q>existuje hrana <MN>e</MN>, která není most v grafu <MN>G</MN></q></cite>
        <br />
        <br /> Příklad takového grafu zobrazuje vizualizace.
      </p>
  },
  {
    name: 'proofStepPanel8',
    activeForSteps: [10],
    content:
      <p>
        Z definice mostu víme, že jeho odebráním vznikne v grafu více komponent.
        <br />
        <br />Jestliže však v grafu <MN>G</MN> existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která <u>není</u> most, pak po jejím odebrání graf <MN>G-e</MN> nebude mít více komponent. Vrcholy <MN>x</MN> a <MN>y</MN> se tedy budou nacházet stále v jedné souvislé komponentě.
      </p>
  },
  {
    name: 'proofStepPanel9',
    activeForSteps: [11],
    content:
      <p>
        Protože komponenta je sama o sobě souvislý graf. Musí mezi každou dvojicí jejích vrcholů existovat cesta.
        <br />
        <br />Tudíž v grafu <MN>G-e</MN> musí nadále existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy hrany <MN>{'e=\\{x,y\\}'}</MN>.
      </p>
  },
  {
    name: 'proofStepPanel10',
    activeForSteps: [12],
    content:
      <p>
        Pak ale cesta <MN>{'P_{xy}'}</MN> musela existovat také v grafu <MN>G</MN>, protože graf <MN>G-e</MN> vznikl z grafu <MN>G</MN> pouze odebráním hrany <MN>e</MN>.
      </p>
  },
  {
    name: 'proofStepPanel11',
    activeForSteps: [13],
    content:
      <p>
        Z definice kružnice pak vyplývá, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou e tvoří kružnici v grafu <MN>G</MN>.
      </p>
  },
  {
    name: 'proofStepPanel12',
    activeForSteps: [14],
    content:
      <p>
        Protože graf <MN>G</MN> obsahuje kružnici, není podle definice stromu stromem.
      </p>
  },
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: <p>Tvar původního výroku.</p>
  },
  {
    id: 2,
    showForSteps: [2],
    content: <p>Znění výroku <MN>A</MN>.</p>
  },
  {
    id: 3,
    showForSteps: [3],
    content: <p>Znění výroku <MN>B</MN>.</p>
  },
  {
    id: 4,
    showForSteps: [4],
    content: <p>Tvar obměněného tvrzení.</p>
  },
  {
    id: 5,
    showForSteps: [5],
    content: <p>Znění negace výroku <MN>B</MN>.</p>
  },
  {
    id: 6,
    showForSteps: [6],
    content: <p>Znění negace výroku <MN>A</MN>.</p>
  },
  {
    id: 7,
    showForSteps: [7],
    content: <p>Znění celé obměny původního tvrzení.</p>
  },
  {
    id: 8,
    showForSteps: [8],
    content: <p>Příklad nesouvislého grafu <MN>G</MN>, který není strom.</p>
  },
  {
    id: 9,
    showForSteps: [9],
    content:
      <p>
        Příklad grafu <MN>G</MN>, kde existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která není most.
      </p>
  },
  {
    id: 10,
    showForSteps: [10],
    content:
      <p>
        Po odebrání hrany <MN>e</MN> zůstanou její vrcholy <MN>x</MN> a <MN>y</MN> stále v jedné souvislé komponentě.
      </p>
  },
  {
    id: 11,
    showForSteps: [11],
    content:
      <p>
        Po odebrání hrany <MN>e</MN> v grafu stále existuje také cesta mezi jejími vrcholy <MN>x</MN> a <MN>y</MN>.
      </p>
  },
  {
    id: 12,
    showForSteps: [12],
    content:
      <p>
        Cesta <MN>{'P_{xy}'}</MN> existovala také v grafu <MN>G</MN>.
      </p>
  },
  {
    id: 13,
    showForSteps: [13],
    content:
      <p>
        Cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>e</MN> tvoří kružnici v grafu <MN>G</MN>.
      </p>
  },
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [8],
    content:
      <p>
        DEFINICE STROMU (4.2)
        <br />Strom je <u>souvislý</u> graf, který neobsahuje kružnici.
      </p>
  },
  {
    id: 2,
    showForSteps: [10],
    content:
      <div>
        <p>
          DEFINICE MOSTU (1.11)
          <br />Nechť je dán graf <MN>G=(V,E)</MN>, vrchol <MN>v \in V</MN> a hrana <MN>e \in E</MN>.
        </p>
        <p>
          Hrana <MN>e</MN> je most grafu <MN>G</MN>, jestliže graf <MN>G-e</MN> má více komponent než graf <MN>G</MN>.
        </p>
      </div>
  },
  {
    id: 3,
    showForSteps: [11],
    content:
      <div>
        <p>
          DEFINICE SOUVISLÉHO GRAFU A KOMPONENTY GRAFU (1.9)
        </p>
        <p>
          <u>Souvislý graf</u> je graf, ve kterém mezi každými jeho dvěma vrcholy existuje cesta.
        </p>
        <p>
          <u>Komponenta grafu</u> je každý jeho maximální souvislý podgraf, tj. souvislý podgraf, který není podgrafem žádného jiného souvislého grafu.
        </p>
      </div>
  },
  {
    id: 4,
    showForSteps: [13],
    content:
      <p>
        KRUŽNICE (Definice 1.8)
        <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
      </p>
  },
  {
    id: 5,
    showForSteps: [14],
    content:
      <p>
        DEFINICE STROMU (4.2)
        <br />Strom je souvislý graf, který <u>neobsahuje kružnici</u>.
      </p>
  },
];

const visualTextRows = [
  {
    id: 0,
    showForSteps: [0],
    content: <div></div> 
  },
  {
    id: 1,
    showForSteps: [1, 2, 3, 4, 5, 6, 7],
    content:
      <VisualTextRow left={270} top={10}>
        <MN classes={'t-green'}>A</MN><MN>\Rightarrow</MN><MN classes={'t-red'}>B</MN>
      </VisualTextRow>
  },
  {
    id: 2,
    showForSteps: [2, 3, 4, 5, 6, 7],
    content:
      <VisualTextRow left={50} top={50} classes={'t-green'}>
        <MN>A:</MN> graf <MN>G</MN> je strom
      </VisualTextRow>
  },
  {
    id: 3,
    showForSteps: [3, 4, 5, 6, 7],
    content:
      <VisualTextRow left={50} top={90} classes={'t-red'}>
        <MN>B:</MN> graf <MN>G</MN> je souvislý a každá jeho hrana je most
      </VisualTextRow>
  },
  {
    id: 4,
    showForSteps: [4, 5, 6, 7],
    content:
      <VisualTextRow left={170} top={140}>
        <MN>(</MN><MN classes={'t-green'}>A</MN><MN>\Rightarrow</MN><MN classes={'t-red'}>B</MN><MN>)</MN><MN>\Longleftrightarrow</MN><MN>(</MN><MN classes={'t-red'}>\neg B</MN><MN>\Rightarrow</MN><MN classes={'t-green'}>\neg A</MN><MN>)</MN>
      </VisualTextRow>
  },
  {
    id: 5,
    showForSteps: [5, 6, 7],
    content:
      <VisualTextRow left={50} top={190} width={550} classes={'t-red'}>
        <MN>\neg B:</MN> graf <MN>G</MN> je nesouvislý nebo existuje hrana <MN>e</MN>, která není most
      </VisualTextRow>
  },
  {
    id: 6,
    showForSteps: [6, 7],
    content:
      <VisualTextRow left={50} top={260} classes={'t-green'}>
        <MN>\neg A:</MN> graf <MN>G</MN> není strom
      </VisualTextRow>
  },
  {
    id: 7,
    showForSteps: [7],
    content:
      <VisualTextRow left={50} top={310} width={550}>
        Jestliže <span className={'t-red'}>graf <MN>G</MN> je nesouvislý nebo existuje hrana <MN>e</MN>, která není most v grafu <MN>G</MN></span>, pak <span className={'t-green'}>graf <MN>G</MN> není strom</span>.
      </VisualTextRow>
  },
];

const cameraPosition0 = {
  position: { x: 0, y: 0 }, 
  scale: 1.1,
  animation: { duration: 1500, easingFunction: 'easeInOutQuad' },
};

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
  visualTextRows: visualTextRows,
};

export const cameraPositions = [cameraPosition0];
