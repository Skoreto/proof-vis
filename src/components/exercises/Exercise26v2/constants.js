import React from 'react';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 26 (v2)';
export const breadcrumbsCurrent = 'Důkazy přímo';
export const stepSum = 5;

export const definitionPanel = (
  <DefinitionPanel>
    Dokažte přímo tvrzení: <cite><q>Jestliže graf <MN>G</MN> je strom, pak graf <MN>G-e</MN>, kde <MN>e</MN> je libovolná hrana grafu <MN>G</MN>, již není strom.</q></cite>
    <br />(Při dokazování použijte definice a věty z teorie týkající se stromů.)
  </DefinitionPanel>
);

export const getProofBox = currentStep => {
  return (
    <div className="bg-warning" id="proofBox">
      <div className={(1 === currentStep) || (2 === currentStep) ? "proof-active" : ""}>
        <p>
          Jestliže graf <MN>G</MN> je strom
          <br /><MN>\Rightarrow</MN> pak podle věty o stromech platí, že pro každé dva vrcholy v grafu <MN>G</MN> existuje jediná cesta.
        </p>
      </div>
      <div className={3 === currentStep ? "proof-active" : ""}>
        <p>
          <MN>\Rightarrow</MN> Protože existuje právě jedna cesta mezi vrcholy <MN>u,v</MN>, musí vždy vést přes libovolně zvolenou hranu <MN>{'e=\\{x,y\\}'}</MN> této cesty.
        </p>
      </div>
      <div className={4 === currentStep ? "proof-active" : ""}>
        <p>
          <MN>\Rightarrow</MN> Nicméně, v <MN>G-e</MN> neexistuje cesta <MN>u</MN>-<MN>v</MN>.
          <br /><MN>\Rightarrow</MN> Proto se vrcholy <MN>u</MN>,<MN>v</MN> v <MN>G-e</MN> nacházejí v různých komponentách souvislosti.
        </p>
      </div>
      <div className={'borderless' + (5 === currentStep ? " proof-active" : "")}>
        <p>
          <MN>\Rightarrow</MN> Z toho plyne, že <MN>G-e</MN> není souvislý.
          <br /><MN>\Rightarrow</MN> Z definice stromu pak platí, že <MN>G-e</MN> není strom.
        </p>
        <p className="text-center">
          <MN>\dagger</MN> Tím je dokázáno stanovené tvrzení.
        </p>
      </div>
    </div>
  )
};
