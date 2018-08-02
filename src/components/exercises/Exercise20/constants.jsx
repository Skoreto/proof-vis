import React from 'react';
import ClaimPanel from '../../../UI/ExerciseWrapper/ClaimPanel/ClaimPanel';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Příklad 20';
const breadcrumbsCurrent = 'Důkazy přímo';
const stepSum = 7;

const claimPanel = (
  <ClaimPanel>
    <cite><q>Nechť <MN>G</MN> je souvislý graf. Jestliže hrana <MN>e</MN> není most v <MN>G</MN>, pak v <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>.</q> </cite> Dokažte přímo.
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: 'proofStepPanel1',
    activeForSteps: [1],
    content:
      <p>
        Pokud <MN>{'e=\\{x,y\\}'}</MN> není most v <MN>G</MN>, poté z definice mostu platí, že graf <MN>G-e</MN> má stejný počet komponent jako <MN>G</MN>.
      </p>
  },
  {
    name: 'proofStepPanel2',
    activeForSteps: [2, 3],
    content:
      <p>
        Protože uvažujeme souvislý graf <MN>G</MN>, musí mezi libovolně zvolenými vrcholy <MN>u</MN> a <MN>v</MN> existovat cesta.
      </p>
  },
  {
    name: 'proofStepPanel3',
    activeForSteps: [4],
    content:
      <p>
        Když existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{'P_{uv}'}</MN> v <MN>G</MN>, tak existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{"P'_{uv}"}</MN> v <MN>G-e</MN>. (Uvažujeme totiž stále hranu <MN>e</MN>, která není mostem.)
        <br /><br />
        Poznámka:  <MN>{"P'_{uv}"}</MN> se nemusí nutně  <MN>{'=P_{uv}'}</MN>.
      </p>
  },
  {
    name: 'proofStepPanel4',
    activeForSteps: [5],
    content:
      <p>
        Z toho vyplývá, že v <MN>G-e</MN> musí v existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy <MN>x</MN> a <MN>y</MN> z hrany <MN>e</MN>.
      </p>
  },
  {
    name: 'proofStepPanel5',
    activeForSteps: [6],
    content:
      <p>
        Protože <MN>G</MN> vznikne z <MN>G-e</MN> přidáním hrany <MN>e</MN>, musí se <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> nacházet také v <MN>G</MN>.
      </p>
  },
  {
    name: 'proofStepPanel6',
    activeForSteps: [7],
    content:
      <div>
        <p>
          Pak podle definice kružnice platí, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří v <MN>G</MN> kružnici obsahující hranu <MN>e</MN>.
        </p>
        <p className="text-center">
          Tím je dokázáno stanovené tvrzení. <MN>\Box</MN>
        </p>
      </div>
  },
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content:
      <p>
        Sestrojení příkladu souvislého grafu <MN>G</MN>, kde existuje hrana <MN>e</MN>, která není most.
      </p>
  },
  {
    id: 2,
    showForSteps: [2],
    content:
      <p>Zvolení libovolných vrcholů <MN>u</MN> a <MN>v</MN>.</p>
  },
  {
    id: 3,
    showForSteps: [3],
    content:
      <p>
        Příklad sestrojení <MN>u</MN>-<MN>v</MN> cesty <MN>{'P_{uv}'}</MN> v grafu <MN>G</MN>.
      </p>
  },
  {
    id: 4,
    showForSteps: [4],
    content:
      <p>
        Vlevo předchozí příklad <MN>u</MN>-<MN>v</MN> cesty <MN>{'P_{uv}'}</MN> v grafu <MN>G</MN>.
        <br />Vpravo příklad <MN>u</MN>-<MN>v</MN> cesty <MN>{"P'_{uv}"}</MN> v grafu <MN>G-e</MN>.
      </p>
  },
  {
    id: 5,
    showForSteps: [5],
    content:
      <p>
        <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> v grafu <MN>G-e</MN>
      </p>
  },
  {
    id: 6,
    showForSteps: [6],
    content:
      <p>
        <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> v grafu <MN>G</MN>
      </p>
  },
  {
    id: 7,
    showForSteps: [7],
    content:
      <p>
        Cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří kružnici v <MN>G</MN> obsahující hranu <MN>e</MN>.
      </p>
  },
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content:
      <div>
        <p>DEFINICE MOSTU (1.11)
          <br />Nechť je dán graf <MN>G=(V,E)</MN>, vrchol <MN>v \in V</MN> a hrana <MN>e \in E</MN>.
        </p>
        <p>
          Hrana <MN>e</MN> je most grafu <MN>G</MN>, jestliže graf <MN>G-e</MN> má více komponent než graf <MN>G</MN>.
        </p>
      </div>
  },
  {
    id: 2,
    showForSteps: [2, 3],
    content:
      <div>
        <p>
          DEFINICE SOUVISLÉHO GRAFU (1.9)
          <br />Souvislý graf je graf, ve kterém mezi každými jeho dvěma vrcholy existuje cesta.
        </p>
      </div>
  },
  {
    id: 3,
    showForSteps: [7],
    content:
      <div>
        <p>
          KRUŽNICE (Definice 1.8)
          <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
        </p>
      </div>
  },
];

const cameraPosition0 = {
  position: { x: 0, y: -10 }, 
  scale: 1.4,
  animation: { duration: 1500, easingFunction: 'easeInOutQuad' },
};

const cameraPosition1 = {
  position: { x: 170, y: -10 }, 
  scale: 0.82,
  animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
};

const cameraPosition2 = {
  position: { x: 400, y: -10 }, 
  scale: 1.4,
  animation: { duration: 4000, easingFunction: 'easeInOutQuad' },
};

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
};

export const cameraPositions = [cameraPosition0, cameraPosition1, cameraPosition2];
