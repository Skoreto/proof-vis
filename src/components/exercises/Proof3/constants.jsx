import React from 'react';
import ClaimPanel from '../../../UI/ExerciseWrapper/ClaimPanel/ClaimPanel';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Důkaz 3';
const breadcrumbsCurrent = 'Důkazy přímo';
const stepSum = 5;

const claimPanel = (
  <ClaimPanel>
    Dokažte přímo tvrzení: <cite><q>Jestliže graf <MN>G</MN> je strom, pak graf <MN>G-e</MN>, kde <MN>e</MN> je libovolná hrana grafu <MN>G</MN>, již není strom.</q></cite>
    <br />(Při dokazování použijte definice a věty z teorie týkající se stromů.)
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: 'proofStepPanel1',
    activeForSteps: [1, 2],
    content:
      <p>
        Jestliže graf <MN>G</MN> je strom
        <br /><MN>\Rightarrow</MN> pak podle věty o stromech platí, že pro každé dva vrcholy v grafu <MN>G</MN> existuje jediná cesta.
      </p>
  },
  {
    name: 'proofStepPanel2',
    activeForSteps: [3],
    content:
      <p>
        <MN>\Rightarrow</MN> Protože existuje právě jedna cesta mezi vrcholy <MN>u,v</MN>, musí vždy vést přes libovolně zvolenou hranu <MN>{'e=\\{x,y\\}'}</MN> této cesty.
      </p>
  },
  {
    name: 'proofStepPanel3',
    activeForSteps: [4],
    content:
      <p>
        <MN>\Rightarrow</MN> Nicméně, v <MN>G-e</MN> neexistuje cesta <MN>u</MN>-<MN>v</MN>.
        <br /><MN>\Rightarrow</MN> Proto se vrcholy <MN>u</MN>,<MN>v</MN> v <MN>G-e</MN> nacházejí v různých komponentách souvislosti.
      </p>
  },
  {
    name: 'proofStepPanel4',
    activeForSteps: [5],
    content:
      <div>
        <p>
        <MN>\Rightarrow</MN> Z toho plyne, že <MN>G-e</MN> není souvislý.
        <br /><MN>\Rightarrow</MN> Z definice stromu pak platí, že <MN>G-e</MN> není strom.
        </p>
        <p className="text-center">
          <MN>\dagger</MN> Tím je dokázáno stanovené tvrzení.
        </p>
      </div>
  },
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: <p>Příklad grafu <MN>G</MN>, který je strom.</p>
  },
  {
    id: 2,
    showForSteps: [2],
    content: <p>Mezi libovolně zvolenými vrcholy <MN>u,v</MN> existuje jediná cesta.</p>
  },
  {
    id: 3,
    showForSteps: [3],
    content: <p>Libovolně zvolená hrana <MN>{'e=\\{x,y\\}'}</MN> z cesty <MN>u</MN>-<MN>v</MN>.</p>
  },
  {
    id: 4,
    showForSteps: [4],
    content:
      <p>
        Odebráním hrany <MN>e</MN> se vrcholy <MN>u</MN> a <MN>v</MN> ocitnou v různých komponentách souvislosti.
      </p>
  },
  {
    id: 5,
    showForSteps: [5],
    content: <p>Graf <MN>G-e</MN> není souvislý a není tedy ani stromem.</p>
  },

];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [1, 2],
    content:
      <div>
        <p>
          VĚTA O STROMECH (4.1)
          <br />Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:
        </p>
        <p>
          I. Graf <MN>G</MN> je strom.
          <br />II. Pro každé dva vrcholy <MN>u,v \in V</MN> existuje právě jedna cesta z vrcholu <MN>u</MN> do vrcholu <MN>v</MN>.
        </p>
      </div>
  },
  {
    id: 2,
    showForSteps: [5],
    content:
      <p>
        DEFINICE STROMU (4.3)
        <br />Strom je <u>souvislý</u> graf, který neobsahuje kružnici.
      </p>
  },
];

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
};
