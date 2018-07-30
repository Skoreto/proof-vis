import React from 'react';
import ClaimPanel from '../../../components/UI/ClaimPanel/ClaimPanel';
import MN from '../../../components/MathJax/MathJaxNode';

const headingTitle = 'Příklad 21';
const breadcrumbsCurrent = 'Důkazy nepřímo';
const stepSum = 8;

const claimPanel = (
  <ClaimPanel>
    <cite><q>Nechť <MN>G</MN> je graf. Jestliže v <MN>G</MN> neexistuje kružnice, pak každá hrana v <MN>G</MN> je most.</q></cite> Dokažte nepřímo.
  </ClaimPanel>
);

const proofPanels = [
  {
    name: 'proofPanel1',
    activeForSteps: [1],
    content:
      <p>
        Dokazujeme-li nepřímo, snažíme se přímou metodou dokázat tvrzení <MN>\neg B \Rightarrow \neg A</MN>, které je dle zásad výrokové logiky ekvivalentní s původním tvrzením.
        <br />
        <br />V tomto případě bude znít: <cite><q>Jestliže existuje hrana v <MN>G</MN>, která není most, pak v <MN>G</MN> existuje kružnice.</q></cite>
      </p>
  },
  {
    name: 'proofPanel2',
    activeForSteps: [2],
    content:
      <p>
        Pokud existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která není most v <MN>G</MN>, poté z definice mostu platí, že graf <MN>G-e</MN> má stejný počet komponent jako <MN>G</MN>.
      </p>
  },
  {
    name: 'proofPanel3',
    activeForSteps: [3, 4],
    content:
      <p>
        Před následující úvahou zvolíme libovolné vrcholy u a v, mezi kterými lze sestrojit cestu procházející přes hranu e. 
        <br />
        <br /> <i>Poznámka: V případě nesouvislého grafu není možné sestrojit cestu mezi všemi dvojicemi vrcholů.</i>
      </p>
  },
  {
    name: 'proofPanel4',
    activeForSteps: [5],
    content:
      <p>
        Když existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{'P_{uv}'}</MN> v <MN>G</MN>, tak existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{"P'_{uv}"}</MN> v <MN>G-e</MN>. (Uvažujeme totiž stále hranu <MN>e</MN>, která není mostem.)
        <br /><br />
        Poznámka:  <MN>{"P'_{uv}"}</MN> se nemusí nutně  <MN>{'=P_{uv}'}</MN>.
      </p>
  },
  {
    name: 'proofPanel5',
    activeForSteps: [6],
    content:
      <p>
        Z toho vyplývá, že v <MN>G-e</MN> musí v existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy <MN>x</MN> a <MN>y</MN> z hrany <MN>e</MN>.
      </p>
  },
  {
    name: 'proofPanel6',
    activeForSteps: [7],
    content:
      <p>
        Protože <MN>G</MN> vznikne z <MN>G-e</MN> přidáním hrany <MN>e</MN>, musí se <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> nacházet také v <MN>G</MN>.
      </p>
  },
  {
    name: 'proofPanel7',
    activeForSteps: [8],
    content:
      <p>
        Pak podle definice kružnice platí, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří v <MN>G</MN> kružnici.
        <br /><br />
        Hrana, která není most, tedy nutně musí ležet na kružnici. Tím je zárověň dokázáno původní ekvivalentní tvrzení. <MN>\Box</MN>
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
    content:
      <p>Sestrojení příkladu grafu <MN>G</MN>, kde existuje hrana <MN>e</MN>, která není most.</p>
  },
  {
    id: 3,
    showForSteps: [3],
    content: <p>Zvolení libovolných vrcholů <MN>u</MN> a <MN>v</MN>.</p>
  },
  {
    id: 4,
    showForSteps: [4],
    content:
      <p>
        Příklad sestrojení <MN>u</MN>-<MN>v</MN> cesty <MN>{'P_{uv}'}</MN> v grafu <MN>G</MN>.
      </p>
  },
  {
    id: 5,
    showForSteps: [5],
    content:
      <p>
        Vlevo předchozí příklad <MN>u</MN>-<MN>v</MN> cesty <MN>{'P_{uv}'}</MN> v grafu <MN>G</MN>.
        <br />Vpravo příklad <MN>u</MN>-<MN>v</MN> cesty <MN>{"P'_{uv}"}</MN> v grafu <MN>G-e</MN>.
      </p>
  },
  {
    id: 6,
    showForSteps: [6],
    content:
      <p>
        <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> v grafu <MN>G-e</MN>
      </p>
  },
  {
    id: 7,
    showForSteps: [7],
    content:
      <p>
        <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> v grafu <MN>G</MN>
      </p>
  },
  {
    id: 8,
    showForSteps: [8],
    content:
      <p>
        Cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří kružnici v <MN>G</MN> obsahující hranu <MN>e</MN>.
      </p>
  },
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [2],
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
    id: 2,
    showForSteps: [3, 4],
    content:
      <p>
        DEFINICE SOUVISLÉHO GRAFU (1.9)
        <br />Souvislý graf je graf, ve kterém mezi každými jeho dvěma vrcholy existuje cesta.
      </p>
  },
  {
    id: 3,
    showForSteps: [8],
    content:
      <p>
        KRUŽNICE (Definice 1.8)
        <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
      </p>
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
  proofPanels: proofPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
};

export const cameraPositions = [cameraPosition0, cameraPosition1, cameraPosition2];
