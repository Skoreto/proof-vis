import React from 'react';
import { Element } from 'react-scroll';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 24';
export const breadcrumbsCurrent = 'Důkazy nepřímo';
export const stepSum = 8;

export const definitionPanel = (
  <DefinitionPanel>
    Dokažte nepřímo tvrzení: <cite><q>Jestliže graf <MN>G</MN> je strom, pak graf <MN>G</MN> je souvislý a každá jeho hrana je most.</q></cite>
  </DefinitionPanel>
);

export const proofPanels = [
  {
    name: 'proofPanel1',
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
    name: 'proofPanel2',
    activeForSteps: [2],
    content:
      <p>
        <b>1. část:</b> <cite><q>graf <MN>G</MN> je nesouvislý</q></cite>
        <br />
        <br />Jestliže graf <MN>G</MN> je nesouvislý, pak přímo z definice stromu platí, že není strom.
      </p>
  },
  {
    name: 'proofPanel3',
    activeForSteps: [3],
    content:
      <p>
        <b>2. část:</b> <cite><q>existuje hrana <MN>e</MN>, která není most v grafu <MN>G</MN></q></cite>
        <br />
        <br /> Příklad takového grafu zobrazuje vizualizace.
      </p>
  },
  {
    name: 'proofPanel4',
    activeForSteps: [4],
    content:
      <p>
        Z definice mostu víme, že jeho odebráním vznikne v grafu více komponent.
        <br />
        <br />Jestliže však v grafu <MN>G</MN> existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která <u>není</u> most, pak po jejím odebrání graf <MN>G-e</MN> nebude mít více komponent. Vrcholy <MN>x</MN> a <MN>y</MN> se tedy budou nacházet stále v jedné souvislé komponentě.
      </p>
  },
  {
    name: 'proofPanel5',
    activeForSteps: [5],
    content:
      <p>
        Protože komponenta je sama o sobě souvislý graf. Musí mezi každou dvojicí jejích vrcholů existovat cesta.
        <br />
        <br />Tudíž v grafu <MN>G-e</MN> musí nadále existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy hrany <MN>{'e=\\{x,y\\}'}</MN>.
      </p>
  },
  {
    name: 'proofPanel6',
    activeForSteps: [6],
    content:
      <p>
        Pak ale cesta <MN>{'P_{xy}'}</MN> musela existovat také v grafu <MN>G</MN>, protože graf <MN>G-e</MN> vznikl z grafu <MN>G</MN> pouze odebráním hrany <MN>e</MN>.
      </p>
  },
  {
    name: 'proofPanel7',
    activeForSteps: [7],
    content:
      <p>
        Z definice kružnice pak vyplývá, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou e tvoří kružnici v grafu <MN>G</MN>.
      </p>
  },
  {
    name: 'proofPanel8',
    activeForSteps: [8],
    content:
      <p>
        Protože graf <MN>G</MN> obsahuje kružnici, není podle definice stromu stromem.
      </p>
  },
];
