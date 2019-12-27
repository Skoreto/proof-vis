import React from "react";
import ClaimPanel from "../../../UI/ProofWrapper/ClaimPanel/ClaimPanel";
import MN from "../../../UI/MathJaxNode/MathJaxNode";

const headingTitle = "Důkaz 7";
const breadcrumbsCurrent = "Ostatní";
const stepSum = 4;

const claimPanel = (
  <ClaimPanel>
    Dokažte, nebo vyvraťte protipříkladem:
    <br />
    <cite>
      <q>
        {" "}
        <MN>\forall G=(V,E)</MN>: Když v grafu <MN>G</MN> existují dva různé{" "}
        <MN>u</MN>-<MN>v</MN> sledy, tak graf <MN>G</MN> obsahuje kružnici.
      </q>
    </cite>
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: "proofStepPanel1",
    activeForSteps: [1],
    content: <p>Dané tvrzení neplatí, protože existuje protipříklad.</p>
  },
  {
    name: "proofStepPanel2",
    activeForSteps: [2],
    content: (
      <p>
        Existují dva různé <MN>u</MN>-<MN>v</MN> sledy:
        <br />
        <br />
        Příkladem prvního budiž sled <MN>S_1 = (u,e_1,w,e_2,v)</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel3",
    activeForSteps: [3],
    content: (
      <p>
        Příkladem druhého může být sled{" "}
        <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel4",
    activeForSteps: [4],
    content: (
      <div>
        <p>
          Přitom graf <MN>G</MN> neobsahuje kružnici.
        </p>
        <p className="text-center">
          Tím je vyvráceno stanovené tvrzení. <MN>\square</MN>
        </p>
      </div>
    )
  }
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: (
      <p>
        Příklad grafu <MN>G</MN>, který neobsahuje kružnici.
      </p>
    )
  },
  {
    id: 2,
    showForSteps: [2],
    content: (
      <p>
        Konstrukce sledu <MN>S_1 = (u,e_1,w,e_2,v)</MN>
      </p>
    )
  },
  {
    id: 3,
    showForSteps: [3, 4],
    content: (
      <p>
        Konstrukce sledu <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN>
      </p>
    )
  }
];

const cameraPosition0 = {
  position: { x: 0, y: 0 },
  scale: 1.15,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" }
};

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels
};

export const cameraPositions = [cameraPosition0];
