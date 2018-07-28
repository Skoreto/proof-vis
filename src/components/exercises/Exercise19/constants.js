import React from 'react';
import { Element } from 'react-scroll';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 19';
export const breadcrumbsCurrent = 'Důkazy sporem';
export const stepSum = 10;

export const definitionPanel = (
  <DefinitionPanel>
    Dokažte sporem tvrzení: <cite><q> <MN>\forall G=(V,E):</MN> Jestliže hrana <MN>e</MN> je most v <MN>G</MN>, pak v <MN>G</MN> neexistuje kružnice obsahující hranu <MN>e</MN>.</q></cite>
  </DefinitionPanel>
);

export const getProofBox = currentStep => {
  return (
    <Element className="bg-warning" id="proofBox">
      <Element name="proofPanel1" className={1 === currentStep ? "proof-active" : ""}>
        <p>
          Při dokazování sporem vycházíme z negace původního tvrzení.
          <br />
          Původní tvrzení odpovídá implikaci ve tvaru <MN>\forall A \Rightarrow B</MN>. Vyznačíme v tvrzení výrok A i B.
        </p>
      </Element>
      <Element name="proofPanel2" className={2 === currentStep ? "proof-active" : ""}>
        <p>
          Negace původního tvrzení se skládá z výroku A a &not; B.
        </p>
      </Element>
      <Element name="proofPanel3" className={3 === currentStep ? "proof-active" : ""}>
        <p>
          Sestavíme výslednou negaci původního tvrzení.
          <br /><br />
          Pro spor tedy předpokládejme tvrzení: <cite><q>Existuje graf G, ve kterém hrana <MN>e</MN> je most a zároveň v grafu <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>.</q></cite>
        </p>
      </Element>
      <Element name="proofPanel4" className={(4 === currentStep) || (5 === currentStep) ? "proof-active" : ""}>
        <p>
          Pokud v <MN>G</MN> existuje kružnice <MN>C</MN> obsahující hranu <MN>{'e=\\{x,y\\}'}</MN>, pak v grafu <MN>G</MN> existují minimálně 2 <MN>x-y</MN> cesty.
        </p>
      </Element>
      <Element name="proofPanel5" className={6 === currentStep ? "proof-active" : ""}>
        <p>
          <b>1.</b> <MN>{'P_{x,y}=e=\\{x,y\\}'}</MN> (samotná hrana <MN>e</MN>)
        </p>
      </Element>
      <Element name="proofPanel6" className={7 === currentStep ? "proof-active" : ""}>
        <p>
          <b>2.</b> <MN>{"P'_{x,y}=C-e=(x,v_1,v_2,...,v_3,y)"}</MN> (kružnice bez hrany <MN>e</MN>)
        </p>
      </Element>
    </Element>
  )
};

export const proofPanels = [
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