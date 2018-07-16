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
        </p>
      </Element>
    </Element>
  )
};
