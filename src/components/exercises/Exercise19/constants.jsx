import React from 'react';
import ClaimPanel from '../../../UI/ExerciseWrapper/ClaimPanel/ClaimPanel';
import VisualTextRow from '../../../UI/ExerciseWrapper/VisualTextRow/VisualTextRow';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Příklad 19';
const breadcrumbsCurrent = 'Důkazy sporem';
const stepSum = 20;

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
        <br />
        Původní tvrzení odpovídá implikaci ve tvaru <MN>\forall A \Rightarrow B</MN>. Vyznačíme v tvrzení výrok A i B.
      </p>
  },
  {
    name: 'proofStepPanel2',
    activeForSteps: [2],
    content:
      <p>
        Negace původního tvrzení se skládá z výroku A a &not; B.
      </p>
  },
  {
    name: 'proofStepPanel3',
    activeForSteps: [3],
    content:
      <p>
        Sestavíme výslednou negaci původního tvrzení.
        <br /><br />
        Pro spor tedy předpokládejme tvrzení: <cite><q>Existuje graf G, ve kterém hrana <MN>e</MN> je most a zároveň v grafu <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>.</q></cite>
      </p>
  },
  {
    name: 'proofStepPanel4',
    activeForSteps: [4, 5],
    content:
      <p>
        Pokud v <MN>G</MN> existuje kružnice <MN>C</MN> obsahující hranu <MN>{'e=\\{x,y\\}'}</MN>, pak v grafu <MN>G</MN> existují minimálně 2 <MN>x-y</MN> cesty.
      </p>
  },
  {
    name: 'proofStepPanel5',
    activeForSteps: [6],
    content:
      <p>
        <b>1.</b> <MN>{'P_{x,y}=e=\\{x,y\\}'}</MN> (samotná hrana <MN>e</MN>)
      </p>
  },
  {
    name: 'proofStepPanel6',
    activeForSteps: [7],
    content:
      <p>
        <b>2.</b> <MN>{"P'_{x,y}=C-e=(x,v_1,v_2,...,v_3,y)"}</MN> (kružnice bez hrany <MN>e</MN>)
      </p>
  },
];

const descriptionPanels = [
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
    id: 4,
    showForSteps: [4],
    content: <p>Sestavení negace původního tvrzení.</p>
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
];

// const definitionPanels = [];

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

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels,
  // definitionPanels: definitionPanels,
  visualTextRows: visualTextRows,
};
