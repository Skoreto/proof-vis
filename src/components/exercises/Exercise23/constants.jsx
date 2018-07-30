import React from 'react';
import ClaimPanel from '../../../components/UI/ClaimPanel/ClaimPanel';
import MN from '../../../components/MathJax/MathJaxNode';

const headingTitle = 'Příklad 23';
const breadcrumbsCurrent = 'Důkazy přímo';
const stepSum = 10;

const claimPanel = (
  <ClaimPanel>
    Dokažte, že když dvě různé kružnice grafu <MN>G</MN> obsahují hranu <MN>e</MN>, pak v <MN>G</MN> existuje i kružnice neobsahující hranu <MN>e</MN>.
  </ClaimPanel>
);

const proofPanels = [
  {
    name: 'proofPanel1',
    activeForSteps: [1],
    content:
      <div>
        <p>
          Nechť <MN>{'e=\\{u,v\\}'}</MN> a <MN>C_1 = (u=x_1,x_2,...,x_k=v,u)</MN> a <MN>C_2 = (u=y_1,y_2,...,y_l=v,u)</MN> jsou dvě různé kružnice, které obsahují hranu <MN>e</MN>.
        </p>
        <p>Mohou nastat dvě možnosti:</p>
      </div>
  },
  {
    name: 'proofPanel2',
    activeForSteps: [2],
    content:
      <p>
        <b>1.</b> <MN>{'C_1 \\cap C_2=\\{u,v\\}'}</MN> (tj. kružnice mají společnou jenom hranu <MN>e</MN>)
      </p>
  },
  {
    name: 'proofPanel3',
    activeForSteps: [3],
    content:
      <p>
        <MN>\Rightarrow</MN> Pak dle definice kružnice je <MN>{'(u,x_2,...,x_k=v=y_l,y_{l-1},...y_2,y_1=u)'}</MN> kružnice neobsahující hranu <MN>e</MN>.
      </p>
  },
  {
    name: 'proofPanel4',
    activeForSteps: [4],
    content:
      <p>
        <b>2.</b> <MN>{'C_1 \\cap C_2=\\{e, e_1,...\\}'}</MN> (tj. kružnice mají kromě hrany <MN>e</MN> ještě jiné společné hrany)
      </p>
  },
  {
    name: 'proofPanel5',
    activeForSteps: [5, 6, 7, 8],
    content:
      <p>
        <MN>\Rightarrow</MN> Pak máme dvě různé <MN>u-v</MN> cesty <MN>P_1=C_1-e=(u=x_1,x_2,...,x_k=v)</MN> a <MN>P_2=C_2-e=(u=y_1,y_2,...,y_l=v)</MN> a žádná z cest neobsahuje hranu <MN>e</MN>.
      </p>
  },
  {
    name: 'proofPanel6',
    activeForSteps: [9],
    content:
      <p>
        <MN>\Rightarrow</MN> Pak existuje vrchol, ve kterém se cesty rozcházejí, a také vrchol, ve kterém se cesty scházejí. 
        <br />
        <br />(Mohou to být vrcholy <MN>u</MN> a <MN>v</MN> nebo některé vnitřní.)
      </p>
  },
  {
    name: 'proofPanel7',
    activeForSteps: [10],
    content:
      <p>
        Nechť prvním vrcholem, ve kterém se cesty rozcházejí, je <MN>{'x_i=y_j,i \\in \\{1,2,...,k \\}'}</MN>, <MN>{'j \\in \\{1,2,...,l \\}'}</MN> a vrchol, ve kterém se scházejí, je <MN>{'x_s=y_r'}</MN>, <MN>{'s \\in \\{1,2,...,k \\}'}</MN>, <MN>{'r \\in \\{1,2,...,l \\} \\wedge s > i \\wedge r > j.'}</MN>
        <br /><br />
        Pak podle definice kružnice je <MN>{'(x_i,x_{i+1},...,x_s = y_r,...,y_j=x_i)'}</MN> kružnice neobsahující hranu <MN>e</MN>, protože ani jedna z cest ji neobsahovala. <MN>\Box</MN>
      </p>
  },
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: <p>Příklad dvou grafů obsahujících kružnice.</p>
  },
  {
    id: 2,
    showForSteps: [2],
    content:
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN>.
      </p>
  },
  {
    id: 3,
    showForSteps: [3],
    content:
      <p>
        Poté v grafu <MN>G</MN> existuje také kružnice <MN>C_3</MN> neobsahující hranu <MN>e</MN>.
      </p>
  },
  {
    id: 4,
    showForSteps: [4],
    content:
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN> a navíc další hranu <MN>e_1</MN>.
      </p>
  },
  {
    id: 5,
    showForSteps: [5],
    content: <p>Vyznačení kružnice <MN>C_1</MN>.</p>
  },
  {
    id: 6,
    showForSteps: [6],
    content:
      <p>
        Vyznačení cesty <MN>P_1=C_1 - e</MN>, tedy přes kružnici <MN>C_1</MN> bez hrany <MN>e</MN>.
      </p>
  },
  {
    id: 7,
    showForSteps: [7],
    content: <p>Vyznačení kružnice <MN>C_2</MN>.</p>
  },
  {
    id: 8,
    showForSteps: [8],
    content:
      <p>
        Vyznačení cesty <MN>P_2=C_2 - e</MN>, tedy přes kružnici <MN>C_2</MN> bez hrany <MN>e</MN>.
      </p>
  },
  {
    id: 9,
    showForSteps: [9],
    content:
      <p>
        Vyznačení vrcholu <MN>x_1=y_1</MN>, ve kterém se cesty rozcházejí, a vrcholu <MN>x_4=y_4</MN>, ve kterém se cesty scházejí.
      </p>
  },
  {
    id: 10,
    showForSteps: [10],
    content:
      <p>
        Vyznačení vrcholu križnice <MN>C_3</MN>, která neobsahuje hranu <MN>e</MN>.
      </p>
  },
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [3],
    content:
      <p>
        KRUŽNICE (Definice 1.8)
        <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
      </p>
  },
  {
    id: 2,
    showForSteps: [10],
    content:
      <p>
        KRUŽNICE (Definice 1.8)
        <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
      </p>
  },
];

const cameraPosition0 = {
  position: { x: 0, y: 15 }, 
  scale: 0.65,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

const cameraPosition1 = {
  position: { x: 0, y: -130 }, 
  scale: 1.15,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

const cameraPosition2 = {
  position: { x: 0, y: 200 }, 
  scale: 1.15,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofPanels: proofPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
};

export const cameraPositions = [cameraPosition0, cameraPosition1, cameraPosition2];
