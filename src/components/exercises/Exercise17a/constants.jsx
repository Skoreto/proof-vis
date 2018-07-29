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

export const proofPanels = [
  {
    name: 'proofPanel1',
    activeForSteps: [1],
    content:
      <p>Dané tvrzení neplatí, protože existuje kontra-příklad.</p>
  },
  {
    name: 'proofPanel2',
    activeForSteps: [2],
    content:
      <p>
        Existují dva různé <MN>u</MN>-<MN>v</MN> sledy:
        <br /><br />
        Příkladem prvního budiž sled <MN>S_1 = (u,e_1,w,e_2,v)</MN>.
      </p>
  },
  {
    name: 'proofPanel3',
    activeForSteps: [3],
    content:
      <p>
        Příkladem druhého může být sled <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN>.
      </p>
  },
  {
    name: 'proofPanel4',
    activeForSteps: [4],
    content:
      <div>
        <p>Přitom graf <MN>G</MN> neobsahuje kružnici.</p>
        <p className="text-center">
          <MN>\dagger</MN> Tím je vyvráceno stanovené tvrzení.
        </p>
      </div>
  },
];
