import React from 'react';
import ClaimPanel from '../../../UI/ExerciseWrapper/ClaimPanel/ClaimPanel';
import VisualTextRow from '../../../UI/ExerciseWrapper/VisualTextRow/VisualTextRow';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Důkaz 6';
const breadcrumbsCurrent = 'Důkazy sporem';
const stepSum = 17;

const claimPanel = (
  <ClaimPanel>
    Dokažte sporem tvrzení: <cite><q> <MN>\forall G=(V,E):</MN> Jestliže hrana <MN>e</MN> je most v <MN>G</MN>, pak v <MN>G</MN> neexistuje kružnice obsahující hranu <MN>e</MN>.</q></cite>
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: 'proofStepPanel1',
    activeForSteps: [1],
    content:
      <p>
        Při dokazování sporem vycházíme z negace původního tvrzení.
        <br /><br />
        Původní tvrzení odpovídá implikaci ve tvaru <MN>\forall A \Rightarrow B</MN>.
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
    content: <p>Sestavíme negaci původního tvrzení.</p>
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
        Určíme celé znění negace původního tvrzení.
        <br /><br />
        Pro spor tedy předpokládejme tvrzení: <cite><q>Existuje graf G, ve kterém hrana <MN>e</MN> je most a zároveň v grafu <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>.</q></cite>    
      </p>
  },
  {
    name: 'proofStepPanel6',
    activeForSteps: [8],
    content:
      <p>
        Pokud v <MN>G</MN> existuje kružnice <MN>C</MN> obsahující hranu <MN>{'e=\\{x,y\\}'}</MN>, pak v grafu <MN>G</MN> existují minimálně 2 <MN>x-y</MN> cesty.
      </p>
  },
  {
    name: 'proofStepPanel7',
    activeForSteps: [9],
    content:
      <p>
        <b>1.</b> Cesta <MN>{"P_{x,y}=e=\\{x,y\\}"}</MN> (samotná hrana <MN>e</MN>)
      </p>
  },
  {
    name: 'proofStepPanel8',
    activeForSteps: [10],
    content:
      <p>
        <b>2.</b> Cesta <MN>{"P'_{x,y}=C-e=(x,v_1,v_2,...,v_3,y)"}</MN> (kružnice bez hrany <MN>e</MN>)
      </p>
  },
  {
    name: 'proofStepPanel9',
    activeForSteps: [11],
    content:
      <p>
        Nyní ukážeme pro <MN>\forall u,v \in V(G):</MN> jestliže existuje <MN>u-v</MN> cesta <MN>{"P_{u,v}"}</MN> v grafu <MN>G</MN> <MN>\Rightarrow</MN> pak existuje <MN>u-v</MN> cesta <MN>{"P'_{u,v}"}</MN> také v grafu <MN>G-e</MN>:
        <br /><br />
        Pro demonstraci zvolíme libovoně vrcholy <MN>u</MN> a <MN>v</MN>.
      </p>
  },
  {
    name: 'proofStepPanel10',
    activeForSteps: [12],
    content:
      <p>
        <b>1.</b> Pokud v grafu <MN>G</MN> cesta <MN>{"P_{u,v}"}</MN> neobsahuje hranu <MN>e</MN>, pak platí <MN>{"P'_{u,v}=P_{u,v}"}</MN>. Tedy že <MN>u-v</MN> cesta v grafu <MN>G</MN> se v grafu <MN>G-e</MN> nezmění.
      </p>
  },
  {
    name: 'proofStepPanel11',
    activeForSteps: [13],
    content:
      <p>
        <b>2.</b> Pokud v grafu <MN>G</MN> cesta <MN>{"P_{u,v}"}</MN> obsahuje hranu <MN>e</MN>, ...
      </p>
  },
  {
    name: 'proofStepPanel12',
    activeForSteps: [14],
    content:
      <p>
        pak hranu <MN>e</MN> v alternativní cestě <MN>{"P'_{u,v}"}</MN> nahradíme cestou <MN>{"P'_{x,y}"}</MN>. Tedy cestou mezi vrcholy <MN>x</MN> a <MN>y</MN> po kružnici <MN>C</MN> (z kroku 10).
        <br /><br />
        Tím vznikne sled mezi vrcholy <MN>u</MN> a <MN>v</MN> v grafu <MN>G-e</MN>.
        <br /><br />
        Formálně zapsáno: <MN>{"(P_{u,v} - e) \\cup P'_{x,y} = (P_{u,v} - e) \\cup (C-e)"}</MN>
      </p>
  },
  {
    name: 'proofStepPanel13',
    activeForSteps: [15],
    content:
      <p>
        <MN>\Rightarrow</MN> Pak existuje také cesta mezi vrcholy <MN>u</MN> a <MN>v</MN> v grafu <MN>G-e</MN>. (Každý úsek, kde se vracíme do stejného vrcholu, můžeme totiž vynechat.)
      </p>
  },
  {
    name: 'proofStepPanel14',
    activeForSteps: [16],
    content:
      <p>
        <MN>\Rightarrow</MN> Tudíž je počet komponent grafu <MN>G-e</MN> stejný jako počet komponent grafu <MN>G</MN>.
      </p>
  },
  {
    name: 'proofStepPanel15',
    activeForSteps: [17],
    content:
      <p>
        <MN>\Rightarrow</MN> Podle definice mostu tedy hrana <MN>e</MN> není most, což je spor s předpokladem, a proto platí původní tvrzení. <MN>\square</MN>
      </p>
  },
];

const descriptionPanels = [
  {
    id: 0,
    showForSteps: [0, 4, 9, 17],
    content: <p></p>
  },
  {
    id: 1,
    showForSteps: [1],
    content: <p>Tvar implikace původního tvrzení.</p>
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
    id: 5,
    showForSteps: [5],
    content: <p>Znění výroku <MN>A</MN> zůstává nezměněné.</p>
  },
  {
    id: 6,
    showForSteps: [6],
    content: <p>Znění negace výroku <MN>B</MN>.</p>
  },
  {
    id: 7,
    showForSteps: [7],
    content: <p>Celé znění negace původního tvrzení.</p>
  },
  {
    id: 8,
    showForSteps: [8],
    content: 
      <p>
        Příklad grafu <MN>G</MN>, kde existuje kružnice <MN>C</MN>, a zvolení libovolné hrany <MN>e</MN>, která leží na kružnici <MN>C</MN>.
      </p>
  },
  {
    id: 9,
    showForSteps: [9],
    content: <p>Cesta z vrcholu <MN>x</MN> do vrcholu <MN>y</MN> přímo přes hranu <MN>e</MN>.</p>
  },
  {
    id: 10,
    showForSteps: [10],
    content: <p>Cesta z vrcholu <MN>x</MN> do vrcholu <MN>y</MN> přes kružnici <MN>C</MN>.</p>
  },
  {
    id: 11,
    showForSteps: [11],
    content: <p>Zvolení libovolných vrcholů <MN>u</MN> a <MN>v</MN>.</p>
  },
  {
    id: 12,
    showForSteps: [12],
    content: 
      <p>
        Cesta mezi vrcholy <MN>u</MN> a <MN>v</MN> bez hrany <MN>e</MN> je v grafu <MN>G-e</MN> shodná s cestou v grafu <MN>G</MN>.
      </p>
  },
  {
    id: 13,
    showForSteps: [13],
    content: 
      <p>
        V grafu <MN>G</MN> však může existovat cesta <MN>{"P_{u,v}"}</MN> vedoucí přes hranu <MN>e</MN>.
      </p>
  },
  {
    id: 14,
    showForSteps: [14],
    content: 
      <p>
        Hranu <MN>e</MN> můžeme v grafu <MN>G-e</MN> nahradit cestou po kružnici <MN>C</MN>.
        <br /> Tím vznikne sled mezi vrcholy <MN>u</MN> a <MN>v</MN>.
      </p>
  },
  {
    id: 15,
    showForSteps: [15],
    content: 
      <p>
        Úseky mezi dvěma výskyty stejného vrcholu vynecháme a zbyde nám cesta mezi vrcholy <MN>u</MN> a <MN>v</MN> existující i v grafu <MN>G-e</MN>.
      </p>
  },
  {
    id: 16,
    showForSteps: [16],
    content: <p>Počet komponent po odebrání hrany <MN>e</MN> zůstane stejný.</p>
  },
  {
    id: 17,
    showForSteps: [17],
    content: <p>Hrana <MN>e</MN> ležící na kružnici totiž nemohla být most.</p>
  },
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [15],
    content:
      <div>
        <p>
          TVRZENÍ 1.1 Implikace II)
          <br /><MN>\forall G=(V,E)</MN>: Jestliže v grafu <MN>G</MN> existuje sled z vrcholu <MN>v</MN> do vrcholu <MN>w</MN> <MN>\Rightarrow</MN> pak v grafu <MN>G</MN> existuje cesta z vrcholu <MN>v</MN> do vrcholu <MN>w</MN>.
        </p>
      </div>
  },
  {
    id: 2,
    showForSteps: [17],
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
        <MN>\forall</MN><MN classes={'t-green'}>A</MN><MN>\Rightarrow</MN><MN classes={'t-red'}>B</MN>
      </VisualTextRow>
  },
  {
    id: 2,
    showForSteps: [2, 3, 4, 5, 6, 7],
    content:
      <VisualTextRow left={20} top={60} classes={'t-green'}>
        <MN>A:</MN> hrana <MN>e</MN> je most
      </VisualTextRow>
  },
  {
    id: 3,
    showForSteps: [3, 4, 5, 6, 7],
    content:
      <VisualTextRow left={20} top={100} width={610} classes={'t-red'}>
        <MN>B:</MN> v grafu <MN>G</MN> neexistuje kružnice obsahující hranu <MN>e</MN>
      </VisualTextRow>
  },
  {
    id: 4,
    showForSteps: [4, 5, 6, 7],
    content:
      <VisualTextRow left={160} top={150}>
        <MN>\neg (\forall</MN><MN classes={'t-green'}>A</MN><MN>\Rightarrow</MN><MN classes={'t-red'}>B</MN><MN>)</MN><MN>\Longleftrightarrow</MN><MN>(\exists</MN><MN classes={'t-green'}>A</MN><MN>\wedge</MN><MN classes={'t-red'}>\neg B</MN><MN>)</MN>
      </VisualTextRow>
  },
  {
    id: 5,
    showForSteps: [5, 6, 7],
    content:
      <VisualTextRow left={40} top={210} classes={'t-green'}>
        <MN>A:</MN> hrana <MN>e</MN> je most
      </VisualTextRow>
  },
  {
    id: 6,
    showForSteps: [6, 7],
    content:
      <VisualTextRow left={20} top={250} classes={'t-red'}>
        <MN>\neg B:</MN> v grafu <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>
      </VisualTextRow>
  },
  {
    id: 7,
    showForSteps: [7],
    content:
      <VisualTextRow left={45} top={310} width={570}>
        Existuje graf <MN>G</MN>, ve kterém <span className={'t-green'}>hrana <MN>e</MN> je most</span>, a zároveň <span className={'t-red'}>v grafu <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN></span>.
      </VisualTextRow>
  },
];

const cameraPosition0 = {
  position: { x: 0, y: 0 }, 
  scale: 1.10,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
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
