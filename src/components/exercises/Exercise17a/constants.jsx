import React from 'react';
import ClaimPanel from '../../../UI/ExerciseWrapper/ClaimPanel/ClaimPanel';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Příklad 17 a) (v2)';
const breadcrumbsCurrent = 'Protipříklady';
const stepSum = 4;

const claimPanel = (
  <ClaimPanel>
    Dokažte, nebo vyvraťte: <cite><q>Když v grafu <MN>G</MN> existují dva různé <MN>u</MN>-<MN>v</MN> sledy, tak graf <MN>G</MN> obsahuje kružnici.</q></cite>
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: 'proofStepPanel1',
    activeForSteps: [1],
    content:
      <p>Dané tvrzení neplatí, protože existuje kontra-příklad.</p>
  },
  {
    name: 'proofStepPanel2',
    activeForSteps: [2],
    content:
      <p>
        Existují dva různé <MN>u</MN>-<MN>v</MN> sledy:
        <br /><br />
        Příkladem prvního budiž sled <MN>S_1 = (u,e_1,w,e_2,v)</MN>.
      </p>
  },
  {
    name: 'proofStepPanel3',
    activeForSteps: [3],
    content:
      <p>
        Příkladem druhého může být sled <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN>.
      </p>
  },
  {
    name: 'proofStepPanel4',
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

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: <p>Příklad grafu <MN>G</MN>, který neobsahuje kružnici.</p>
  },
  {
    id: 2,
    showForSteps: [2],
    content: <p>Konstrukce sledu <MN>S_1 = (u,e_1,w,e_2,v)</MN></p>
  },
  {
    id: 3,
    showForSteps: [3, 4],
    content: <p>Konstrukce sledu <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN></p>
  },
];

const definitionPanels = [];

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
};
