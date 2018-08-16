import React from 'react';
import ClaimPanel from '../../../UI/ProofWrapper/ClaimPanel/ClaimPanel';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

const headingTitle = 'Důkaz 5';
const breadcrumbsCurrent = 'Důkazy nepřímo';
const stepSum = 8;

const claimPanel = (
  <ClaimPanel>
    Dokažte nepřímo: <cite><q> <MN>\forall G=(V,E)</MN>: Jestliže graf <MN>G</MN> je strom, pak graf <MN>G</MN> je souvislý a každá jeho hrana je most.</q></cite>
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: 'proofStepPanel1',
    activeForSteps: [1],
    content:
      <p>
        Dokazujeme-li nepřímo, snažíme se přímou metodou dokázat tvrzení <MN>\neg B \Rightarrow \neg A</MN>, které je dle zásad výrokové logiky ekvivalentní s původním tvrzením.
        <br />
        <br />V tomto případě bude znít: <cite><q>Jestliže <MN>G</MN> není strom, pak graf <MN>G</MN> je nesouvislý nebo existuje hrana <MN>e</MN>, která není most v <MN>G</MN>.</q></cite>
        <br />
        <br />A dostáváme dvě části implikované věty, které je třeba dokázat:
      </p>
  },
  {
    name: 'proofStepPanel2',
    activeForSteps: [2],
    content:
      <p>
        <b>1. část:</b> <cite><q>graf <MN>G</MN> je nesouvislý</q></cite>
        <br />
        <br />Jestliže graf <MN>G</MN> je nesouvislý, pak přímo z definice stromu platí, že není strom.
      </p>
  },
  {
    name: 'proofStepPanel3',
    activeForSteps: [3],
    content:
      <p>
        <b>2. část:</b> <cite><q>existuje hrana <MN>e</MN>, která není most v grafu <MN>G</MN></q></cite>
        <br />
        <br /> Příklad takového grafu zobrazuje vizualizace.
      </p>
  },
  {
    name: 'proofStepPanel4',
    activeForSteps: [4],
    content:
      <p>
        Z definice mostu víme, že jeho odebráním vznikne v grafu více komponent.
        <br />
        <br />Jestliže však v grafu <MN>G</MN> existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která <u>není</u> most, pak po jejím odebrání graf <MN>G-e</MN> nebude mít více komponent. Vrcholy <MN>x</MN> a <MN>y</MN> se tedy budou nacházet stále v jedné souvislé komponentě.
      </p>
  },
  {
    name: 'proofStepPanel5',
    activeForSteps: [5],
    content:
      <p>
        Protože komponenta je sama o sobě souvislý graf. Musí mezi každou dvojicí jejích vrcholů existovat cesta.
        <br />
        <br />Tudíž v grafu <MN>G-e</MN> musí nadále existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy hrany <MN>{'e=\\{x,y\\}'}</MN>.
      </p>
  },
  {
    name: 'proofStepPanel6',
    activeForSteps: [6],
    content:
      <p>
        Pak ale cesta <MN>{'P_{xy}'}</MN> musela existovat také v grafu <MN>G</MN>, protože graf <MN>G-e</MN> vznikl z grafu <MN>G</MN> pouze odebráním hrany <MN>e</MN>.
      </p>
  },
  {
    name: 'proofStepPanel7',
    activeForSteps: [7],
    content:
      <p>
        Z definice kružnice pak vyplývá, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou e tvoří kružnici v grafu <MN>G</MN>.
      </p>
  },
  {
    name: 'proofStepPanel8',
    activeForSteps: [8],
    content:
      <p>
        Protože graf <MN>G</MN> obsahuje kružnici, není podle definice stromu stromem.
      </p>
  },
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: <p>Provedení obměny původního výroku.</p>
  },
  {
    id: 2,
    showForSteps: [2],
    content: <p>Příklad nesouvislého grafu <MN>G</MN>, který není strom.</p>
  },
  {
    id: 3,
    showForSteps: [3],
    content:
      <p>
        Příklad grafu <MN>G</MN>, kde existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která není most.
      </p>
  },
  {
    id: 4,
    showForSteps: [4],
    content:
      <p>
        Po odebrání hrany <MN>e</MN> zůstanou její vrcholy <MN>x</MN> a <MN>y</MN> stále v jedné souvislé komponentě.
      </p>
  },
  {
    id: 5,
    showForSteps: [5],
    content:
      <p>
        Po odebrání hrany <MN>e</MN> v grafu stále existuje také cesta mezi jejími vrcholy <MN>x</MN> a <MN>y</MN>.
      </p>
  },
  {
    id: 6,
    showForSteps: [6],
    content:
      <p>
        Cesta <MN>{'P_{xy}'}</MN> existovala také v grafu <MN>G</MN>.
      </p>
  },
  {
    id: 7,
    showForSteps: [7],
    content:
      <p>
        Cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>e</MN> tvoří kružnici v grafu <MN>G</MN>.
      </p>
  },
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [2],
    content:
      <p>
        DEFINICE STROMU (4.2)
        <br />Strom je <u>souvislý</u> graf, který neobsahuje kružnici.
      </p>
  },
  {
    id: 2,
    showForSteps: [4],
    content:
      <div>
        <p>
          DEFINICE MOSTU (1.11)
          <br />Nechť je dán graf <MN>G=(V,E)</MN>, vrchol <MN>v \in V</MN> a hrana <MN>e \in E</MN>.
        </p>
        <p>
          Hrana <MN>e</MN> je most grafu <MN>G</MN>, jestliže graf <MN>G-e</MN> má více komponent než graf <MN>G</MN>.
        </p>
      </div>
  },
  {
    id: 3,
    showForSteps: [5],
    content:
      <div>
        <p>
          DEFINICE SOUVISLÉHO GRAFU A KOMPONENTY GRAFU (1.9)
        </p>
        <p>
          <u>Souvislý graf</u> je graf, ve kterém mezi každými jeho dvěma vrcholy existuje cesta.
        </p>
        <p>
          <u>Komponenta grafu</u> je každý jeho maximální souvislý podgraf, tj. souvislý podgraf, který není podgrafem žádného jiného souvislého grafu.
        </p>
      </div>
  },
  {
    id: 4,
    showForSteps: [7],
    content:
      <p>
        KRUŽNICE (Definice 1.8)
        <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
      </p>
  },
  {
    id: 5,
    showForSteps: [8],
    content:
      <p>
        DEFINICE STROMU (4.2)
        <br />Strom je souvislý graf, který <u>neobsahuje kružnici</u>.
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
