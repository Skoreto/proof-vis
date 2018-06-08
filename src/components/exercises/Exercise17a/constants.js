import React from 'react';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 17 a) (v2)';
export const breadcrumbsCurrent = 'Ostatní';
export const stepSum = 4;

export const definitionPanel = (
  <DefinitionPanel>
    Dokažte, nebo vyvraťte: <cite><q>Když v grafu <MN>G</MN> existují dva různé <MN>u</MN>-<MN>v</MN> sledy, tak graf <MN>G</MN> obsahuje kružnici.</q></cite>
  </DefinitionPanel>
);

export const getProofBox = currentStep => {
  return (
    <div className="bg-warning" id="proofBox">
      <div className={1 === currentStep ? "proof-active" : ""}>
        <p>Dané tvrzení neplatí, protože existuje kontra-příklad.</p>
      </div>
      <div className={2 === currentStep ? "proof-active" : ""}>
        <p>Existují dva různé <MN>u</MN>-<MN>v</MN> sledy:</p>
        <p>
          Příkladem prvního budiž sled <MN>S_1 = (u,e_1,w,e_2,v)</MN>.
        </p>
      </div>
      <div className={3 === currentStep ? "proof-active" : ""}>
        <p>
          Příkladem druhého může být sled <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN>.
        </p>
      </div>
      <div className={"borderless" + (4 === currentStep ? " proof-active" : "")}>
        <p>Přitom graf <MN>G</MN> neobsahuje kružnici. <MN>\Box</MN></p>
        <p className="text-center">
          Tím je vyvráceno stanovené tvrzení.
        </p>
      </div>
    </div>
  )
};
