import React from 'react';
import ClaimPanel from '../../../UI/ExerciseWrapper/ClaimPanel/ClaimPanel';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Příklad 19';
const breadcrumbsCurrent = 'Důkazy sporem';
const stepSum = 10;

const claimPanel = (
  <ClaimPanel>
    Dokažte sporem tvrzení: <cite><q> <MN>\forall G=(V,E):</MN> Jestliže hrana <MN>e</MN> je most v <MN>G</MN>, pak v <MN>G</MN> neexistuje kružnice obsahující hranu <MN>e</MN>.</q></cite>
  </ClaimPanel>
);

const proofPanels = [
  {
    name: 'proofPanel1',
    activeForSteps: [1],
    content:
      <p>
        Při dokazování sporem vycházíme z negace původního tvrzení.
        <br />
        Původní tvrzení odpovídá implikaci ve tvaru <MN>\forall A \Rightarrow B</MN>. Vyznačíme v tvrzení výrok A i B.
      </p>
  },
  {
    name: 'proofPanel2',
    activeForSteps: [2],
    content:
      <p>
        Negace původního tvrzení se skládá z výroku A a &not; B.
      </p>
  },
  {
    name: 'proofPanel3',
    activeForSteps: [3],
    content:
      <p>
        Sestavíme výslednou negaci původního tvrzení.
        <br /><br />
        Pro spor tedy předpokládejme tvrzení: <cite><q>Existuje graf G, ve kterém hrana <MN>e</MN> je most a zároveň v grafu <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>.</q></cite>
      </p>
  },
  {
    name: 'proofPanel4',
    activeForSteps: [4, 5],
    content:
      <p>
        Pokud v <MN>G</MN> existuje kružnice <MN>C</MN> obsahující hranu <MN>{'e=\\{x,y\\}'}</MN>, pak v grafu <MN>G</MN> existují minimálně 2 <MN>x-y</MN> cesty.
      </p>
  },
  {
    name: 'proofPanel5',
    activeForSteps: [6],
    content:
      <p>
        <b>1.</b> <MN>{'P_{x,y}=e=\\{x,y\\}'}</MN> (samotná hrana <MN>e</MN>)
      </p>
  },
  {
    name: 'proofPanel6',
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
    content: <p>Provedení negace původního výroku.</p>
  },
];

const definitionPanels = [];

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofPanels: proofPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
};
